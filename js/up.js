addLayer("up", {
    name: "ultra-points", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "UP", // This appears on the layer's node. Default is the id with the first letter capitalized
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
                        ["raw-html", () => `<h4 style="opacity:.5">You reached Ultra-Points, it will let you unlock 3 sub-layers for a boost to points and they are still unlocked if u do the next row reset.</h4>`],
                        ["upgrades", [1,2,3,4,5,6,7,8,9]]
                    ],
                },
            },
        },
    upgrades: {
        11: {
            title: "The Time I (UP11)",
            description: "Unlocks a sub-layer on row 2.",
            cost: new Decimal(1),
                },
    12: { 
        title: "The Time II (UP12)",
                description: "Unlock another sub-layer on row 2.",
                cost: new Decimal(4),
                unlocked() {
                    return hasUpgrade("up", 11)
                
                }
                },
                13: { 
                    title: "Pointer I (UP13)",
                            description: "7.5x Points",
                            cost: new Decimal(10),
                            unlocked() {
                                return hasUpgrade("up", 12)
                            
                            }
                            },
                            14: { 
                                title: "Pointer II (UP14)",
                                        description: "4x Super-Points",
                                        cost: new Decimal(15),
                                        unlocked() {
                                            return hasUpgrade("up", 13)
                                        
                                        }
                                        },
                                        15: { 
                                            title: "Point-self III (UP15)",
                                                    description: "Points boosts itself at a very reduced rate yet again.",
                                                    cost: new Decimal(35),
                                                    effect() {
                                                        return player.points.add(1).pow("0.01").min("1e3")
                                                    },
                                                    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                    unlocked() {
                                                        return hasUpgrade("up", 14)
                                                    
                                                    }
                                                    },
                                                    21: { 
                                                        title: "The Time III (UP21)",
                                                                description: "Unlock the third sub-layer on row 2.",
                                                                cost: new Decimal(150),
                                                                unlocked() {
                                                                    return hasUpgrade("up", 15)
                                                                
                                                                }
                                                                },
                                                                22: { 
                                                                    title: "More Points (UP22)",
                                                                            description: "3x Ultra-Points.",
                                                                            cost: new Decimal(250),
                                                                            unlocked() {
                                                                                return hasUpgrade("up", 21)
                                                                            
                                                                            }
                                                                            },
                                                                            23: { 
                                                                                title: "Pointer III (UP23)",
                                                                                        description: "2x Points.",
                                                                                        cost: new Decimal(400),
                                                                                        unlocked() {
                                                                                            return hasUpgrade("up", 22)
                                                                                        
                                                                                        }
                                                                                        },
                                                                                        24: { 
                                                                                            title: "Pointer IV (UP24)",
                                                                                                    description: "3x Super-Points.",
                                                                                                    cost: new Decimal(1500),
                                                                                                    unlocked() {
                                                                                                        return hasUpgrade("up", 23)
                                                                                                    
                                                                                                    }
                                                                                                    },
                                                                                                    25: { 
                                                                                                        title: "More Points II (UP25)",
                                                                                                                description: "1.5x Ultra-Points.",
                                                                                                                cost: new Decimal(2000),
                                                                                                                unlocked() {
                                                                                                                    return hasUpgrade("up", 24)
                                                                                                                
                                                                                                                }
                                                                                                                },
                                                                                                                31: { 
                                                                                                                    title: "Pointer V (UP31)",
                                                                                                                            description: "3x Points.",
                                                                                                                            cost: new Decimal(6000),
                                                                                                                            unlocked() {
                                                                                                                                return hasUpgrade("up", 25)
                                                                                                                            
                                                                                                                            }
                                                                                                                            },
                                                                                                                            32: { 
                                                                                                                                title: "Pointer VI (UP32)",
                                                                                                                                        description: "3x Points.",
                                                                                                                                        cost: new Decimal(25000),
                                                                                                                                        unlocked() {
                                                                                                                                            return hasUpgrade("up", 31)
                                                                                                                                        
                                                                                                                                        }
                                                                                                                                        },
                                                                                                                                        33: { 
                                                                                                                                            title: "More Points III (UP33)",
                                                                                                                                                    description: "3x Ultra-Points.",
                                                                                                                                                    cost: new Decimal(25000),
                                                                                                                                                    unlocked() {
                                                                                                                                                        return hasUpgrade("up", 32)
                                                                                                                                                    
                                                                                                                                                    }
                                                                                                                                                    },
                                                                                                                                                    34: { 
                                                                                                                                                        title: "Extension II (UP34)",
                                                                                                                                                                description: "Unlock 1 new prestige upgrade.",
                                                                                                                                                                cost: new Decimal(100000),
                                                                                                                                                                unlocked() {
                                                                                                                                                                    return hasUpgrade("up", 33)
                                                                                                                                                                
                                                                                                                                                                }
                                                                                                                                                                },
                                                                                                                                                                35: { 
                                                                                                                                                                    title: "Ultra-Points are now worth (UP35)",
                                                                                                                                                                            description: "Ultra Points boosts Super-Points",
                                                                                                                                                                            cost: new Decimal(1.111111111111111111111111111e11),
                                                                                                                                                                            effect() {
                                                                                                                                                                                return player[this.layer].points.add(1).pow("0.1").min("1e3")
                                                                                                                                                                            },
                                                                                                                                                                            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                                                                                                                            unlocked() {
                                                                                                                                                                                return hasUpgrade("up", 34)
                                                                                                                                                                            
                                                                                                                                                                            }
                                                                                                                                                                            },
                                                                                                                                                                            41: { 
                                                                                                                                                                                title: "Pointer VII (UP41)",
                                                                                                                                                                                        description: "10x Points, 2x Super-Points and Ultra-Points.",
                                                                                                                                                                                        cost: new Decimal(1e20),
                                                                                                                                                                                        unlocked() {
                                                                                                                                                                                            return hasUpgrade("up", 35)
                                                                                                                                                                                        
                                                                                                                                                                                        }
                                                                                                                                                                                        },
                                                                                                                                                                                        42: { 
                                                                                                                                                                                            title: "Ultra-Points are now worth II (UP42)",
                                                                                                                                                                                                    description: "Ultra Points boosts Super-Points again",
                                                                                                                                                                                                    cost: new Decimal(1e24),
                                                                                                                                                                                                    effect() {
                                                                                                                                                                                                        return player[this.layer].points.add(1).pow("0.07")
                                                                                                                                                                                                    },
                                                                                                                                                                                                    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                        return hasUpgrade("up", 41)
                                                                                                                                                                                                    
                                                                                                                                                                                                    }
                                                                                                                                                                                                    },
                                                                                                                                                                                                    43: { 
                                                                                                                                                                                                        title: "Pointer VIII (UP43)",
                                                                                                                                                                                                                description: "10x Points and Super-Points.",
                                                                                                                                                                                                                cost: new Decimal(2.5e26),
                                                                                                                                                                                                                unlocked() {
                                                                                                                                                                                                                    return hasUpgrade("up", 42)
                                                                                                                                                                                                                
                                                                                                                                                                                                                }
                                                                                                                                                                                                                },
                                                                                                                                                                                                                44: { 
                                                                                                                                                                                                                    title: "Pointer IX (UP44)",
                                                                                                                                                                                                                            description: "3x Points, Super-Points and Ultra-Points",
                                                                                                                                                                                                                            cost: new Decimal(2e35),
                                                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                                                return hasUpgrade("up", 43)
                                                                                                                                                                                                                            
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                            45: { 
                                                                                                                                                                                                                                title: "Pointer X (UP45)",
                                                                                                                                                                                                                                        description: "Gain a BIG boost of 150x Points!",
                                                                                                                                                                                                                                        cost: new Decimal(1e41),
                                                                                                                                                                                                                                        unlocked() {
                                                                                                                                                                                                                                            return hasUpgrade("up", 44)
                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        51: { 
                                                                                                                                                                                                                                            title: "Pointer XI (UP51)",
                                                                                                                                                                                                                                                    description: "40x Points, 5x Super-Points and 3x Ultra-Points.",
                                                                                                                                                                                                                                                    cost: new Decimal(3e45),
                                                                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                                                                        return hasUpgrade("up", 45)
                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    52: { title: "Sub-Points II (UP52)",
        description: "Every Points-2, you have boosts point gain by +25% compounding.",
        cost: new Decimal(1e66),
        effect() {
            let effect = Decimal.pow(1.25, player.pb2.points)
            return effect
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("up", 51)
        }
        },
        53: { 
            title: "Pointer XII (UP53)",
                    description: "100x Points.",
                    cost: new Decimal(1e77),
                    unlocked() {
                        return hasUpgrade("up", 52)
                    
                    }
                    },
                    54: { 
                        title: "Pointer XIII (UP54)",
                                description: "20x Points.",
                                cost: new Decimal(5e77),
                                unlocked() {
                                    return hasUpgrade("up", 53)
                                
                                }
                                },
            },
            autoUpgrade() { if (hasMilestone("hp" , 1)) return true},
    color: "pink",
    requires: new Decimal(2.5e7), // Can be a function that takes requirement increases into account
    resource: "Ultra-Points", // Name of prestige currency
    baseResource: "Super-Points", // Name of resource prestige is based on
    baseAmount() {return player.sp.points}, // Get the current amount of baseResource
    branches: ["sp"],
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.25, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('sp', 25)) mult = mult.times(2)
        if (hasUpgrade('p', 52)) mult = mult.times(1.5)
        if (hasUpgrade('up', 22)) mult = mult.times(3)
        if (hasUpgrade('sp', 41)) mult = mult.times(1.5)
        if (hasUpgrade('up', 25)) mult = mult.times(1.5)
        if (hasUpgrade('up', 33)) mult = mult.times(3)
        if (hasUpgrade('p', 61)) mult = mult.times(5)
        if (hasUpgrade('hp', 11)) mult = mult.times(upgradeEffect('hp', 11))
        if (hasUpgrade('sp', 43)) mult = mult.times(upgradeEffect('sp', 43))
        if (hasUpgrade('sp', 44)) mult = mult.times(2)
        if (hasUpgrade('sp', 45)) mult = mult.times(1.75)
        if (hasUpgrade('hp', 14)) mult = mult.times(upgradeEffect('hp', 14))
        if (hasUpgrade('hp', 22)) mult = mult.times(upgradeEffect('hp', 22))
        if (hasUpgrade('hp', 33)) mult = mult.times(upgradeEffect('hp', 33))
        if (hasUpgrade('up', 41)) mult = mult.times(2)
        if (hasUpgrade('hp', 35)) mult = mult.times(upgradeEffect('hp', 35))
        if (hasUpgrade('p', 62)) mult = mult.times(6)
        if (hasUpgrade('up', 44)) mult = mult.times(3)
        if (hasUpgrade('sp', 55)) mult = mult.times(2)
        if (hasUpgrade('hp', 45)) mult = mult.times(50)
        if (hasUpgrade('sp', 62)) mult = mult.times(5)
        if (hasUpgrade('p', 71)) mult = mult.times(2)
        if (hasUpgrade('p', 73)) mult = mult.times(3)
        if (hasUpgrade('up', 51)) mult = mult.times(3)
        if (inChallenge("hp", 11)) mult = mult.pow(0.75)
        if (hasUpgrade('sp', 71)) mult = mult.times(2)
        if (hasMilestone('hp', 5)) mult = mult.times("10")
        if (hasUpgrade('sp', 72)) mult = mult.times(5)
        if (hasUpgrade('p',84)) mult = mult.times(2)
        if (hasUpgrade('p',93)) mult = mult.times(5)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "u", description: "U: Reset for Ultra Points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("sp", 24) || player[this.layer].unlocked)},
})
