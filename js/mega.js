addLayer("mp", {
    name: "mega-points", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "MP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        auto: false,
    }},
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    tooltip(){
        return "<h3>Mega</h3><br>" + format(player.mp.points) + " MP"
      },
    microtabs: {
        stuff: {
                        "Upgrades": {
                            unlocked() {return (hasAchievement("a", 11))},
                    content: [
                        ["blank", "15px"],
                        ["raw-html", () => `<h4 style="opacity:.5">You reached Mega-Points! it will reset EVERYTHING except Achievements.</h4>`],
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
                    unlocked() {return (hasUpgrade("mp", 31))},
            content: [
                ["blank", "15px"],
                ["challenges", [1,2]]
                
            ]
        },
            },
    
},
    upgrades: {
        11: {
            title: "Extension V (MP11)",
            description: "Unlocks more prestige point upgrades.",
            cost: new Decimal(0.5),
                },
    12: { 
        title: "Buy-able (MP12)",
                description: "HB11 Effect is better.",
                cost: new Decimal(0.5),
                unlocked() {
                    return hasUpgrade("mp", 11)
                
                }
                },
                13: { 
                    title: "Mega Hyperomium (MP13)",
                            description: "Hyper-Points boosts itself.",
                            cost: new Decimal(1),
                            effect() {
                                return player.hp.points.add(1).pow("0.02").min("100")
                            },
                            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                            unlocked() {
                                return hasUpgrade("mp", 12)
                            
                            }
                            },
                            14: { 
                                title: "Buy-able II (MP14)",
                                        description: "HB12 cost is cheaper.",
                                        cost: new Decimal(1.5),
                                        unlocked() {
                                            return hasUpgrade("mp", 13)
                                        
                                        }
                                        },
                                        15: { 
                                            title: "Unstable Points (MP15)",
                                                    description: "^1.05 Points",
                                                    cost: new Decimal(2.25),
                                                    unlocked() {
                                                        return hasUpgrade("mp", 14)
                                                    
                                                    }
                                                    },
                                                    21: { 
                                                        title: "Mega of Buyable (MP21)",
                                                                description: "Make the 1st and 3rd hyper-point buyables stronger.",
                                                                cost: new Decimal(7),
                                                                unlocked() {
                                                                    return hasUpgrade("mp", 15)
                                                                
                                                                }
                                                                },
                                                                22: { title: "Mega Based? (MP22)",
                                                                description: "Point gain is boosted based on Mega Points (Total).",
                                                                cost: new Decimal("10"),
                                                                effect() {
                                                                    return player.mp.total.add(1).pow("20")
                                                                },
                                                                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                    unlocked() {
                                                                        return hasUpgrade("mp", 21)
                                                                }
                                                                },
                                                                23: { 
                                                                    title: "Mega of Hyper (MP23)",
                                                                            description: "50x Hyper-Points",
                                                                            cost: new Decimal(15),
                                                                            unlocked() {
                                                                                return hasUpgrade("mp", 22)
                                                                            
                                                                            }
                                                                            },
                                                                            24: { 
                                                                                title: "Mega of Sub-Points (MP24)",
                                                                                        description: "Unlock Points-4",
                                                                                        cost: new Decimal(20),
                                                                                        unlocked() {
                                                                                            return hasUpgrade("mp", 23)
                                                                                        
                                                                                        }
                                                                                        },
                                                                                        25: { 
                                                                                            title: "Unstable Points II (MP25)",
                                                                                                    description: "1e33x POINTS!",
                                                                                                    cost: new Decimal(25),
                                                                                                    unlocked() {
                                                                                                        return hasUpgrade("mp", 24)
                                                                                                    
                                                                                                    }
                                                                                                    },
                                                                                                    31: {
                                                                                                        title: "The pain continues (MP31)",
                                                                                                        description: "Unlock a mega point challenge",
                                                                                                        cost: new Decimal("1e3000"),
                                                                                                        currencyInternalName: "points",
                                                                                                        currencyDisplayName: "Points",
                                                                                                        unlocked() {return hasUpgrade('mp', 25)},
                                                                                                    },
                                                                                                    32: { 
                                                                                                        title: "Unstable Points III (MP32)",
                                                                                                                description: "1e18x Super-POINTS!",
                                                                                                                cost: new Decimal(75),
                                                                                                                unlocked() {
                                                                                                                    return hasUpgrade("mp", 31)
                                                                                                                
                                                                                                                }
                                                                                                                },
                                                                                                                33: { 
                                                                                                                    title: "Unstable Points IV (MP33)",
                                                                                                                            description: "1e10x Ultra-POINTS!",
                                                                                                                            cost: new Decimal(100),
                                                                                                                            unlocked() {
                                                                                                                                return hasUpgrade("mp", 32)
                                                                                                                            
                                                                                                                            }
                                                                                                                            },
                                                                                                                            34: { 
                                                                                                                                title: "Mega Booster (MP34)",
                                                                                                                                        description: "+75% Mega-Points",
                                                                                                                                        cost: new Decimal(125),
                                                                                                                                        unlocked() {
                                                                                                                                            return hasUpgrade("mp", 33)
                                                                                                                                        
                                                                                                                                        }
                                                                                                                                        },
                                                                                                                                        35: { 
                                                                                                                                            title: "Unstable Points V (MP35)",
                                                                                                                                                    description: "100x Hyper-Points",
                                                                                                                                                    cost: new Decimal(175),
                                                                                                                                                    unlocked() {
                                                                                                                                                        return hasUpgrade("mp", 34)
                                                                                                                                                    
                                                                                                                                                    }
                                                                                                                                                    },
                                                                                                                                                    41: { 
                                                                                                                                                        title: "Mega of Hyper (MP41)",
                                                                                                                                                                description: "Kinda Small. 2x Hyper-Points",
                                                                                                                                                                cost: new Decimal(500),
                                                                                                                                                                unlocked() {
                                                                                                                                                                    return hasUpgrade("mp", 35)
                                                                                                                                                                
                                                                                                                                                                }
                                                                                                                                                                },
                                                                                                                                                                42: { title: "Mega Booster II (MP42)",
                                                                description: "Hyper-Points boosts Mega-Points at a very reduced rate.",
                                                                cost: new Decimal("750"),
                                                                effect() {
                                                                    return player.hp.points.add(1).pow("0.001")
                                                                },
                                                                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                    unlocked() {
                                                                        return hasUpgrade("mp", 41)
                                                                }
                                                                },
                                                                43: { 
                                                                    title: "Unstable Points VI (MP43)",
                                                                            description: "^1.02 Points",
                                                                            cost: new Decimal(750),
                                                                            unlocked() {
                                                                                return hasUpgrade("mp", 42)
                                                                            
                                                                            }
                                                                            },
    },
    milestones: {
    1: {
        requirementDescription: "2 Total Mega-Points (MPM1)",
        effectDescription: "Keep the first hyper-point upgrade on reset.",
        done() { return player.mp.total.gte(2) }
},
2: {
    requirementDescription: "5 Total Mega-Points (MPM2)",
    effectDescription: "Keep the first two hyper-point buyables unlocked on reset.",
    done() { return player.mp.total.gte(5) }
},
3: {
    requirementDescription: "50 Total Mega-Points (MPM3)",
    effectDescription: "Keep all four hyper-point challenges completed.",
    done() { return player.mp.total.gte(50) }
},
4: {requirementDescription: "Finish Mega Challenge 11 (MPM4)",
             effectDescription: "Gain 100% Of Ultra-Points gain per second but the hyper-point buyables does not do anything and give a ^1.11... Points",
                done() {return hasChallenge("mp",11)}},
    5: {
        requirementDescription: "250 Total Mega-Points (MPM5)",
        effectDescription: "Automatically buys Hyper-Point Upgrades.",
        done() { return player.mp.total.gte(250) }
    },
},
    challenges: {
        11: {
                name: "Ultra-less",
                challengeDescription: "You can not get any Ultra-Points and Points-1, Points-2 and Points-3 scales much quicker.",
                goalDescription: "1e318 Points",
                rewardDescription: "Double Mega-Point Gain and reach a milestone.",
                canComplete: function() {return player.points.gte("1e318")},
                unlocked() { return (hasUpgrade('mp', 31)) },
        },
    },
    color: "orange",
    requires: new Decimal("1e1500"), // Can be a function that takes requirement increases into account
    resource: "Mega-Points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["hp", "pb4"],
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.00075, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('hp', 64)) mult = mult.times(1.15)
        if (hasChallenge('mp', 11)) mult = mult.times(2)
        if (hasUpgrade('mp', 34)) mult = mult.times(1.75)
        if (hasUpgrade('mp', 42)) mult = mult.times(upgradeEffect('mp', 42))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "M: Reset for Mega Points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("p", 115) || player[this.layer].unlocked)},
})
