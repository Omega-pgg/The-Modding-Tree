addLayer("st", {
    name: "Super Tier", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "ST", // This appears on the layer's node. Default is the id with the first letter capitalized
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
        return "<h3>Super Tier</h3><br>" + "Super Tier " + format(player.st.points)
      },
      microtabs: {
        stuff: {
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
            milestones: {
            1: {
                requirementDescription: "Super Tier 1 (S.TierM1)",
                effectDescription: "10x Leaf Points and 250x everything else and always have the first leaf upgrade.",
                done() { return player.st.points.gte(1) }
        },
        2: {
            requirementDescription: "Super Tier 2 (S.TierM2)",
            effectDescription: "10x Leaf Points and 100,000,000,000x Time Power, Cells, Sacrifice Points, Energy, Light and Mega-Points.",
            done() { return player.st.points.gte(2) }
    },
    3: {
        requirementDescription: "Super Tier 3 (S.TierM3)",
        effectDescription: "5x Leaf Points and keep Sacrifice Milestones & Challenges.",
        done() { return player.st.points.gte(3) }
},
4: {
    requirementDescription: "Super Tier 4 (S.TierM4)",
    effectDescription: "100x Leaf Points, Time Power, Cells and Mega-Points.",
    done() { return player.st.points.gte(4) }
},
5: {
    requirementDescription: "Super Tier 5 (S.TierM5)",
    effectDescription: "5x Leaf Points.",
    done() { return player.st.points.gte(5) }
},
6: {
    requirementDescription: "Super Tier 6 (S.TierM6)",
    effectDescription: "3x Leaf Points and unlock a new layer. (Next Update)",
    done() { return player.st.points.gte(6) }
},
    },
    color: "#8b0000",
    requires: new Decimal("e13"), // Can be a function that takes requirement increases into account
    resource: "Super Tier", // Name of prestige currency
    baseResource: "Leaf Points", // Name of resource prestige is based on
    baseAmount() {return player.le.points}, // Get the current amount of baseResource
    branches: ["le"],
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent() {if (hasUpgrade("le", 55)) return new Decimal(2.85)
    else return new Decimal(3)},    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('le', 52)) mult = mult.div(upgradeEffect('le', 52))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 7, // Row the layer is in on the tree (0 is the first row)
    displayRow: 6, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return (hasMilestone("le", 8) || player[this.layer].unlocked)},
})
