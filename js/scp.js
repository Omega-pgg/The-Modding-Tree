addLayer("scp", {
    name: "scp", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SP", // This appears on the layer's node. Default is the id with the first letter capitalized
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
    tooltip(){
        return "<h3>Sacrifice Points</h3><br>" + format(player.scp.points) + " SP"
      },
      microtabs: {
        stuff: {
                        "Upgrades": {
                            unlocked() {return (hasAchievement("a", 11))},
                    content: [
                        ["blank", "15px"],
                        ["raw-html", () => `<h4 style="opacity:.5">This is the same layer as Sac Tier but with upgrades, It will reset the exact same stuff as Sac Tier does.</h4>`],
                        ["upgrades", [1,2,3,4,5,6,7,8,9]]
                    ],
                },
            },
        },
        upgrades: {
            11: {
                title: "The Sacrificer I (SAP11)",
                description: "2.5x Mega-Points, Energy and Light",
                cost: new Decimal(1),
                    },
                12: {
                    title: "The Sacrificer II (SAP12)",
                    description: "3x Mega-Points, Energy and Light",
                    cost: new Decimal(1),
                    unlocked() {
                        return hasUpgrade("scp", 11)
                    
                    }
                        },
                        13: {
                            title: "The Sacrificer III (SAP13)",
                            description: "3x Mega-Points, Energy and Light again.",
                            cost: new Decimal(1),
                            unlocked() {
                                return hasUpgrade("scp", 12)
                            
                            }
                                },
                                14: {
                                    title: "The Sacrificer IV (SAP14)",
                                    description: "+70% Mega-Points, Energy and Light.",
                                    cost: new Decimal(2),
                                    unlocked() {
                                        return hasUpgrade("scp", 13)
                                    
                                    }
                                        },
                                        15: {
                                            title: "The Sacrificer V (SAP15)",
                                            description: "+50% Mega-Points, Energy and Light.",
                                            cost: new Decimal(2),
                                            unlocked() {
                                                return hasUpgrade("scp", 14)
                                            
                                            }
                                                },
                                                21: {
                                                    title: "The Sacrificer VI (SAP21)",
                                                    description: "3x Mega-Points, Energy and Light yet again.",
                                                    cost: new Decimal(3),
                                                    unlocked() {
                                                        return hasUpgrade("scp", 15)
                                                    
                                                    }
                                                        },
                                                        22: {
                                                            title: "Sacrifice Booster (SAP22)",
                                                            description: "+40% Sacrifice Points.",
                                                            cost: new Decimal(4),
                                                            unlocked() {
                                                                return hasUpgrade("scp", 21)
                                                            
                                                            }
                                                                },
                                                                23: {
                                                                    title: "The Sacrificer VII (SAP23)",
                                                                    description: "3x Mega-Points, Energy and Light once again.",
                                                                    cost: new Decimal(4),
                                                                    unlocked() {
                                                                        return hasUpgrade("scp", 22)
                                                                    
                                                                    }
                                                                        },
                                                                        24: {
                                                                            title: "The Sacrificer VIII (SAP24)",
                                                                            description: "3x Mega-Points, Energy and Light once yet again.",
                                                                            cost: new Decimal(4),
                                                                            unlocked() {
                                                                                return hasUpgrade("scp", 23)
                                                                            
                                                                            }
                                                                                },
                                                                                25: {
                                                                                    title: "The Sacrificer IX (SAP25)",
                                                                                    description: "2x Mega-Points, Energy and Light.",
                                                                                    cost: new Decimal(6),
                                                                                    unlocked() {
                                                                                        return hasUpgrade("scp", 24)
                                                                                    
                                                                                    }
                                                                                        },
                                                                                        31: {
                                                                                            title: "Sacrifice Booster II (SAP31)",
                                                                                            description: "+50% Sacrifice Points.",
                                                                                            cost: new Decimal(9),
                                                                                            unlocked() {
                                                                                                return hasUpgrade("scp", 25)
                                                                                            
                                                                                            }
                                                                                                },
                                                                                                32: {
                                                                                                    title: "Sacrifice Booster III (SAP32)",
                                                                                                    description: "+60% Sacrifice Points.",
                                                                                                    cost: new Decimal(13),
                                                                                                    unlocked() {
                                                                                                        return hasUpgrade("scp", 31)
                                                                                                    
                                                                                                    }
                                                                                                        },
                                                                                                        33: {
                                                                                                            title: "The Sacrificer X (SAP33)",
                                                                                                            description: "+70% Mega-Points, Energy and Light again.",
                                                                                                            cost: new Decimal(17),
                                                                                                            unlocked() {
                                                                                                                return hasUpgrade("scp", 32)
                                                                                                            
                                                                                                            }
                                                                                                                },
                                                                                                                34: {
                                                                                                                    title: "Sacrifice Booster IV (SAP34)",
                                                                                                                    description: "2x Sacrifice Points.",
                                                                                                                    cost: new Decimal(20),
                                                                                                                    unlocked() {
                                                                                                                        return hasUpgrade("scp", 33)
                                                                                                                    
                                                                                                                    }
                                                                                                                        },
                                                                                                                        35: {
                                                                                                                            title: "The Sacrificer XI (SAP35)",
                                                                                                                            description: "+50% Mega-Points, Energy and Light again.",
                                                                                                                            cost: new Decimal(50),
                                                                                                                            unlocked() {
                                                                                                                                return hasUpgrade("scp", 34)
                                                                                                                            
                                                                                                                            }
                                                                                                                                },
                                                                                                                                41: {
                                                                                                                                    title: "Sacrificer Increaser (SAP41)",
                                                                                                                                    description: "2x Mega-Points, Energy, Light and Sacrifice Points.",
                                                                                                                                    cost: new Decimal(80),
                                                                                                                                    unlocked() {
                                                                                                                                        return hasUpgrade("scp", 35)
                                                                                                                                    
                                                                                                                                    }
                                                                                                                                        },
                                                                                                                                        42: {
                                                                                                                                            title: "Sacrificer Increaser II (SAP42)",
                                                                                                                                            description: "2x Mega-Points, Energy, Light and Sacrifice Points again.",
                                                                                                                                            cost: new Decimal(100),
                                                                                                                                            unlocked() {
                                                                                                                                                return hasUpgrade("scp", 41)
                                                                                                                                            
                                                                                                                                            }
                                                                                                                                                },
                                                                                                                                                43: {
                                                                                                                                                    title: "The Sacrificer XII (SAP43)",
                                                                                                                                                    description: "2.5x Mega-Points, Energy and Light again.",
                                                                                                                                                    cost: new Decimal(120),
                                                                                                                                                    unlocked() {
                                                                                                                                                        return hasMilestone("sa", 13)
                                                                                                                                                    
                                                                                                                                                    }
                                                                                                                                                        },
                                                                                                                                                        44: {
                                                                                                                                                            title: "Sacrificer Increaser III (SAP44)",
                                                                                                                                                            description: "4x Mega-Points, Energy, Light and 2x Sacrifice Points.",
                                                                                                                                                            cost: new Decimal(170),
                                                                                                                                                            unlocked() {
                                                                                                                                                                return hasUpgrade("scp", 43)
                                                                                                                                                            
                                                                                                                                                            }
                                                                                                                                                                },
                                                                                                                                                                45: {
                                                                                                                                                                    title: "Sacrificer Increaser IV (SAP45)",
                                                                                                                                                                    description: "+50% Mega-Points, Energy, Light and Sacrifice Points.",
                                                                                                                                                                    cost: new Decimal(350),
                                                                                                                                                                    unlocked() {
                                                                                                                                                                        return hasUpgrade("scp", 44)
                                                                                                                                                                    
                                                                                                                                                                    }
                                                                                                                                                                        },
                                                                                                                                                                        51: {
                                                                                                                                                                            title: "The Sacrificer XIII (SAP51)",
                                                                                                                                                                            description: "2x Mega-Points, Energy and Light again.",
                                                                                                                                                                            cost: new Decimal(600),
                                                                                                                                                                            unlocked() {
                                                                                                                                                                                return hasUpgrade("scp", 45)
                                                                                                                                                                            
                                                                                                                                                                            }
                                                                                                                                                                                },
                                                                                                                                                                                52: {
                                                                                                                                                                                    title: "The Sacrificer XIV (SAP52)",
                                                                                                                                                                                    description: "+80% Mega-Points, Energy and Light.",
                                                                                                                                                                                    cost: new Decimal(900),
                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                        return hasUpgrade("scp", 51)
                                                                                                                                                                                    
                                                                                                                                                                                    }
                                                                                                                                                                                        },
                                                                                                                                                                                        53: {
                                                                                                                                                                                            title: "Sacrificer Increaser V (SAP52)",
                                                                                                                                                                                            description: "2x Mega-Points, Energy, Light and Sacrifice Points yet again.",
                                                                                                                                                                                            cost: new Decimal(1e3),
                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                return hasUpgrade("scp", 52)
                                                                                                                                                                                            
                                                                                                                                                                                            }
                                                                                                                                                                                                },
                                                                                                                                                                                        54: {
                                                                                                                                                                                            title: "Sacrifice Booster V (SAP54)",
                                                                                                                                                                                            description: "2.6x Sacrifice Points.",
                                                                                                                                                                                            cost: new Decimal(1e3),
                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                return hasUpgrade("scp", 53)
                                                                                                                                                                                            
                                                                                                                                                                                            }
                                                                                                                                                                                                },
                                                                                                                                                                                                55: {
                                                                                                                                                                                                    title: "The Sacrificer XV (SAP55)",
                                                                                                                                                                                                    description: "30x Mega-Points, Energy and Light.",
                                                                                                                                                                                                    cost: new Decimal(2.3e3),
                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                        return hasUpgrade("scp", 54)
                                                                                                                                                                                                    
                                                                                                                                                                                                    }
                                                                                                                                                                                                        },
                                                                                                                                                                                                        61: {
                                                                                                                                                                                                            title: "Sacrifice Booster VI (SAP61)",
                                                                                                                                                                                                            description: "3x Sacrifice Points.",
                                                                                                                                                                                                            cost: new Decimal(6e3),
                                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                                return hasUpgrade("scp", 55)
                                                                                                                                                                                                            
                                                                                                                                                                                                            }
                                                                                                                                                                                                                },
                                                                                                                                                                                                                62: {
                                                                                                                                                                                                                    title: "The Sacrificer XVI (SAP62)",
                                                                                                                                                                                                                    description: "2.25x Mega-Points, Energy and Light.",
                                                                                                                                                                                                                    cost: new Decimal(1e4),
                                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                                        return hasUpgrade("scp", 61)
                                                                                                                                                                                                                    
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        63: {
                                                                                                                                                                                                                            title: "Sacrificer Increaser VI (SAP63)",
                                                                                                                                                                                                                            description: "10x Mega-Points, Energy and Light and +40% Sacrifice Points.",
                                                                                                                                                                                                                            cost: new Decimal(2e4),
                                                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                                                return hasUpgrade("scp", 62)
                                                                                                                                                                                                                            
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                64: {
                                                                                                                                                                                                                                    title: "Sacrificer Increaser VII (SAP64)",
                                                                                                                                                                                                                                    description: "4x Mega-Points, Energy, Light and 2x Sacrifice Points again.",
                                                                                                                                                                                                                                    cost: new Decimal(3.5e4),
                                                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                                                        return hasUpgrade("scp", 63)
                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        65: {
                                                                                                                                                                                                                                            title: "Sacrifice Booster VII (SAP65)",
                                                                                                                                                                                                                                            description: "4x Sacrifice Points.",
                                                                                                                                                                                                                                            cost: new Decimal(5.5e4),
                                                                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                                                                return hasUpgrade("scp", 64)
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                71: {
                                                                                                                                                                                                                                                    title: "The Sacrificer XVII (SAP71)",
                                                                                                                                                                                                                                                    description: "10x Mega-Points, Energy and Light.",
                                                                                                                                                                                                                                                    cost: new Decimal(1e5),
                                                                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                                                                        return hasUpgrade("scp", 65)
                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                        72: {
                                                                                                                                                                                                                                                            title: "The Sacrificer XVIII (SAP72)",
                                                                                                                                                                                                                                                            description: "50x Mega-Points, Energy and Light.",
                                                                                                                                                                                                                                                            cost: new Decimal(2e5),
                                                                                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                                                                                return hasUpgrade("scp", 71)
                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                73: {
                                                                                                                                                                                                                                                                    title: "Sacrifice Booster VIII (SAP73)",
                                                                                                                                                                                                                                                                    description: "3x Sacrifice Points.",
                                                                                                                                                                                                                                                                    cost: new Decimal(4e5),
                                                                                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                                                                                        return hasUpgrade("scp", 72)
                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        74: {
                                                                                                                                                                                                                                                                            title: "Sacrifice Booster IX (SAP74)",
                                                                                                                                                                                                                                                                            description: "2x Sacrifice Points.",
                                                                                                                                                                                                                                                                            cost: new Decimal(1e6),
                                                                                                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                                                                                                return hasUpgrade("scp", 73)
                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                75: {
                                                                                                                                                                                                                                                                                    title: "Sacrifice Booster X (SAP75)",
                                                                                                                                                                                                                                                                                    description: "2.5x Sacrifice Points.",
                                                                                                                                                                                                                                                                                    cost: new Decimal(1e6),
                                                                                                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                                                                                                        return hasUpgrade("scp", 74)
                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        81: {
                                                                                                                                                                                                                                                                                            title: "The Sacrificer XIX (SAP81)",
                                                                                                                                                                                                                                                                                            description: "10x Mega-Points, Energy and Light again.",
                                                                                                                                                                                                                                                                                            cost: new Decimal(3e6),
                                                                                                                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                                                                                                                return hasUpgrade("scp", 75)
                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                82: {
                                                                                                                                                                                                                                                                                                    title: "Sacrifice Booster XI (SAP82)",
                                                                                                                                                                                                                                                                                                    description: "4x Sacrifice Points.",
                                                                                                                                                                                                                                                                                                    cost: new Decimal(1e7),
                                                                                                                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                                                                                                                        return hasUpgrade("scp", 81)
                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                        83: {
                                                                                                                                                                                                                                                                                                            title: "The Sacrificer XX (SAP83)",
                                                                                                                                                                                                                                                                                                            description: "10x Mega-Points, Energy and Light yet again.",
                                                                                                                                                                                                                                                                                                            cost: new Decimal(2e7),
                                                                                                                                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                                                                                                                                return hasUpgrade("scp", 82)
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                84: {
                                                                                                                                                                                                                                                                                                                    title: "The Sacrificer XXI (SAP84)",
                                                                                                                                                                                                                                                                                                                    description: "10x Mega-Points, Energy and Light once again.",
                                                                                                                                                                                                                                                                                                                    cost: new Decimal(3e7),
                                                                                                                                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                                                                                                                                        return hasUpgrade("scp", 83)
                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                        85: {
                                                                                                                                                                                                                                                                                                                            title: "Sacrifice Booster XII (SAP85)",
                                                                                                                                                                                                                                                                                                                            description: "2.5x Sacrifice Points",
                                                                                                                                                                                                                                                                                                                            cost: new Decimal(5e7),
                                                                                                                                                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                                                                                                                                                return hasUpgrade("scp", 84)
                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                91: {
                                                                                                                                                                                                                                                                                                                                    title: "Sacrifice Booster XIII (SAP91)",
                                                                                                                                                                                                                                                                                                                                    description: "3x Sacrifice Points",
                                                                                                                                                                                                                                                                                                                                    cost: new Decimal(7.5e7),
                                                                                                                                                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                                                                                                                                                        return hasUpgrade("scp", 85)
                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                        92: {
                                                                                                                                                                                                                                                                                                                                            title: "The Sacrificer XXII (SAP92)",
                                                                                                                                                                                                                                                                                                                                            description: "3x Mega-Points, Energy and Light once another yet again.",
                                                                                                                                                                                                                                                                                                                                            cost: new Decimal(2.5e8),
                                                                                                                                                                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                                                                                                                                                                return hasUpgrade("scp", 91)
                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                93: {
                                                                                                                                                                                                                                                                                                                                                    title: "Sacrificer Increaser VIII (SAP93)",
                                                                                                                                                                                                                                                                                                                                                    description: "10x Mega-Points, Energy, Light and 3x Sacrifice Points.",
                                                                                                                                                                                                                                                                                                                                                    cost: new Decimal(6e8),
                                                                                                                                                                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                                                                                                                                                                        return hasUpgrade("scp", 92)
                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                        94: {
                                                                                                                                                                                                                                                                                                                                                            title: "Sacrificer Increaser IX (SAP94)",
                                                                                                                                                                                                                                                                                                                                                            description: "10x Mega-Points, Energy, Light and 2x Sacrifice Points.",
                                                                                                                                                                                                                                                                                                                                                            cost: new Decimal(2e9),
                                                                                                                                                                                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                                                                                                                                                                                return hasUpgrade("scp", 93)
                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                },
                    },
    color: "#301934",
    requires: new Decimal(1e35), // Can be a function that takes requirement increases into account
    resource: "Sacrifice Points", // Name of prestige currency
    baseResource: "Mega-Points", // Name of resource prestige is based on
    baseAmount() {return player.mp.points}, // Get the current amount of baseResource
    branches: ["sa"],
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: "eee1e-3008",    
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasMilestone('sa', 11)) mult = mult.times(milestoneEffect('sa', 11))
        if (hasUpgrade('scp', 22)) mult = mult.times(1.4)
        if (hasUpgrade('scp', 31)) mult = mult.times(1.5)
        if (hasUpgrade('scp', 32)) mult = mult.times(1.6)
        if (hasUpgrade('scp', 34)) mult = mult.times(2)
        if (hasUpgrade('scp', 41)) mult = mult.times(2)
        if (hasUpgrade('scp', 42)) mult = mult.times(2)
        if (hasUpgrade('scp', 44)) mult = mult.times(2)
        if (hasUpgrade('scp', 45)) mult = mult.times(1.5)
        if (hasUpgrade('scp', 53)) mult = mult.times(2)
        if (hasUpgrade('scp', 54)) mult = mult.times(2.6)
        if (hasUpgrade('scp', 61)) mult = mult.times(3)
        if (hasUpgrade('scp', 63)) mult = mult.times(1.4)
        if (hasUpgrade('scp', 64)) mult = mult.times(2)
        if (hasUpgrade('scp', 65)) mult = mult.times(4)
        if (hasUpgrade('scp', 73)) mult = mult.times(3)
        if (hasUpgrade('scp', 74)) mult = mult.times(2)
        if (hasUpgrade('scp', 75)) mult = mult.times(2.5)
        if (hasMilestone('sa', 17)) mult = mult.times("5")
        if (hasUpgrade('scp', 82)) mult = mult.times(4)
        if (hasUpgrade('scp', 85)) mult = mult.times(2.5)
        if (hasUpgrade('scp', 91)) mult = mult.times(3)
        if (hasUpgrade('scp', 93)) mult = mult.times(3)
        if (hasUpgrade('scp', 94)) mult = mult.times(2)
        if (hasMilestone('sa', 19)) mult = mult.times("1e55")
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "A", description: "A: Reset for Sac Points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasMilestone("sa", 10) || player[this.layer].unlocked)},
})
