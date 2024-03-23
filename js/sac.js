addLayer("sa", {
    name: "sa", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Sac", // This appears on the layer's node. Default is the id with the first letter capitalized
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
        return "<h3>Sacrifice</h3><br>" + "ST " + format(player.sa.points)
      },
      microtabs: {
        stuff: {
                "Milestones": {
                    content: [
                        ["blank", "15px"],
                        ["raw-html", () => `<h4 style="opacity:.5">You reached Sacrifice! There is no upgrades in this layer. It will reset EVERYTHING except Achievements.</h4>`],
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
milestones: {
      1: {
        requirementDescription: "Sacrifice Tier 1 (STM1)",
        effectDescription: "5x Everything (Except PP) and 50x Points.",
        done() { return player.sa.points.gte(1) }
},
2: {
    requirementDescription: "Sacrifice Tier 2 (STM2)",
    effectDescription: "3x Energy & Light Gain and 5x everything else (Except PP and MP) + automate Points-4, Points-5 and Points-6",
    done() { return player.sa.points.gte(2) }
},
3: {
    requirementDescription: "Sacrifice Tier 3 (STM3)",
    effectDescription: "2x Energy & Light Gain and 3x everything else (Except PP and MP)",
    done() { return player.sa.points.gte(3) }
},
4: {
    requirementDescription: "Sacrifice Tier 4 (STM4)",
    effectDescription: "5x Energy & Light Gain, 50x Hyper-Points and 2x Mega-Points + Keep Hyper-Point Challenges",
    done() { return player.sa.points.gte(4) }
},
5: {
    requirementDescription: "Sacrifice Tier 5 (STM5)",
    effectDescription: "4x Energy & Light Gain and gain 100% of Hyper-Points gain per second.",
    done() { return player.sa.points.gte(5) }
},
6: {
    requirementDescription: "Sacrifice Tier 6 (STM6)",
    effectDescription: "25x Energy & Light Gain and 4x Mega-Points",
    done() { return player.sa.points.gte(6) }
},
7: {
    requirementDescription: "Sacrifice Tier 7 (STM7)",
    effectDescription: "1.5x Energy & Light Gain and 1,000,000,000x Points + Keep Mega-Point challenges.",
    done() { return player.sa.points.gte(7) }
},
8: {
    requirementDescription: "Sacrifice Tier 8 (STM8)",
    effectDescription: "1,000,000,000x Points again, Super-Points, Ultra-Points and Hyper-Points.",
    done() { return player.sa.points.gte(8) }
},
9: {
    requirementDescription: "Sacrifice Tier 9 (STM9)",
    effectDescription: "20x Everything below Sac (Except PP)",
    done() { return player.sa.points.gte(9) }
},
10: {
    requirementDescription: "Sacrifice Tier 10 (STM10)",
    effectDescription: "Unlock a new sub-layer. (Next Update) + 7.5x Everything below Sac (Except PP) and keep Hyper-Point milestones on reset",
    done() { return player.sa.points.gte(10) }
},
},
    color: "purple",
    requires: new Decimal(1e10), // Can be a function that takes requirement increases into account
    resource: "Sacrifice Tier", // Name of prestige currency
    baseResource: "Mega-Points", // Name of resource prestige is based on
    baseAmount() {return player.mp.points}, // Get the current amount of baseResource
    branches: ["mp", "l", "e", "ai"],
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2,    
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "C", description: "C: Reset for Sac", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasChallenge("mp", 12) || player[this.layer].unlocked)},
})
