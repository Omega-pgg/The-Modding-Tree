addLayer("hp", {
    name: "hyper-points", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "HP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},

    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    microtabs: {
        stuff: {
                        "Upgrades": {
                            unlocked() {return (hasAchievement("a", 11))},
                    content: [
                        ["blank", "15px"],
                        ["raw-html", () => `<h4 style="opacity:.5">You reached Hyper-Points!<br> This has more unique stuff.</h4>`],
                        ["upgrades", [1,2,3,4,5,6,7,8,9]]
                    ],
                },
                "Milestones": {
                    content: [
                        ["blank", "15px"],
                        "milestones"
                    ]
                },
                "Challenges": {
                    unlocked() {return (hasUpgrade("hp", 52))},
            content: [
                ["blank", "15px"],
                ["challenges", [1]]
                
            ]
                },
                },
        },
        challenges: {
            11: {
                    name: "Harder",
                    challengeDescription: "Points, Super-Points and Ultra-Points is decreased to ^0.75.",
                    goalDescription: "1e80 Points",
                    rewardDescription: "Double Hyper-Point Gain and reach a milestone.",
                    canComplete: function() {return player.points.gte("1e80")},
                    unlocked() { return (hasUpgrade('hp', 53)) },
            },
            12: {
                name: "Less Sub-Points",
                challengeDescription: "Points-1, Points-2 and Points-3 cost scaling is 10% higher",
                goalDescription: "130 Points-3",
                rewardDescription: "Double Hyper-Point Gain and reach a milestone again.",
                canComplete: function() {return player.pb3.points.gte("130")},
                unlocked() { return (hasChallenge('hp', 11)) },
        },
        },
    upgrades: {
        11: { title: "Cells (HP11)",
        description: "Points boosts Ultra-Points, Super-Points and itself.",
        cost: new Decimal(1),
        effect() {
            return player.points.add(1).pow("0.04")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
    12: { 
        title: "Extension III (HP12)",
                description: "Unlocks more Super-Point Upgrades.",
                cost: new Decimal(1),
                unlocked() {
                    return hasUpgrade("hp", 11)
                
                }    
            },
                13: { 
                    title: "Achievementarist (HP13)",
                            description: "Gain 16x Super-Points from achievements.",
                            cost: new Decimal(2),
                            unlocked() {
                                return hasUpgrade("hp", 12)
                            
                            }                                                           
                        },
                        14: { title: "Achievementarist II (HP14)",
        description: "Ultra-Points boosts itself.",
        cost: new Decimal(2),
        unlocked() {
            return hasUpgrade("hp", 13)
        },
        effect() {
            return player.up.points.add(1).pow("0.02").min("1e3")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        15: { title: "Hype (HP15)",
        description: "Hyper-Points boosts Super-Points.",
        cost: new Decimal(2),
        unlocked() {
            return hasUpgrade("hp", 14)
        },
        effect() {
            return player.hp.points.add(1).pow("0.04").min("1.4")
        },
        effectDisplay() { return "^" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        },
        21: { title: "Super Prestige Points? (HP21)",
        description: "Prestige Upgrade 25 effect is added based on Ultra-Points.",
        cost: new Decimal(3),
        unlocked() {
            return hasUpgrade("hp", 15)
        },
        effect() {
            return player.up.points.add(1).pow("0.03").min("2.5")
        },
        effectDisplay() { return "^" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        },
            22: { title: "Timer I (HP22)",
        description: "Points-1 boosts Ultra-Points.",
        cost: new Decimal(4),
        unlocked() {
            return hasUpgrade("hp", 21)
        },
        effect() {
            return player.pb.points.add(1).pow("1").min("1e3")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
        },
        23: { title: "Timer II (HP23)",
        description: "Points-2 boosts Super-Points.",
        cost: new Decimal(5),
        unlocked() {
            return hasUpgrade("hp", 22)
        },
        effect() {
            return player.pb2.points.add(1).pow("2").min("1e6")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
        },
        24: { title: "Timer III (HP24)",
        description: "Points-3 boosts Points.",
        cost: new Decimal(7),
        unlocked() {
            return hasUpgrade("hp", 23)
        },
        effect() {
            return player.pb3.points.add(1).pow("3").min("1e9")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
        },
        25: { 
            title: "More Effects (HP25)",
                    description: "Prestige upgrade 25 effect is even better.",
                    cost: new Decimal(20),
                    unlocked() {
                        return hasUpgrade("hp", 24)
                    
                    }                                                           
                },
                31: { title: "Timer IV (HP31)",
        description: "Points-1 boosts Super-Points.",
        cost: new Decimal(20),
        unlocked() {
            return hasUpgrade("hp", 25)
        },
        effect() {
            return player.pb.points.add(1).pow("2").min("1e6")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
        },
        32: { title: "Timer V (HP32)",
        description: "Points-2 boosts Points.",
        cost: new Decimal(20),
        unlocked() {
            return hasUpgrade("hp", 31)
        },
        effect() {
            return player.pb2.points.add(1).pow("3").min("1e9")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
        },
        33: { title: "Timer VI (HP33)",
        description: "Points-3 boosts Ultra-Points.",
        cost: new Decimal(20),
        unlocked() {
            return hasUpgrade("hp", 32)
        },
        effect() {
            return player.pb3.points.add(1).pow("1").min("1e9")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
        },
        34: { title: "Timer VII (HP34)",
        description: "Points-1 boosts Points.",
        cost: new Decimal(50),
        unlocked() {
            return hasUpgrade("hp", 33)
        },
        effect() {
            return player.pb.points.add(1).pow("3").min("1e9")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
        },
        35: { title: "Timer VIII (HP35)",
        description: "Points-2 boosts Ultra-Points.",
        cost: new Decimal(50),
        unlocked() {
            return hasUpgrade("hp", 34)
        },
        effect() {
            return player.pb2.points.add(1).pow("1").min("1e3")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
        },
        41: { title: "Timer IX (HP41)",
        description: "Points-3 boosts Super-Points.",
        cost: new Decimal(50),
        unlocked() {
            return hasUpgrade("hp", 35)
        },
        effect() {
            return player.pb3.points.add(1).pow("2").min("1e6")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
        },
        42: { title: "Point Upgrader III (HP42)",
        description: "Every Hyper Point Upgrade boosts point gain by 1.5x",
        cost: new Decimal("500"),
        effect() {
            let effect = Decimal.pow(1.5, player[this.layer].upgrades.length)
            if (hasUpgrade('hp', 44)) effect = effect.pow(1.70951129)
            if (hasUpgrade('sp', 65)) effect = effect.pow(1.584962500721)
            if (hasUpgrade('hp', 53)) effect = effect.pow(1.4649735207)
            if (hasMilestone('hp', 7)) effect = effect.pow(1.113282)
            return effect
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("hp", 41)
        }
        },
        43: { 
            title: "Points of Power I (HP43)",
                    description: "Gain a unimaginable boost of 50,000x POINTS!!!",
                    cost: new Decimal(2.5e3),
                    unlocked() {
                        return hasUpgrade("hp", 42)
                    
                    }                                                           
                },
                44: { 
                    title: "Points of Power II (HP44)",
                            description: "Gain a HUGE boost of 500x Super-Points! + make HP42 and PU25 effect better",
                            cost: new Decimal(2.5e3),
                            unlocked() {
                                return hasUpgrade("hp", 43)
                            
                            }                                                           
                        },
                        45: { 
                            title: "Points of Power III (HP45)",
                                    description: "Gain a BIG boost of 50x Ultra-Points!",
                                    cost: new Decimal(3e4),
                                    unlocked() {
                                        return hasUpgrade("hp", 44)
                                    
                                    }                                                           
                                },
                                51: { 
                                    title: "Points of Power IV (HP51)",
                                            description: "Triple Hyper-Point gain.",
                                            cost: new Decimal(7.5e4),
                                            unlocked() {
                                                return hasUpgrade("hp", 45)
                                            
                                            }                                                           
                                        },
                                        52: { title: "Cells III (HP52)",
                                        description: "Super-Points boosts Points again.",
                                        cost: new Decimal(1e6),
                                        unlocked() {
                                            return hasUpgrade("hp", 51)
                                        },
                                        effect() {
                                            return player.sp.points.add(1).pow("0.05").min("1e30")
                                        },
                                        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                                        },
                                        53: { 
                                            title: "Extension IV (HP53)",
                                                    description: "Unlock Challenges + make PU25, HP42 effect a bit better.",
                                                    cost: new Decimal(1.5e7),
                                                    unlocked() {
                                                        return hasUpgrade("hp", 52)
                                                    
                                                    }    
                                                },
    },
    color: "white",
    requires: new Decimal(2e22), // Can be a function that takes requirement increases into account
    resource: "Hyper-Points", // Name of prestige currency
    baseResource: "Super-Points", // Name of resource prestige is based on
    baseAmount() {return player.sp.points}, // Get the current amount of baseResource
    branches: ["up"],
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.0625, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('hp', 51)) mult = mult.times(3)
        if (hasUpgrade('sp', 63)) mult = mult.times(1.2)
        if (hasUpgrade('p', 75)) mult = mult.times(1.2)
        if (hasChallenge('hp', 11)) mult = mult.times(2)
        if (hasChallenge('hp', 12)) mult = mult.times(2)
        if (hasUpgrade('p', 105)) mult = mult.times(4.2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "h", description: "H: Reset for Hyper Points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("p", 61) || player[this.layer].unlocked)},
    milestones: {
        1: {
            requirementDescription: "1e100 Points (HPM1)",
            effectDescription: "Automatically buys upgrades below Hyper-Points (except Prestige Points)",
            done() { return player.points.gte(1e100) }
    },
    2: {
        requirementDescription: "100,000 Hyper-Points (HPM2)",
        effectDescription: "You can buy max of Points-1, Points-2 and Points-3",
        done() { return player.hp.points.gte(100000) }
},
3: {requirementDescription: "Finish Hyper Challenge 11 (HPM3)",
             effectDescription: "Points-1, Points-2 and Points-3 are automated and they no longer reset anything.",
                done() {return hasChallenge("hp",11)}},
4: {
    requirementDescription: "100,000,000 Hyper-Points (HPM4)",
    effect() {
        let eff = player.up.points.add(1).pow(0.2)
        return eff
    },
    effectDescription() {
        return "Ultra-Points boosts Points.<br>Currently: " + format(milestoneEffect("hp",4))+"x"}
        ,    done() { return player.hp.points.gte("1e8")}
        
    },
    5: {
        requirementDescription: "450,000,000 Hyper-Points (HPM5)",
        effectDescription: "1,000x Points, 10x Super-Points and Ultra-Points",
        done() { return player.hp.points.gte(4.5e8) }
},
6: {requirementDescription: "Finish Hyper Challenge 12 (HPM6)",
             effectDescription: "Finally, gain 100% of prestige points and super-points gain per second",
                done() {return hasChallenge("hp",12)}},
    7: {
        requirementDescription: "5,000,000,000 Hyper-Points (HPM7)",
        effectDescription: "PU25, SP64 and HP42 Effects are better",
        done() { return player.hp.points.gte(5e9) }
    },
    8: {
        requirementDescription: "25,000,000,000 Hyper-Points (HPM8)",
        effect() {
            let eff = player.hp.points.add(1).pow(0.33333333333333333)
            return eff
        },
        effectDescription() {
            return "Hyper-Points boosts Super-Points.<br>Currently: " + format(milestoneEffect("hp",8))+"x"}
            ,    done() { return player.hp.points.gte("2.5e10")}
            
        },
        9: {
            requirementDescription: "75,000,000,000 Hyper-Points (HPM9)",
            effectDescription: "^1.01 Points",
            done() { return player.hp.points.gte(7.5e10) }
        },
},
})
