addLayer("rp", {
    name: "rebirth-points", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "RP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        power: new Decimal(0),
        auto: false,
    }},
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    tooltip(){
        return "<h3>Rebirth</h3><br>" + format(player.rp.points) + " RP"
      },
    microtabs: {
        stuff: {
                        "Upgrades": {
                            unlocked() {return (hasAchievement("a", 11))},
                    content: [
                        ["blank", "15px"],
                        ["raw-html", () => `<h4 style="opacity:.5">You reached Rebirth Points, it will reset everything except Achievements, you are getting really far and OP.</h4>`],
                        ["upgrades", [1,2,3,4,5,6,7,8,9]]
                    ],
                },
                "Milestones": {
                    content: [
                        ["blank", "15px"],
                        "milestones"
                    ]
                },
            "Clicker": {
                unlocked() {return hasUpgrade('rp', 13)},
                content: [
                    ["blank", "15px"],
                    ["display-text", () => "You have <h2 style='color: #ffc0cb; text-shadow: 0 0 10px #ffc0cb'>" + format(player.rp.power) + "</h2> Rebirth Power, multiplying Divine Points gain by <h2 style='color: #BED8E6; text-shadow: 0 0 10px #AED8E6'> <br>" + format(player.rp.power.max(1).pow(0.3333333333333333333333333333333333)) + "x</h2>. (Before the exponentional calculation)"],
                    ["raw-html", () => `<h4 style="opacity:.5">Rebirth Power Gain is based on Rebirth Points.</h4>`],
                    "clickables",
                    "buyables",
                ]    
            },
    },
        },
        clickables: {
            11: {
                title: "Increase your Rebirth Strength",
                display() {
                    let clickRP = new Decimal(1)
                    clickRP = clickRP.times(buyableEffect('rp', 11))
                    clickRP = clickRP.times(upgradeEffect('rp', 14))
                    clickRP = clickRP.times(buyableEffect('rp', 12))
                    clickRP = clickRP.pow(buyableEffect('rp', 13))
                    return "Click this button to gain " + format(clickRP) + " Rebirth Power"},
                canClick() {return true},
                onClick() {
                    let clickRP = new Decimal(1)
                    clickRP = clickRP.times(buyableEffect('rp', 11))
                    clickRP = clickRP.times(upgradeEffect('rp', 14))
                    clickRP = clickRP.times(buyableEffect('rp', 12))
                    clickRP = clickRP.pow(buyableEffect('rp', 13))
                    return  player.rp.power = player.rp.power.add(clickRP)
                },
                style: {'background-color':'#ffc0cb'},
            },
        },
    upgrades: {
        11: {
            title: "Rebirth Evolution (RP11)",
            description: "Cube Energy Gain but remove Light, 20x Divine Points & Divine Perks and ^1.05 Charge Power & Leaf Points",
            cost: new Decimal(1),
                },
    12: { 
        title: "Rebirth Evolution II (RP12)",
                description: "^4 Sacrifice Points Gain but remove Cells, Time Power and Sacrifice Tier scaling is decreased",
                cost: new Decimal(1),
                unlocked() {
                    return hasUpgrade("rp", 11)
                
                }
                },
                13: { 
                    title: "Rebirth Upgrader (RP13)",
                            description: "Unlock a new sub-tab",
                            cost: new Decimal(1),
                            unlocked() {
                                return hasUpgrade("rp", 12)
                            
                            }
                            },
                            14: { 
                                title: "Rebirth Evolution III (RP14)",
                                        description: "1.5x Rebirth Points",
                                        cost: new Decimal(2),
                                        unlocked() {
                                            return hasMilestone("rp", 2)
                                        
                                        },
                                        effect() {
                                            return player.rp.total.add(1).pow("0.5")
                                        },
                                    },
                                        15: { 
                                            title: "Rebirth Evolution IV (RP15)",
                                                    description: "Rebirth Power boosts Rebirth Points.",
                                                    cost: new Decimal(2),
                                                    unlocked() {
                                                        return hasUpgrade("rp", 14)
                                                    
                                                    },
                                                    effect() {
                                                        return player.rp.power.max(1).pow("0.0625")
                                                    },
                                                    effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                                                },
                                                    21: { 
                                                        title: "Rebirth Evolution V (RP21)",
                                                                description: "Rebirth Points boosts Divine Points.",
                                                                cost: new Decimal(50),
                                                                unlocked() {
                                                                    return hasUpgrade("rp", 15)
                                                                
                                                                },
                                                                effect() {
                                                                    return player.rp.total.max(1).pow("15")
                                                                },
                                                                effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                                                                },
                                                                22: { 
                                                                    title: "Rebirth Upgrader II (RP22)",
                                                                            description: "10x Rebirth Points",
                                                                            cost: new Decimal(100),
                                                                            unlocked() {
                                                                                return hasUpgrade("rp", 21)
                                                                            
                                                                            }
                                                                            },
                                                                            23: { 
                                                                                title: "Rebirth Evolution VI (RP23)",
                                                                                        description: "Rebirth Power boosts Divine Perks.",
                                                                                        cost: new Decimal(1e3),
                                                                                        unlocked() {
                                                                                            return hasUpgrade("rp", 22)
                                                                                        
                                                                                        },
                                                                                        effect() {
                                                                                            return player.rp.power.max(1).pow("1")
                                                                                        },
                                                                                        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                                                                                        },
                                                                                        24: { 
                                                                                            title: "Rebirth Upgrader III (RP24)",
                                                                                                    description: "^1.3 Rebirth Points",
                                                                                                    cost: new Decimal(2e6),
                                                                                                    unlocked() {
                                                                                                        return hasUpgrade("rp", 23)
                                                                                                    
                                                                                                    },
                                                                                                    },
                                                                                                    25: { 
                                                                                                        title: "Rebirth Point Explosion (RP25)",
                                                                                                                description: "^1.2 Points",
                                                                                                                cost: new Decimal(7.5e7),
                                                                                                                unlocked() {
                                                                                                                    return hasUpgrade("rp", 24)
                                                                                                                
                                                                                                                },
                                                                                                                },
                                                                                                                31: { 
                                                                                                                    title: "Rebirth Upgrader IV (RP31)",
                                                                                                                            description: "Rebirth Points boosts itself.",
                                                                                                                            cost: new Decimal(1e8),
                                                                                                                            unlocked() {
                                                                                                                                return hasUpgrade("rp", 25)
                                                                                                                            
                                                                                                                            },
                                                                                                                            effect() {
                                                                                                                                return player.rp.total.max(1).pow("0.0769")
                                                                                                                            },
                                                                                                                            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                                                                                                                            },
                                                                                                                            32: { 
                                                                                                                                title: "Rebirth Point Explosion II (RP32)",
                                                                                                                                        description: "^1.1 Leaf Points",
                                                                                                                                        cost: new Decimal(5e8),
                                                                                                                                        unlocked() {
                                                                                                                                            return hasUpgrade("rp", 31)
                                                                                                                                        
                                                                                                                                        },
                                                                                                                                    },
                                                                                                                                    33: { 
                                                                                                                                        title: "Rebirth Upgrader V (RP33)",
                                                                                                                                                description: "Decrease Super Tier scaling and Super Tier boosts Rebirth Points",
                                                                                                                                                cost: new Decimal(1e12),
                                                                                                                                                unlocked() {
                                                                                                                                                    return hasUpgrade("rp", 32)
                                                                                                                                                
                                                                                                                                                },
                                                                                                                                                effect() {
                                                                                                                                                    return player.st.points.max(1).pow("1")
                                                                                                                                                },
                                                                                                                                                effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                                                                                                                                            },
                                                                                                                                            34: { 
                                                                                                                                                title: "Rebirth Upgrader VI (RP34)",
                                                                                                                                                        description: "Sacrifice Tier boosts Rebirth Points",
                                                                                                                                                        cost: new Decimal(1e15),
                                                                                                                                                        unlocked() {
                                                                                                                                                            return hasUpgrade("rp", 33)
                                                                                                                                                        
                                                                                                                                                        },
                                                                                                                                                        effect() {
                                                                                                                                                            return player.sa.points.max(1).pow("1")
                                                                                                                                                        },
                                                                                                                                                        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                                                                                                                                                    },
                                                                                                                                                    35: { 
                                                                                                                                                        title: "Rebirth Point Explosion III (RP35)",
                                                                                                                                                                description: "Rebirth Points boosts Points",
                                                                                                                                                                cost: new Decimal(1e20),
                                                                                                                                                                unlocked() {
                                                                                                                                                                    return hasUpgrade("rp", 34)
                                                                                                                                                                
                                                                                                                                                                },
                                                                                                                                                                effect() {
                                                                                                                                                                    return player.rp.points.max(1).pow("50")
                                                                                                                                                                },
                                                                                                                                                                effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                                                                                                                                                            },
                                                                                                                                                            41: { 
                                                                                                                                                                title: "Rebirth Point Explosion IV (RP41)",
                                                                                                                                                                        description: "Divine Points boosts Points",
                                                                                                                                                                        cost: new Decimal(1.5e20),
                                                                                                                                                                        unlocked() {
                                                                                                                                                                            return hasUpgrade("rp", 35)
                                                                                                                                                                        
                                                                                                                                                                        },
                                                                                                                                                                        effect() {
                                                                                                                                                                            return player.dp.points.max(1).pow("50")
                                                                                                                                                                        },
                                                                                                                                                                        effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                                                                                                                                                                    },
                                                                                                                                                                    42: { 
                                                                                                                                                                        title: "Rebirth Evolution VII (RP42)",
                                                                                                                                                                                description: "Rebirth Points boosts Divine Perks.",
                                                                                                                                                                                cost: new Decimal(5e20),
                                                                                                                                                                                unlocked() {
                                                                                                                                                                                    return hasUpgrade("rp", 41)
                                                                                                                                                                                
                                                                                                                                                                                },
                                                                                                                                                                                effect() {
                                                                                                                                                                                    return player.rp.total.max(1).pow("13")
                                                                                                                                                                                },
                                                                                                                                                                                effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                                                                                                                                                                                },
                                                                                                                                                                                43: { 
                                                                                                                                                                                    title: "Rebirth Evolution VIII (RP43)",
                                                                                                                                                                                            description: "RP23 also affects Divine Points.",
                                                                                                                                                                                            cost: new Decimal(5.5e20),
                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                return hasUpgrade("rp", 42)
                                                                                                                                                                                            
                                                                                                                                                                                            },
                                                                                                                                                                                            effect() {
                                                                                                                                                                                                return player.rp.power.max(1).pow("1")
                                                                                                                                                                                            },
                                                                                                                                                                                        },
                                                                                                                                                                                        44: { 
                                                                                                                                                                                            title: "Rebirth Evolution IX (RP44)",
                                                                                                                                                                                                    description: "1st Leaf Milestone Charge is better but you still need CP33 to make the time work.",
                                                                                                                                                                                                    cost: new Decimal(8e20),
                                                                                                                                                                                                    unlocked() {
                                                                                                                                                                                                        return hasUpgrade("rp", 43)
                                                                                                                                                                                                    
                                                                                                                                                                                                    },
                                                                                                                                                                                                    effect() {
                                                                                                                                                                                                        return player.le.opmtime.max(1).pow(1e5)
                                                                                                                                                                                                    },
                                                                                                                                                                                                },
                                                                                                                                                                                                45: { 
                                                                                                                                                                                                    title: "Rebirth Evolution X (RP45)",
                                                                                                                                                                                                            description: "Unlock a new layer (Next update)",
                                                                                                                                                                                                            cost: new Decimal(1e21),
                                                                                                                                                                                                            unlocked() {
                                                                                                                                                                                                                return hasUpgrade("rp", 44)
                                                                                                                                                                                                            
                                                                                                                                                                                                            },
                                                                                                                                                                                                        },
    },
    milestones: {
        1: {
            requirementDescription: "[1] 100 Rebirth Power",
            effectDescription: "Unlock the first rebirth power buyable.",
            done() { return player.rp.power.gte("200") }
        },
        2: {
            requirementDescription: "[2] 5,000 Rebirth Power",
            effectDescription: "Unlock more rebirth point upgrades.",
            done() { return player.rp.power.gte("5e3") }
        },
        3: {
            requirementDescription: "[3] 5 Rebirth Points",
            effectDescription: "Unlocks the second rebirth power buyable.",
            done() { return player.rp.points.gte("5") }
        },
        4: {
            requirementDescription: "[4] 1e12 Rebirth Power",
            effectDescription: "Unlock more divine perk upgrades.",
            done() { return player.rp.power.gte("1e12") }
        },
        5: {
            requirementDescription: "[5] 5,000 Rebirth Points",
            effectDescription: "Unlocks the third rebirth power buyable.",
            done() { return player.rp.points.gte("5e3") }
        },
        6: {
            requirementDescription: "[6] 1,000,000 Rebirth Points",
            effectDescription: "Keep Divine Challenges & Milestones.",
            done() { return player.rp.points.gte("1e6") }
        },
        7: {
            requirementDescription: "[7] 1,000,000,000 Rebirth Points",
            effectDescription: "You can buy max Super Tier and ^1.3 Rebirth Points again",
            done() { return player.rp.points.gte("1e9") }
        },
    },
    buyables: {
        11: {
            title: "Point Buyable 15: Rebirth Grader",
            cost(x) { return new Decimal(2).pow(Decimal.times(x, 1.01).add(1)) },
            display() { if(player.rp.buyables[11].gte(1e30)) return`Strength Rebirth Power (Hardcaps at 1e30x)<br>
                Effect:x${format(this.effect())} (harcapped)<br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Rebirth Power`
                else return`Strength Rebirth Power (Hardcaps at 1e30x)<br>
                Effect: x${format(this.effect())} <br>
                Level: ${formatWhole(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Rebirth Power`}, 
            canAfford() { return player[this.layer].power.gte(this.cost()) },
            buy() {
                player[this.layer].power = player[this.layer].power.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {return new Decimal(1.5).pow(x).max(1).min("1e30")},
            
                unlocked() {return hasMilestone('rp', 1)},
            },
            12: {
                title: "Point Buyable 16: Rebirth Grader II",
                cost(x) { return new Decimal(10).pow(Decimal.pow(x, 1.05).add(1)) },
                display() { return` Strength Rebirth Power by more. <br>
                    Effect: x${format(this.effect())} <br>
                    Level: ${formatWhole(player[this.layer].buyables[this.id])}<br>
                    Cost: ${format(this.cost())} Rebirth Power`}, 
                canAfford() { return player[this.layer].power.gte(this.cost()) },
                buy() {
                    player[this.layer].power = player[this.layer].power.sub(this.cost())
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                },
                effect(x) {return new Decimal(2).pow(x).max(1)},
                unlocked() {return hasMilestone('rp', 3)},
            },
            13: {
                title: "Point Buyable 17: Rebirth Grader III",
                cost(x) { return new Decimal(2).pow(Decimal.pow(x, 2).add(1)) },
                display() { return` Strength Rebirth Power by even more. <br>
                    Effect: ^${format(this.effect())} <br>
                    Level: ${formatWhole(player[this.layer].buyables[this.id])}<br>
                    Cost: ${format(this.cost())} Rebirth Power`}, 
                canAfford() { return player[this.layer].power.gte(this.cost()) },
                buy() {
                    player[this.layer].power = player[this.layer].power.sub(this.cost())
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                },
                effect(x) {return new Decimal(1.01).pow(x).max(1)},
                unlocked() {return hasMilestone('rp', 5)},
            },
    },
    
            color: "#ADD8E6",
    requires: new Decimal(1e30), // Can be a function that takes requirement increases into account
    resource: "Rebirth Points", // Name of prestige currency
    baseResource: "Divine Points", // Name of resource prestige is based on
    baseAmount() {return player.dp.points}, // Get the current amount of baseResource
    branches: ["dp", "cp"],
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1e-10", // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('rp', 14)) mult = mult.times(1.5)
        if (hasUpgrade('rp', 15)) mult = mult.times(upgradeEffect('rp', 15))
            if (hasUpgrade('dp', 191)) mult = mult.times(upgradeEffect('dp',191))
                if (hasUpgrade('dp', 192)) mult = mult.times(2)
                    if (hasUpgrade('rp', 22)) mult = mult.times(10)
                        if (hasUpgrade('rp', 24)) mult = mult.pow(1.3)
                            if (hasUpgrade('rp', 31)) mult = mult.times(upgradeEffect('rp',31))
                                if (hasMilestone('rp', 7)) mult = mult.pow(1.3)
                                    if (hasUpgrade('rp', 33)) mult = mult.times(upgradeEffect('rp',33))
                                        if (hasUpgrade('rp', 34)) mult = mult.times(upgradeEffect('rp',34))
    return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 9, // Row the layer is in on the tree (0 is the first row)
    displayRow: 8, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "r", description: "R: Reset for Rebirth Points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("dp", 43) || player[this.layer].unlocked)},
})
