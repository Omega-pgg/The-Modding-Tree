addLayer("le", {
    name: "Leaf", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "LP", // This appears on the layer's node. Default is the id with the first letter capitalized
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
        return "<h3>Leaves</h3><br>" + format(player.le.points) + " LP"
      },
      microtabs: {
        stuff: {
                        "Upgrades": {
                            unlocked() {return (hasAchievement("a", 11))},
                    content: [
                        ["blank", "15px"],
                        ["raw-html", () => `<h4 style="opacity:.5">You reached Leaf Points! it will reset EVERYTHING except Achievements but gives various op boosts and you can only gain 1 leaf point at reset (Increased by Upgrades).</h4>`],
                        ["upgrades", [1,2,3,4,5,6,7,8,9]]
                    ],
                },
                "Milestones": {
                    content: [
                        ["blank", "15px"],
                        "milestones"
                    ]
                },
                "Buyables": {
                    unlocked() {return (hasUpgrade("le", 45))},
                    content: [
                        ["blank", "15px"],
                        "buyables"
                    ]
                },
            },
        },
        buyables: {
            11: {
                title: "Point Buyable 7: The Leaf Statue",
                unlocked() { return hasUpgrade("le", 45) },
                cost(x) {
                    let exp2 = 1.1
                    if (hasUpgrade('le', 54)) exp2 = 1.05
                    return new Decimal("1e600").mul(Decimal.pow(1000, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
                },
                display() {
                    if (hasUpgrade('le', 51)) return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Mega-Points" + "<br>Bought: " + getBuyableAmount(this.layer, this.id)+'+' + formatWhole(getBuyableAmount(this.layer,12)) + "<br>Effect: Boost Mega-Points and Time Power by x" + format(buyableEffect(this.layer, this.id))
                    return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Mega-Points" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Mega-Points and Time Power by x" + format(buyableEffect(this.layer, this.id))
                },
                canAfford() {
                    return player.mp.points.gte(this.cost())
                },
                buy() {
                    let cost = new Decimal ("1e600")
                    player.mp.points = player.mp.points.sub(this.cost().sub(cost))
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                },
                effect(x) {
                    let base1 = new Decimal(2)
                    let base2 = x
                    let expo = new Decimal(1.000)
                    let eff = base1.pow(Decimal.pow(base2, expo))
                    if (hasUpgrade('le',51)){return base1.pow(getBuyableAmount(this.layer,this.id).add(getBuyableAmount(this.layer,12)))}
                    else {return base1.pow(getBuyableAmount(this.layer,this.id))}
                    return eff
                },
            },
            12: {
                title: "Point Buyable 8: The Leaf Statue II",
                unlocked() { return hasMilestone("le", 7) },
                cost(x) {
                    let exp2 = 1.2
                    if (hasUpgrade('le', 54)) exp2 = 1.1
                    return new Decimal("1e2900").mul(Decimal.pow(1000, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
                },
                display() {
                    return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Energy" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Energy and Light by x" + format(buyableEffect(this.layer, this.id))
                },
                canAfford() {
                    return player.e.points.gte(this.cost())
                },
                buy() {
                    let cost = new Decimal ("1e2900")
                    player.e.points = player.e.points.sub(this.cost().sub(cost))
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                },
                effect(x) {
                    let base1 = new Decimal(10)
                    let base2 = x
                    let expo = new Decimal(1.000)
                    let eff = base1.pow(Decimal.pow(base2, expo))
                    return eff
                },
            },
            13: {
                title: "Point Buyable 9: The Leaf Statue III",
                unlocked() { return hasUpgrade("le", 51) },
                cost(x) {
                    let exp2 = 1.1
                    if (hasUpgrade('le', 54)) exp2 = 1.05
                    return new Decimal("1e13").mul(Decimal.pow(10, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
                },
                display() {
                    return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Leaf Points" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Leaf Points by x" + format(buyableEffect(this.layer, this.id))
                },
                canAfford() {
                    return player.le.points.gte(this.cost())
                },
                buy() {
                    let cost = new Decimal ("1e13")
                    player.le.points = player.le.points.sub(this.cost().sub(cost))
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                },
                effect(x) {
                    let base1 = new Decimal(2)
                    let base2 = x
                    let expo = new Decimal(1.000)
                    let eff = base1.pow(Decimal.pow(base2, expo))
                    return eff
                },
            },
        },
    upgrades: {
        11: {
            title: "The Overpowered Upgrader (LP11)",
            description: "Points massively boosts itself but remove Points-1 to Points-6.",
            cost: new Decimal(1),
            effect() {
                return player.points.add(1).pow("0.125")
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                },
    12: { 
        title: "The Sacrifice Worker (LP12)",
                description: "Time Power, Cells and Sacrifice Points are boosted based on Sacrifice Tier.",
                cost: new Decimal(1),
                unlocked() {
                    return hasUpgrade("le", 11)
                },
                    effect() {
                        return player.sa.points.add(1).pow("1")
                    },
                    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                },                                                                                                                                                         
            13: { 
                title: "The Energy Worker (LP13)",
                        description: "^1.25 Energy & Light.",
                        cost: new Decimal(2),
                        unlocked() {
                            return hasUpgrade("le", 12)
                        },
                        },
                        14: { 
                            title: "The Sacrifice Worker II (LP14)",
                                    description: "^1.25 Sacrifice Points, Cells and ^1.3 Time Power.",
                                    cost: new Decimal(4),
                                    unlocked() {
                                        return hasUpgrade("le", 13)
                                    },
                                    },
                                    15: { 
                                        title: "The Mega Point Grind (LP15)",
                                                description: "^1.25 Mega-Points.",
                                                cost: new Decimal(4),
                                                unlocked() {
                                                    return hasUpgrade("le", 14)
                                                },
                                                },  
                                                21: { 
                                                    title: "The Leaf Booster (LP21)",
                                                            description: "Sacrifice Points boosts Leaf Point gain at a reduced rate.",
                                                            cost: new Decimal(8),
                                                            unlocked() {
                                                                return hasUpgrade("le", 15)
                                                            },
                                                            effect() {
                                                                return player.scp.points.add(1).pow("0.001")
                                                            },
                                                            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                            }, 
                                                            22: { 
                                                                title: "The Leaf Booster II (LP22)",
                                                                        description: "Cells boosts Leaf Point gain at a very reduced rate.",
                                                                        cost: new Decimal(32),
                                                                        unlocked() {
                                                                            return hasUpgrade("le", 21)
                                                                        },
                                                                        effect() {
                                                                            return player.c.points.add(1).pow("0.001")
                                                                        },
                                                                        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                        },    
                                                                        23: { 
                                                                            title: "The Leaf Booster III (LP23)",
                                                                                    description: "Time Power boosts Leaf Point gain at a reduced rate.",
                                                                                    cost: new Decimal(40),
                                                                                    unlocked() {
                                                                                        return hasUpgrade("le", 22)
                                                                                    },
                                                                                    effect() {
                                                                                        return player.tp.points.add(1).pow("0.001")
                                                                                    },
                                                                                    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                                    },     
                                                                                    24: { 
                                                                                        title: "The Leaf Booster IV (LP24)",
                                                                                                description: "Total Leaf Points boosts Sacrifice Point, Time Power, Cells and Mega-Points.",
                                                                                                cost: new Decimal(90),
                                                                                                unlocked() {
                                                                                                    return hasUpgrade("le", 23)
                                                                                                },
                                                                                                effect() {
                                                                                                    return player.le.total.add(1).pow("5")
                                                                                                },
                                                                                                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                                                }, 
                                                                                                25: { 
                                                                                                    title: "The Sacrifice Worker III (LP25)",
                                                                                                            description: "Sacrifice Points boosts Cells at a reduced rate.",
                                                                                                            cost: new Decimal(450),
                                                                                                            unlocked() {
                                                                                                                return hasUpgrade("le", 24)
                                                                                                            },
                                                                                                            effect() {
                                                                                                                return player.scp.points.add(1).pow("0.1")
                                                                                                            },
                                                                                                            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                                                            }, 
                                                                                                            31: { 
                                                                                                                title: "The Sacrifice Worker IV (LP31)",
                                                                                                                        description: "Sacrifice Points boosts Time Power at a reduced rate.",
                                                                                                                        cost: new Decimal(2700),
                                                                                                                        unlocked() {
                                                                                                                            return hasUpgrade("le", 25)
                                                                                                                        },
                                                                                                                        effect() {
                                                                                                                            return player.scp.points.add(1).pow("0.05")
                                                                                                                        },
                                                                                                                        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                                                                        },  
                                                                                                                        32: { 
                                                                                                                            title: "The Sacrifice Worker V (LP32)",
                                                                                                                                    description: "Cells boosts Time Power at a reduced rate.",
                                                                                                                                    cost: new Decimal(2700),
                                                                                                                                    unlocked() {
                                                                                                                                        return hasUpgrade("le", 31)
                                                                                                                                    },
                                                                                                                                    effect() {
                                                                                                                                        return player.c.points.add(1).pow("0.25")
                                                                                                                                    },
                                                                                                                                    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                                                                                    },  
                                                                                                                                    33: { 
                                                                                                                                        title: "The Sacrifice Worker VI (LP33)",
                                                                                                                                                description: "Time Power boosts Cells at a reduced rate.",
                                                                                                                                                cost: new Decimal(2700),
                                                                                                                                                unlocked() {
                                                                                                                                                    return hasUpgrade("le", 32)
                                                                                                                                                },
                                                                                                                                                effect() {
                                                                                                                                                    return player.tp.points.add(1).pow("0.25")
                                                                                                                                                },
                                                                                                                                                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                                                                                                },     
                                                                                                                                                34: { 
                                                                                                                                                    title: "The Sacrifice Worker VII (LP34)",
                                                                                                                                                            description: "Time Power boosts Sacrifice Points.",
                                                                                                                                                            cost: new Decimal(3e4),
                                                                                                                                                            unlocked() {
                                                                                                                                                                return hasUpgrade("le", 33)
                                                                                                                                                            },
                                                                                                                                                            effect() {
                                                                                                                                                                return player.tp.points.add(1).pow("0.5")
                                                                                                                                                            },
                                                                                                                                                            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                                                                                                            },
                                                                                                                                                            35: { 
                                                                                                                                                                title: "The Sacrifice Worker VIII (LP35)",
                                                                                                                                                                        description: "Time Power boosts itself.",
                                                                                                                                                                        cost: new Decimal(5e4),
                                                                                                                                                                        unlocked() {
                                                                                                                                                                            return hasUpgrade("le", 34)
                                                                                                                                                                        },
                                                                                                                                                                        effect() {
                                                                                                                                                                            return player.tp.points.add(1).pow("0.03125")
                                                                                                                                                                        },
                                                                                                                                                                        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                                                                                                                        }, 
                                                                                                                                                                        41: { 
                                                                                                                                                                            title: "The Sacrifice Worker IX (LP41)",
                                                                                                                                                                                    description: "Cells boosts itself.",
                                                                                                                                                                                    cost: new Decimal(5e4),
                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                        return hasUpgrade("le", 35)
                                                                                                                                                                                    },
                                                                                                                                                                                    effect() {
                                                                                                                                                                                        return player.c.points.add(1).pow("0.0625")
                                                                                                                                                                                    },
                                                                                                                                                                                    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                                                                                                                                    },
                                                                                                                                                                                    42: { 
                                                                                                                                                                                        title: "The Sacrifice Worker X (LP42)",
                                                                                                                                                                                                description: "Sacrifice Points boosts itself.",
                                                                                                                                                                                                cost: new Decimal(1e5),
                                                                                                                                                                                                unlocked() {
                                                                                                                                                                                                    return hasUpgrade("le", 41)
                                                                                                                                                                                                },
                                                                                                                                                                                                effect() {
                                                                                                                                                                                                    return player.scp.points.add(1).pow("0.125")
                                                                                                                                                                                                },
                                                                                                                                                                                                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                                                                                                                                                },   
                                                                                                                                                                                                43: {
                                                                                                                                                                                                    title: "Sacrifice Tier Grinder (LP43)",
                                                                                                                                                                                                      description: "Every Sacrifice Tier you have boosts time power, cells, sacrifice-point and mega-point gain by 2x",
                                                                                                                                                                                                      cost: new Decimal(4e5),
                                                                                                                                                                                                      effect() {
                                                                                                                                                                                                          let effect = Decimal.pow(2, player.sa.points).min("1e2213232113")
                                                                                                                                                                                                          return effect
                                                                                                                                                                                                      },
                                                                                                                                                                                                      effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                                                                                                                                                      unlocked() {
                                                                                                                                                                                                          return hasUpgrade("le", 42)
                                                                                                                                                                                                      }       
                                                                                                                                                                                                  },   
                                                                                                                                                                                                  44: { 
                                                                                                                                                                                                    title: "The Leaf Point Inflation (LP44)",
                                                                                                                                                                                                            description: "^1.3 Leaf Points.",
                                                                                                                                                                                                            cost: new Decimal(3e6),
                                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                                return hasUpgrade("le", 43)
                                                                                                                                                                                                            },
                                                                                                                                                                                                            },
                                                                                                                                                                                                            45: { 
                                                                                                                                                                                                                title: "The Leaf Point Upgrader (LP45)",
                                                                                                                                                                                                                        description: "Unlocks a leaf buyable.",
                                                                                                                                                                                                                        cost: new Decimal(5e8),
                                                                                                                                                                                                                        unlocked() {
                                                                                                                                                                                                                            return hasUpgrade("le", 44)
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        }, 
                                                                                                                                                                                                                        51: { 
                                                                                                                                                                                                                            title: "The Leaf Repeatable Booster (LP51)",
                                                                                                                                                                                                                                    description: "LB12 increases LB11 amount and unlocks a new leaf buyable.",
                                                                                                                                                                                                                                    cost: new Decimal(1e17),
                                                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                                                        return hasUpgrade("le", 45)
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    },  
                                                                                                                                                                                                                                    52: { 
                                                                                                                                                                                                                                        title: "Super Tier Divider (LP52)",
                                                                                                                                                                                                                                                description: "Sacrifice Tier divides Super Tier cost and 50x Leafs.",
                                                                                                                                                                                                                                                cost: new Decimal(1e19),
                                                                                                                                                                                                                                                unlocked() {
                                                                                                                                                                                                                                                    return hasUpgrade("le", 51)
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                effect() {
                                                                                                                                                                                                                                                    return player.sa.points.add(1).pow("1")
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                effectDisplay() { return "/" +format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
                                                                                                                                                                                                                                                },  
                                                                                                                                                                                                                                                53: { 
                                                                                                                                                                                                                                                    title: "Buyable Scale (LP53)",
                                                                                                                                                                                                                                                            description: "Decrease the scale of CB13.",
                                                                                                                                                                                                                                                            cost: new Decimal(1e28),
                                                                                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                                                                                return hasUpgrade("le", 52)
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            },  
                                                                                                                                                                                                                                                            54: { 
                                                                                                                                                                                                                                                                title: "Buyable Scale II (LP54)",
                                                                                                                                                                                                                                                                        description: "Decrease the scale of LB11 & LB12 and LB13.",
                                                                                                                                                                                                                                                                        cost: new Decimal(1e30),
                                                                                                                                                                                                                                                                        unlocked() {
                                                                                                                                                                                                                                                                            return hasUpgrade("le", 53)
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        },   
                                                                                                                                                                                                                                                                        55: { 
                                                                                                                                                                                                                                                                            title: "Sacrifice Scale (LP55)",
                                                                                                                                                                                                                                                                                    description: "Decrease the scale of Sacrifice Tier & Super Tier.",
                                                                                                                                                                                                                                                                                    cost: new Decimal(1e33),
                                                                                                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                                                                                                        return hasUpgrade("le", 54)
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    },                    
                                                                                                                                                                                                                                                                                    61: { 
                                                                                                                                                                                                                                                                                        title: "The Leaf Grinder (LP61)",
                                                                                                                                                                                                                                                                                                description: "Sacrifice Tier boosts Leaf Point.",
                                                                                                                                                                                                                                                                                                cost: new Decimal(1e34),
                                                                                                                                                                                                                                                                                                unlocked() {
                                                                                                                                                                                                                                                                                                    return hasUpgrade("le", 55)
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                    effect() {
                                                                                                                                                                                                                                                                                                        return player.sa.points.add(1).pow("1")
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                                                                                                                                                                                                                                                                                                },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    },
            milestones: {
            1: {
                requirementDescription: "1 Total Leaf Points (LPM1)",
                effectDescription: "3x Time Power, 10x Cells and 25x Sacrifice Points.",
                done() { return player.le.total.gte(1) }
        },
        2: {
            requirementDescription: "2 Total Leaf Points (LPM2)",
            effectDescription: "Gain 100% Mega-Points on reset per second.",
            done() { return player.le.total.gte(2) }
    },
    3: {
        requirementDescription: "10 Total Leaf Points (LPM3)",
        effectDescription: "Gain 100% Sacrifice Points & Time Power on reset per second and 3x Leafs",
        done() { return player.le.total.gte(10) }
},
4: {
    requirementDescription: "100 Total Leaf Points (LPM4)",
    effectDescription: "Autobuy Sacrifice + Time Upgrades, 3x Leafs and the amount of CB12 bought increases the CB11 amount",
    done() { return player.le.total.gte(100) }
},
5: {
    requirementDescription: "1,000 Total Leaf Points (LPM5)",
    effectDescription: "You can bulk buy Sacrifice Tiers and 3x Leafs.",
    done() { return player.le.total.gte(1000) }
},
6: {
    requirementDescription: "10,000 Total Leaf Points (LPM6)",
    effectDescription: "The amount of CB13 bought increases CB12 amount, 3x Leafs and keep Mega-Point challenges",
    done() { return player.le.total.gte(1e4) }
},
7: {
    requirementDescription: "1,000,000,000 Total Leaf Points (LPM7)",
    effectDescription: "Keep Sacrifice Milestones & Challenges and unlock another leaf buyable",
    done() { return player.le.total.gte(1e9) }
},
8: {
    requirementDescription: "1e13 Total Leaf Points (LPM8)",
    effectDescription: "Unlock a new sub layer. (Next Update)",
    done() { return player.le.total.gte(1e13) }
},
    },
    doReset(st) {
        // Stage 1, almost always needed, makes resetting this layer not delete your progress
        if (layers[st].row <= this.row) return;
    
        // Stage 2, track which specific subfeatures you want to keep, e.g. Upgrade 21, Milestones
        let keptUpgrades = [];
        if (hasMilestone('st', 1)) keptUpgrades.push(11);
        // Stage 3, track which main features you want to keep - milestones
        let keep = [];
        // Stage 4, do the actual data reset
        layerDataReset(this.layer, keep);
    
        // Stage 5, add back in the specific subfeatures you saved earlier
        player[this.layer].upgrades.push(...keptUpgrades);
    },
    color: "#66FF00",
    requires: new Decimal("e410"), // Can be a function that takes requirement increases into account
    resource: "Leaf Points", // Name of prestige currency
    baseResource: "Sacrifice Points", // Name of resource prestige is based on
    baseAmount() {return player.scp.points}, // Get the current amount of baseResource
    branches: ["sa"],
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: "eeeeeeeeeeeeeeee1e-21093", // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('mp', 92)) mult = mult.times(2)
        if (hasUpgrade('mp', 93)) mult = mult.times(2)
        if (hasMilestone('le', 3)) mult = mult.times(2)
        if (hasUpgrade('le', 21)) mult = mult.times(upgradeEffect('le',21))
        if (hasUpgrade('le', 22)) mult = mult.times(upgradeEffect('le',22))
        if (hasUpgrade('le', 23)) mult = mult.times(upgradeEffect('le',23))
        if (hasMilestone('le', 4)) mult = mult.times(3)
        if (hasMilestone('le', 5)) mult = mult.times(3)
        if (hasMilestone('le', 6)) mult = mult.times(3)
        if (hasUpgrade('le', 44)) mult = mult.pow(1.3)
        if (hasUpgrade('e', 73)) mult = mult.times(upgradeEffect('e',73))
        if (hasMilestone('st', 1)) mult = mult.times(10)
        if (hasMilestone('st', 2)) mult = mult.times(10)
        if (hasMilestone('st', 2)) mult = mult.times(5)
        mult = mult.times(buyableEffect('le', 13))
        if (hasUpgrade('le', 52)) mult = mult.times(50)
        if (hasMilestone('st', 4)) mult = mult.times(100)
        if (hasMilestone('st', 5)) mult = mult.times(5)
        if (hasMilestone('st', 6)) mult = mult.times(3)
        if (hasUpgrade('le', 61)) mult = mult.times(upgradeEffect('le',61))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 6, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "l", description: "L: Reset for Leaf", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasMilestone("sa", 26) || player[this.layer].unlocked)},
})
