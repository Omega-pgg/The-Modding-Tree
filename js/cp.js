addLayer("cp", {
    name: "Charge Power", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "CP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { 
        return {
            unlocked: true,
		    points: new Decimal(0),
        }
    },
    autoUpgrade() { if (hasMilestone("dp" , 3)) return true},
    automate() {
        if (hasAchievement('a', 281)) {
            if (layers.cp.buyables[11].canAfford()) {
                layers.cp.buyables[11].buy();
            };
        };
        if (hasAchievement('a', 281)) {
            if (layers.cp.buyables[12].canAfford()) {
                layers.cp.buyables[12].buy();
            };
        };
        if (hasAchievement('a', 281)) {
            if (layers.cp.buyables[13].canAfford()) {
                layers.cp.buyables[13].buy();
            };
        };
    },
    tabFormat: [
        "main-display",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    tooltip(){
        return "<h3>Charge</h3><br>" + format(player.cp.points) + " CP"
      },
    microtabs: {
        stuff: {
                        "Upgrades": {
                            unlocked() {return (hasAchievement("a", 11))},
                    content: [
                        ["blank", "15px"],
                        ["raw-html", () => `<h4 style="opacity:.5">This layer is different it doesn't have a reset button.<br> 1e42 Leaf Points to start gaining Charge Power.</h4>`],
                        ["upgrades", [1,2,3,4,5,6,7,8,9]]
                    ],
                },

                "Buyables": {
                unlocked() {return (hasUpgrade("p", 112))},
                        content: [
                    ["blank", "15px"],
                    "buyables"
                        ]
        },
    },
        },
    layerShown(){
        let visible = false
        if ((hasMilestone('st', 6)) || (hasAchievement("a", 261))) visible = true
       return visible
    },
    passiveGeneration() {
        if (hasMilestone('st', 6)) return 1
        return 0
    },
    color: "#8B8000",
    requires: new Decimal(1e42), // Can be a function that takes requirement increases into account
    resource: "Charge Power", // Name of currency
    baseResource: "Leaf Points", // Name of resource prestige is based on
    baseAmount() {return player.le.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: "1e-308",  // Balance is needed. 
    upgrades: {
        11: {
            title: "The Buyablizer (CP11)",
            description: "Unlocks 2 buyables.",
            cost: new Decimal(100),
                },
    12: { 
        title: "The Charge Composter II (CP12)",
                description: "Charge Power boosts itself.",
                cost: new Decimal(1e6),
                unlocked() {
                    return hasUpgrade("cp", 11)
                },
                    effect() {
                        return player.cp.points.add(1).pow("0.25")
                    },
                    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                }, 
                13: { 
                    title: "The Charge Composter III (CP13)",
                            description: "CP Buyables are cheaper.",
                            cost: new Decimal(1e9),
                            unlocked() {
                                return hasUpgrade("cp", 12)
                            },
                            },
                            14: { 
                                title: "The Charge Composter IV (CP14)",
                                        description: "CPB12 Buyable adds free levels to CPB11 but ^0.75 Charge Power.",
                                        cost: new Decimal(1e11),
                                        unlocked() {
                                            return hasUpgrade("cp", 13)
                                        },
                                        },
                                        15: { 
                                            title: "The Charge Composter V (CP15)",
                                                    description: "Log(10) Points boosts Charge Power.",
                                                    cost: new Decimal(1e25),
                                                    unlocked() {
                                                        return hasUpgrade("cp", 14)
                                                        
                                                    },
                                                    effect() {
                                                        return player.points.add(1).log("10")
                                                    },
                                                    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                    },
                                                    21: { 
                                                        title: "The Charge Composter VI (CP21)",
                                                                description: "^1.3 Charge Power",
                                                                cost: new Decimal(1e38),
                                                                unlocked() {
                                                                    return hasUpgrade("cp", 15)
                                                                    
                                                                },
                                                                }, 
                                                                22: { 
                                                                    title: "The Charge Composter VII (CP22)",
                                                                            description: "Every super tier you have boosts leaf point and charge power gain by 3x",
                                                                            cost: new Decimal(1e83),
                                                                            unlocked() {
                                                                                return hasUpgrade("cp", 21)
                                                                                
                                                                            },
                                                                            effect() {
                                                                                let effect = Decimal.pow(3, player.st.points).min("1e2213232113")
                                                                                return effect
                                                                            },
                                                                            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                            },
                                                                            23: { 
                                                                                title: "The Charge Composter VIII (CP23)",
                                                                                        description: "Every sacrifice tier you have boosts leaf point and charge power gain by +5%",
                                                                                        cost: new Decimal(1e92),
                                                                                        unlocked() {
                                                                                            return hasUpgrade("cp", 22)
                                                                                            
                                                                                        },
                                                                                        effect() {
                                                                                            let effect = Decimal.pow(1.05, player.sa.points).min("1e2213232113")
                                                                                            return effect
                                                                                        },
                                                                                        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                                        },
                                                                                        24: { 
                                                                                            title: "Eletricity Power (CP24)",
                                                                                                    description: "Charge the first hyper-point milestone.",
                                                                                                    cost: new Decimal(1e113),
                                                                                                    unlocked() {
                                                                                                        return hasUpgrade("cp", 23)
                                                                                                        
                                                                                                    },
                                                                                                    },
                                                                                                    25: { 
                                                                                                        title: "Leaf Power (CP25)",
                                                                                                                description: "Unlock the 4th leaf buyable and 1,000,000,000x Leaf Points.",
                                                                                                                cost: new Decimal(1e113),
                                                                                                                unlocked() {
                                                                                                                    return hasUpgrade("cp", 24)
                                                                                                                    
                                                                                                                },
                                                                                                                },
                                                                                                                31: { 
                                                                                                                    title: "Charge Station (CP31)",
                                                                                                                            description: "Unlock the 3rd charge buyable and charge the first mega-point milestone.",
                                                                                                                            cost: new Decimal(1e115),
                                                                                                                            unlocked() {
                                                                                                                                return hasUpgrade("cp", 25)
                                                                                                                                
                                                                                                                            },
                                                                                                                            effect() {
                                                                                                                                return player.mp.points.max(1e1).log(10).pow(2)
                                                                                                                            },
                                                                                                                            },
                                                                                                                            32: { 
                                                                                                                                title: "Eletricity Power II (CP32)",
                                                                                                                                        description: "Charge the first sacrifice milestone.",
                                                                                                                                        cost: new Decimal(1e128),
                                                                                                                                        unlocked() {
                                                                                                                                            return hasUpgrade("cp", 31)
                                                                                                                                            
                                                                                                                                        },
                                                                                                                                        effect() {
                                                                                                                                            return player.scp.points.add(1).pow("0.001")
                                                                                                                                        },
                                                                                                                                        },
                                                                                                                                        33: { 
                                                                                                                                            title: "Eletricity Power III (CP33)",
                                                                                                                                                    description: "Charge the first leaf point milestone.",
                                                                                                                                                    cost: new Decimal(1e145),
                                                                                                                                                    unlocked() {
                                                                                                                                                        return hasUpgrade("cp", 32)
                                                                                                                                                        
                                                                                                                                                    },
                                                                                                                                                    effect() {
                                                                                                                                                        return player.le.opmtime.max(1).pow(10000)
                                                                                                                                                    },
                                                                                                                                                    },
                                                                                                                                                    34: { 
                                                                                                                                                        title: "Time based?? (CP34)",
                                                                                                                                                                description: "The time you spent charged Leaf Milestone 1 boosts Leaf Point & Charge Points.",
                                                                                                                                                                cost: new Decimal(1e155),
                                                                                                                                                                unlocked() {
                                                                                                                                                                    return hasUpgrade("cp", 33)
                                                                                                                                                                    
                                                                                                                                                                },
                                                                                                                                                                effect() {
                                                                                                                                                                    return player.le.opmtime.max(1).pow(3)
                                                                                                                                                                },
                                                                                                                                                                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect

                                                                                                                                                                },
                                                                                                                                                                35: { 
                                                                                                                                                                    title: "The Charge Composter IX (CP35)",
                                                                                                                                                                            description: "Every air you have boosts charge power gain by +50%",
                                                                                                                                                                            cost: new Decimal(1e175),
                                                                                                                                                                            unlocked() {
                                                                                                                                                                                return hasUpgrade("cp", 34)
                                                                                                                                                                                
                                                                                                                                                                            },
                                                                                                                                                                            effect() {
                                                                                                                                                                                let effect = Decimal.pow(1.5, player.ai.points).min("1e2213232113")
                                                                                                                                                                                return effect
                                                                                                                                                                            },
                                                                                                                                                                            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                                                                                                                            },
                                                                                                                                                                            41: { 
                                                                                                                                                                                title: "Eletricity Power IV (CP41)",
                                                                                                                                                                                        description: "Charge the first super tier milestone.",
                                                                                                                                                                                        cost: new Decimal(1e210),
                                                                                                                                                                                        unlocked() {
                                                                                                                                                                                            return hasUpgrade("cp", 35)
                                                                                                                                                                                            
                                                                                                                                                                                        },
                                                                                                                                                                                        effect() {
                                                                                                                                                                                            return player.e.points.max(1e1).log(10).pow(2)
                                                                                                                                                                                        },
                                                                                                                                                                                        },
                                                                                                                                                                                        42: { 
                                                                                                                                                                                            title: "The Charge Composter X (CP42)",
                                                                                                                                                                                                    description: "CPB13 Buyable adds free levels to CPB12.",
                                                                                                                                                                                                    cost: new Decimal(1e225),
                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                        return hasUpgrade("cp", 41)
                                                                                                                                                                                                    },
                                                                                                                                                                                                    },
                                                                                                                                                                                                    43: { 
                                                                                                                                                                                                        title: "The Charge Composter XI (CP43)",
                                                                                                                                                                                                                description: "Decrease the scaling of Charge Power buyables",
                                                                                                                                                                                                                cost: new Decimal(1e243),
                                                                                                                                                                                                                unlocked() {
                                                                                                                                                                                                                    return hasUpgrade("cp", 42)
                                                                                                                                                                                                                },
                                                                                                                                                                                                                },
                                                                                                                                                                                                                44: { 
                                                                                                                                                                                                                    title: "The Charge Composter XII (CP44)",
                                                                                                                                                                                                                            description: "Decrease the scaling of Sacrifice Tier cost",
                                                                                                                                                                                                                            cost: new Decimal(1e273),
                                                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                                                return hasUpgrade("cp", 43)
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                            45: { 
                                                                                                                                                                                                                                title: "The Charge Composter XIII (CP45)",
                                                                                                                                                                                                                                        description: "1,000,000x Charge Power, Make the energy softcap weaker and unlock a new layer",
                                                                                                                                                                                                                                        cost: new Decimal(1e300),
                                                                                                                                                                                                                                        unlocked() {
                                                                                                                                                                                                                                            return hasUpgrade("cp", 44)
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        51: { 
                                                                                                                                                                                                                                            title: "Eletricity Power V (CP51)",
                                                                                                                                                                                                                                                    description: "Charge the second hyper-point milestone.",
                                                                                                                                                                                                                                                    cost: new Decimal("1e415"),
                                                                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                                                                        return hasUpgrade("cp", 45)
                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    52: { 
                                                                                                                                                                                                                                                        title: "Eletricity Power VI (CP52)",
                                                                                                                                                                                                                                                                description: "Charge the second mega-point & sacrifice milestones.",
                                                                                                                                                                                                                                                                cost: new Decimal("1e425"),
                                                                                                                                                                                                                                                                unlocked() {
                                                                                                                                                                                                                                                                    return hasUpgrade("cp", 51)
                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                53: { 
                                                                                                                                                                                                                                                                    title: "Eletricity Power VII (CP53)",
                                                                                                                                                                                                                                                                            description: "Charge the second super tier milestone.",
                                                                                                                                                                                                                                                                            cost: new Decimal("1e430"),
                                                                                                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                                                                                                return hasUpgrade("cp", 52)
                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            54: { 
                                                                                                                                                                                                                                                                                title: "Eletricity Power VIII (CP54)",
                                                                                                                                                                                                                                                                                        description: "Charge the second leaf point milestone.",
                                                                                                                                                                                                                                                                                        cost: new Decimal("1e435"),
                                                                                                                                                                                                                                                                                        unlocked() {
                                                                                                                                                                                                                                                                                            return hasUpgrade("cp", 53)
                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        effect() {
                                                                                                                                                                                                                                                                                            return player.scp.points.max(1e1).log(10).pow(3)
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        55: { 
                                                                                                                                                                                                                                                                                            title: "Eletricity Power IX (CP55)",
                                                                                                                                                                                                                                                                                                    description: "Charge the third hyper-point milestone.",
                                                                                                                                                                                                                                                                                                    cost: new Decimal("e455"),
                                                                                                                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                                                                                                                        return hasUpgrade("cp", 54)
                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    61: { 
                                                                                                                                                                                                                                                                                                        title: "Eletricity Power X (CP61)",
                                                                                                                                                                                                                                                                                                                description: "Charge the third mega-point milestone.",
                                                                                                                                                                                                                                                                                                                cost: new Decimal("e460"),
                                                                                                                                                                                                                                                                                                                unlocked() {
                                                                                                                                                                                                                                                                                                                    return hasUpgrade("cp", 55)
                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                62: { 
                                                                                                                                                                                                                                                                                                                    title: "Eletricity Power XI (CP62)",
                                                                                                                                                                                                                                                                                                                            description: "Charge the third sacrifice milestone.",
                                                                                                                                                                                                                                                                                                                            cost: new Decimal("e475"),
                                                                                                                                                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                                                                                                                                                return hasUpgrade("cp", 61)
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                            effect() {
                                                                                                                                                                                                                                                                                                                                return player.c.points.max(1e1).log(10).pow(5)
                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                            63: { 
                                                                                                                                                                                                                                                                                                                                title: "Eletricity Power XII (CP63)",
                                                                                                                                                                                                                                                                                                                                        description: "Charge the third leaf point milestone.",
                                                                                                                                                                                                                                                                                                                                        cost: new Decimal("e515"),
                                                                                                                                                                                                                                                                                                                                        unlocked() {
                                                                                                                                                                                                                                                                                                                                            return hasUpgrade("cp", 62)
                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                        64: { 
                                                                                                                                                                                                                                                                                                                                            title: "Eletricity Power XIII (CP64)",
                                                                                                                                                                                                                                                                                                                                                    description: "Charge the third super tier milestone.",
                                                                                                                                                                                                                                                                                                                                                    cost: new Decimal("e535"),
                                                                                                                                                                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                                                                                                                                                                        return hasUpgrade("cp", 63)
                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                    effect() {
                                                                                                                                                                                                                                                                                                                                                        return player.l.points.max(1e1).log(10).pow(3)
                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                    65: {
                                                                                                                                                                                                                                                                                                                                                        title: "Eletricity Power XIV (CP65)",
                                                                                                                                                                                                                                                                                                                                                    description: "Charge the 4th mega point milestone.",
                                                                                                                                                                                                                                                                                                                                                    cost: new Decimal("e560"),
                                                                                                                                                                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                                                                                                                                                                        return hasUpgrade("cp", 64)
                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                    71: { 
                                                                                                                                                                                                                                                                                                                                                        title: "Eletricity Power XV (CP71)",
                                                                                                                                                                                                                                                                                                                                                                description: "Charge the 4th sacrifice milestone and unlocks more divine point upgrades.",
                                                                                                                                                                                                                                                                                                                                                                cost: new Decimal("e570"),
                                                                                                                                                                                                                                                                                                                                                                unlocked() {
                                                                                                                                                                                                                                                                                                                                                                    return hasUpgrade("cp", 65)
                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                                effect() {
                                                                                                                                                                                                                                                                                                                                                                    return player.tp.points.max(1e1).log(10).pow(5)
                                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                                72: {
                                                                                                                                                                                                                                                                                                                                                                    title: "Eletricity Power XVI (CP72)",
                                                                                                                                                                                                                                                                                                                                                                description: "Charge the 4th leaf point milestone.",
                                                                                                                                                                                                                                                                                                                                                                cost: new Decimal("e700"),
                                                                                                                                                                                                                                                                                                                                                                unlocked() {
                                                                                                                                                                                                                                                                                                                                                                    return hasUpgrade("cp", 71)
                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                                73: {
                                                                                                                                                                                                                                                                                                                                                                    title: "Eletricity Power XVII (CP73)",
                                                                                                                                                                                                                                                                                                                                                                description: "Charge the 4th super tier milestone.",
                                                                                                                                                                                                                                                                                                                                                                cost: new Decimal("e705"),
                                                                                                                                                                                                                                                                                                                                                                unlocked() {
                                                                                                                                                                                                                                                                                                                                                                    return hasUpgrade("cp", 72)
                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                                74: { 
                                                                                                                                                                                                                                                                                                                                                                    title: "Eletricity Power XVIII (CP74)",
                                                                                                                                                                                                                                                                                                                                                                            description: "Charge the 5th mega-point milestone.",
                                                                                                                                                                                                                                                                                                                                                                            cost: new Decimal("e710"),
                                                                                                                                                                                                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                                                                                                                                                                                                return hasUpgrade("cp", 73)
                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                            75: { 
                                                                                                                                                                                                                                                                                                                                                                                title: "Eletricity Power XIX (CP75)",
                                                                                                                                                                                                                                                                                                                                                                                        description: "Charge the 5th sacrifice milestone.",
                                                                                                                                                                                                                                                                                                                                                                                        cost: new Decimal("e712"),
                                                                                                                                                                                                                                                                                                                                                                                        unlocked() {
                                                                                                                                                                                                                                                                                                                                                                                            return hasUpgrade("cp", 74)
                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                        effect() {
                                                                                                                                                                                                                                                                                                                                                                                            return player.sa.points.add(1).pow(1)
                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                                                    81: { 
                                                                                                                                                                                                                                                                                                                                                                                        title: "Eletricity Power XX (CP81)",
                                                                                                                                                                                                                                                                                                                                                                                                description: "Charge the 5th leaf point milestone.",
                                                                                                                                                                                                                                                                                                                                                                                                cost: new Decimal("e775"),
                                                                                                                                                                                                                                                                                                                                                                                                unlocked() {
                                                                                                                                                                                                                                                                                                                                                                                                    return hasUpgrade("cp", 75)
                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                                                                82: { 
                                                                                                                                                                                                                                                                                                                                                                                                    title: "Eletricity Power XXI (CP82)",
                                                                                                                                                                                                                                                                                                                                                                                                            description: "Charge the 5th super tier milestone.",
                                                                                                                                                                                                                                                                                                                                                                                                            cost: new Decimal("e800"),
                                                                                                                                                                                                                                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                                                                                                                                                                                                                                return hasUpgrade("cp", 81)
                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                                                                                                            83: { 
                                                                                                                                                                                                                                                                                                                                                                                                                title: "Eletricity Power XXII (CP83)",
                                                                                                                                                                                                                                                                                                                                                                                                                        description: "Charge the 6th mega-point milestone.",
                                                                                                                                                                                                                                                                                                                                                                                                                        cost: new Decimal("e810"),
                                                                                                                                                                                                                                                                                                                                                                                                                        unlocked() {
                                                                                                                                                                                                                                                                                                                                                                                                                            return hasUpgrade("cp", 82)
                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                                                        84: { 
                                                                                                                                                                                                                                                                                                                                                                                                                            title: "Eletricity Power XXIII (CP84)",
                                                                                                                                                                                                                                                                                                                                                                                                                                    description: "Charge the 6th sacrifice milestone.",
                                                                                                                                                                                                                                                                                                                                                                                                                                    cost: new Decimal("e825"),
                                                                                                                                                                                                                                                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                                                                                                                                                                                                                                                        return hasUpgrade("cp", 83)
                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                                                                                                    85: { 
                                                                                                                                                                                                                                                                                                                                                                                                                                        title: "Eletricity Power XXIV (CP85)",
                                                                                                                                                                                                                                                                                                                                                                                                                                                description: "Charge the 6th leaf point milestone.",
                                                                                                                                                                                                                                                                                                                                                                                                                                                cost: new Decimal("e830"),
                                                                                                                                                                                                                                                                                                                                                                                                                                                unlocked() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                    return hasUpgrade("cp", 84)
                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                                                                                                                91: { 
                                                                                                                                                                                                                                                                                                                                                                                                                                        title: "Eletricity Power XXIV (CP91)",
                                                                                                                                                                                                                                                                                                                                                                                                                                                description: "Charge the 6th super tier milestone and unlocks more divine point upgrades.",
                                                                                                                                                                                                                                                                                                                                                                                                                                                cost: new Decimal("e835"),
                                                                                                                                                                                                                                                                                                                                                                                                                                                unlocked() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                    return hasUpgrade("cp", 85)
                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                                                                                                                },
            },
            buyables: {
            11: {
                title: "Point Buyable 10: The Charge Station",
                unlocked() { return hasUpgrade("cp", 11) },
                cost(x) {
                    let exp2 = 1.1
                    if (hasUpgrade('cp', 13)) exp2 = 1.05
                    if (hasUpgrade('cp', 43)) exp2 = 1.04
                    return new Decimal("1").mul(Decimal.pow(5, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
                },
                display() {
                    if (hasUpgrade('cp', 14)) return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Charge Power" + "<br>Bought: " + getBuyableAmount(this.layer, this.id)+'+' + formatWhole(getBuyableAmount(this.layer,12)) + "<br>Effect: Boost Charge Power by x" + format(buyableEffect(this.layer, this.id))
                    return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Charge Power" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Charge Power by x" + format(buyableEffect(this.layer, this.id))                },
                canAfford() {
                    return player.cp.points.gte(this.cost())
                },
                buy() {
                    let cost = new Decimal ("1")
                    player.cp.points = player.cp.points.sub(this.cost().sub(cost))
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                },
                effect(x) {
                    let base1 = new Decimal(2)
                    let base2 = x
                    let expo = new Decimal(1.000)
                    let eff = base1.pow(Decimal.pow(base2, expo))
                    if (hasUpgrade('cp',14)){return base1.pow(getBuyableAmount(this.layer,this.id).add(getBuyableAmount(this.layer,12)))}
                    else {return base1.pow(getBuyableAmount(this.layer,this.id))}
                    return eff
                },
            },
            12: {
                title: "Point Buyable 11: The Charge Station II",
                unlocked() { return hasUpgrade("cp", 11) },
                cost(x) {
                    let exp2 = 1.1
                    if (hasUpgrade('cp', 13)) exp2 = 1.05
                    if (hasUpgrade('cp', 43)) exp2 = 1.04
                    return new Decimal("1").mul(Decimal.pow(2, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
                },
                display() {
                    if (hasUpgrade('cp', 42)) return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Charge Power" + "<br>Bought: " + getBuyableAmount(this.layer, this.id)+'+' + formatWhole(getBuyableAmount(this.layer,13)) + "<br>Effect: Boost Leaf Points by x" + format(buyableEffect(this.layer, this.id))
                    return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Charge Power" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Leaf Points by x" + format(buyableEffect(this.layer, this.id))                },
                canAfford() {
                    return player.cp.points.gte(this.cost())
                },
                buy() {
                    let cost = new Decimal ("1")
                    player.cp.points = player.cp.points.sub(this.cost().sub(cost))
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                },
                effect(x) {
                    let base1 = new Decimal(2)
                    let base2 = x
                    let expo = new Decimal(1.000)
                    let eff = base1.pow(Decimal.pow(base2, expo))
                    if (hasUpgrade('cp',42)){return base1.pow(getBuyableAmount(this.layer,this.id).add(getBuyableAmount(this.layer,13)))}
                    else {return base1.pow(getBuyableAmount(this.layer,this.id))}
                    return eff
                },
            },
            13: {
                title: "Point Buyable 13: The Charge Station III",
                unlocked() { return hasUpgrade("cp", 31) },
                cost(x) {
                    let exp2 = 1.1
                    if (hasUpgrade('cp', 43)) exp2 = 1.05
                    return new Decimal("1e125").mul(Decimal.pow(2, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
                },
                display() {
                    return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Charge Power" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Sacrifice Points by x" + format(buyableEffect(this.layer, this.id))
                },
                canAfford() {
                    return player.cp.points.gte(this.cost())
                },
                buy() {
                    let cost = new Decimal ("1e125")
                    player.cp.points = player.cp.points.sub(this.cost().sub(cost))
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                },
                effect(x) {
                    let base1 = new Decimal(1e3)
                    let base2 = x
                    let expo = new Decimal(1.000)
                    let eff = base1.pow(Decimal.pow(base2, expo))
                    return eff
                },
            },
        },
    gainMult() { // Prestige multiplier
        let mult = new Decimal(1)
        mult = mult.times(buyableEffect('cp', 11))
        if (hasUpgrade('le', 62)) mult = mult.times(upgradeEffect('le',62))
        if (hasUpgrade('cp', 12)) mult = mult.times(upgradeEffect('cp',12))
        if (hasUpgrade('cp', 14)) mult = mult.pow(0.75)
        if (hasUpgrade('cp', 15)) mult = mult.times(upgradeEffect('cp',15))
        if (hasUpgrade('cp', 21)) mult = mult.pow(1.3)
        if (hasMilestone('st', 7)) mult = mult.times(1e9)
        if (hasUpgrade('cp', 22)) mult = mult.times(upgradeEffect('cp',22))
        if (hasUpgrade('cp', 23)) mult = mult.times(upgradeEffect('cp',23))
        if (hasUpgrade('cp', 31)) mult = mult.times(upgradeEffect('cp',31))
        if (hasUpgrade('cp', 32)) mult = mult.times(upgradeEffect('cp',32))
        if (hasUpgrade('cp', 33)) mult = mult.times(1e9)
        if (hasUpgrade('cp', 34)) mult = mult.times(upgradeEffect('cp',34))
        if (hasUpgrade('cp', 35)) mult = mult.times(upgradeEffect('cp',35))
        if (hasUpgrade('cp', 41)) mult = mult.times(upgradeEffect('cp',41))
        if (hasMilestone('st', 10)) mult = mult.pow(1.05)
        if (hasUpgrade('cp', 45)) mult = mult.times(1e6)
        if (hasUpgrade('dp', 11)) mult = mult.pow(1.2)
        if (hasUpgrade('dp', 13)) mult = mult.pow(1.1)
        if (hasUpgrade('cp', 54)) mult = mult.times(upgradeEffect('cp',54))
        if (hasChallenge('mp', 21)) mult = mult.times(1e9)
        if (hasUpgrade('cp', 62)) mult = mult.times(upgradeEffect('cp',62))
        if (hasUpgrade('cp', 63)) mult = mult.pow(1.02)
        if (hasUpgrade('cp', 64)) mult = mult.times(upgradeEffect('cp',64))
        if (hasUpgrade('cp', 65)) mult = mult.pow(1.01)
        if (hasUpgrade('cp', 71)) mult = mult.times(upgradeEffect('cp',71))
        if (hasUpgrade('dp', 14)) mult = mult.times(upgradeEffect('dp',14))
        if (hasUpgrade('dp', 22)) mult = mult.times(1e9)
                                        if (hasChallenge('dp', 11)) mult = mult.pow(1.01)
                                        if (inChallenge('dp', 12)) mult = mult.div(Infinity)
                                        if (hasChallenge('dp', 12)) mult = mult.pow(1.01)
                                        if (hasUpgrade('dp', 122)) mult = mult.pow(1.15)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let exp = new Decimal(1)
        return exp
    },
    branches: ["le", "st"],
    row: 7, // Row the layer is in on the tree (0 is the first row)
    displayRow: 7, // Row the layer is in on the tree (0 is the first row)
})