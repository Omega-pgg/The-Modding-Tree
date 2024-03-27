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
                    unlocked() {return (hasMilestone("sa", 20))},
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
    effectDescription: "Unlock a new sub-layer + 7.5x Everything below Sac (Except PP) and keep Hyper-Point milestones on reset",
    done() { return player.sa.points.gte(10) }
},
11: {
    requirementDescription: "Sacrifice Tier 11 (STM11)",
    effect() {
        let eff = player.sa.points.add(1).pow(0.5)
        return eff
    },
    effectDescription() {
        return "Sacrifice Tier boosts Sacrifice Points and keep mega-point milestones on reset.<br>Currently: " + format(milestoneEffect("sa",11))+"x"}
        ,    done() { return player.sa.points.gte("11")}
        
    },
    12: {
        requirementDescription: "Sacrifice Tier 12 (STM12)",
        effectDescription: "Unlock more energy upgrades.",
        done() { return player.sa.points.gte(12) }
    },
    13: {
        requirementDescription: "Sacrifice Tier 13 (STM13)",
        effectDescription: "30x Energy, Light and Mega-Points.",
        done() { return player.sa.points.gte(13) }
    },
    14: {
        requirementDescription: "Sacrifice Tier 14 (STM14)",
        effectDescription: "^1.02 Mega-Points.",
        done() { return player.sa.points.gte(14) }
    },
    15: {
        requirementDescription: "Sacrifice Tier 15 (STM15)",
        effectDescription: "Autobuy Mega-Point Upgrades and 5x MP.",
        done() { return player.sa.points.gte(15) }
    },
    16: {
        requirementDescription: "Sacrifice Tier 16 (STM16)",
        effectDescription: "1,000,000,000x Energy & Light.",
        done() { return player.sa.points.gte(16) }
    },
    17: {
        requirementDescription: "Sacrifice Tier 17 (STM17)",
        effectDescription: "5x SP and MP.",
        done() { return player.sa.points.gte(17) }
    },
    18: {
        requirementDescription: "Sacrifice Tier 18 (STM18)",
        effectDescription: "10x Energy, Light and Mega-Points.",
        done() { return player.sa.points.gte(18) }
    },
    19: {
        requirementDescription: "Sacrifice Tier 19 (STM19)",
        effectDescription: "1e55x Sacrifice Points. (Overpowered)",
        done() { return player.sa.points.gte(19) }
    },
    20: {
        requirementDescription: "Sacrifice Tier 23 (STM20)",
        effectDescription: "Unlock a sacrifice challenge.",
        done() { return player.sa.points.gte(23) }
    },
},
challenges: {
    11: {
            name: "Broken Idea",
            challengeDescription: "You can not gain any Lights, Prestige Points, Super-Points, Ultra-Points and Hyper-Points but Energy's Cost is much cheaper.",
            goalDescription: "1e300 Points",
            rewardDescription: "Unlock a new sub-layer. (Next Update)",
            canComplete: function() {return player.points.gte("1e300")},
            unlocked() { return (hasMilestone('sa', 20)) },
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
        if (hasUpgrade('e', 45)) mult = mult.div(upgradeEffect('e',45))
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
