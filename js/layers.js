function makeRed(c){
    return "<span style='color:#FF0000'>" + c + "</span>"
}
addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        auto: false,
    }},
    passiveGeneration() {
        if (hasMilestone("hp", 6)) return (hasMilestone("hp", 6)?1:0)
        },
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
                        ["raw-html", () => `<h4 style="opacity:.5">Welcome to the Omega Tree!<br> Your goal is to reach the endgame. You can press P to gain Prestige Points.<br> Which is used to buy upgrades.</h4>`],
                        ["upgrades", [1,2,3,4,5,6,7,8,9,10]]
                    ],
                },
            },
        },
        
    upgrades: {
        11: {
            title: "Start (PU11)",
            description: "Begin your journey!",
            cost: new Decimal(1),
                },
                12: { title: "Point I (PU12)",
                description: "2x Points",
                cost: new Decimal(2),
                unlocked() {
                    return hasUpgrade("p", 11)
                
                }
                },
                13: { title: "Point II (PU13)",
                description: "3x Points",
                cost: new Decimal(5),
                unlocked() {
                    return hasUpgrade("p", 12)
                
                }
                },
                14: { title: "Boost Point I (PU14)",
        description: "Prestige Points boosts Points",
        cost: new Decimal(20),
        effect() {
            return player[this.layer].points.add(1).pow("0.5")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("p", 13)
        }
        },
        15: { title: "Point III (PU15)",
                description: "2.2x Points",
                cost: new Decimal(50),
                unlocked() {
                    return hasUpgrade("p", 14)
                
                }
                },
                21: { title: "Point IV (PU21)",
                description: "3x Points",
                cost: new Decimal(100),
                unlocked() {
                    return hasUpgrade("p", 15)
                
                }
                },
                22: { title: "Point V (PU22)",
                description: "3.14x Points",
                cost: new Decimal(250),
                unlocked() {
                    return hasUpgrade("p", 21)
                
                }
                },
                23: { title: "Point VI (PU23)",
                description: "+50% Points",
                cost: new Decimal(500),
                unlocked() {
                    return hasUpgrade("p", 22)
                
                }
                },
                24: { title: "Point VII (PU24)",
        description: "+1% Points",
        cost: new Decimal(500),
        unlocked() {
            return hasUpgrade("p", 23)
        }
        },
        25: { title: "Point Upgrader I (PU25)",
        description: "Every Prestige Point Upgrade boosts point gain by 1.1x",
        cost: new Decimal("1000"),
        effect() {
            let effect = Decimal.pow(1.1, player[this.layer].upgrades.length).min("1e36")
            if (hasUpgrade("hp", 21)) effect = effect.pow(upgradeEffect('hp', 21))
            if (hasUpgrade("sp", 53)) effect = effect.pow(upgradeEffect('sp', 53))
            if (hasUpgrade('p', 35)) effect = effect.pow(2)
            if (hasUpgrade('hp', 25)) effect = effect.pow(1.2)
            if (hasUpgrade('hp', 44)) effect = effect.pow(1.333333333333333333333333)
            if (hasUpgrade('p', 74)) effect = effect.pow(1.25)
            if (hasUpgrade('sp', 65)) effect = effect.pow(1.3)
            if (hasUpgrade('hp', 53)) effect = effect.pow(1.1)
            if (hasMilestone('hp', 7)) effect = effect.pow(1.05)
            return effect
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("p", 24)
        }
        },
    31: { title: "Self-Point (PU31)",
    description: "Points boosts itself at a very reduced rate and unlock a new layer.",
    cost: new Decimal(2500),
    effect() {
        return player.points.add(1).pow("0.0333333333333333333333").min("1e3")
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
    unlocked() {
        return hasUpgrade("p", 25)
    }
    },
    32: { title: "Point VIII (PU32)",
        description: "5x Points",
        cost: new Decimal(10000),
        unlocked() {
            return hasUpgrade("sp", 13)
        }
        },
        33: { title: "Point IX (PU33)",
        description: "4x Points",
        cost: new Decimal(50000),
        unlocked() {
            return hasUpgrade("p", 32)
        }
        },
        34: { title: "Point X (PU34)",
        description: "5x Points",
        cost: new Decimal(200000),
        unlocked() {
            return hasUpgrade("p", 33)
        }
        },
        35: { title: "Point Upgrader II (PU35)",
        description: "Prestige Upgrade 25 effect is increased by +0.11.",
        cost: new Decimal(1e6),
        unlocked() {
            return hasUpgrade("p", 34)
        }
        },
        41: { title: "Point XI (PU41)",
        description: "+1% Points",
        cost: new Decimal(1e6),
        unlocked() {
            return hasUpgrade("p", 35)
        }
        },
        42: { title: "Big Point (PU42)",
        description: "Points boost Super-Points at a very reduced rate.",
        cost: new Decimal(5e6),
        effect() {
            return player.points.add(1).pow("0.05")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("p", 41)
        }
        },
        43: { title: "Super-Point I (PU43)",
        description: "3x Super-Points",
        cost: new Decimal(5e7),
        unlocked() {
            return hasUpgrade("p", 42)
        }
        },
        44: { title: "Super-Point II (PU44)",
        description: "3x Super-Points",
        cost: new Decimal(1e9),
        unlocked() {
            return hasUpgrade("p", 43)
        }
        },
        45: { title: "Self-Point III (PU45)",
        description: "Points boosts itself at reduced rate (Stronger)",
        cost: new Decimal(2.5e9),
        effect() {
            return player.points.add(1).pow("0.08").min("1e24")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("p", 44)
        }
        },
        51: { title: "Point XII (PU51)",
        description: "4x Points and Super-Points",
        cost: new Decimal(1e15),
        unlocked() {
            return hasUpgrade("p", 45)
        }
        },
        52: { title: "Super Points I (PU52)",
        description: "7x Points, 2x Super-Points, 1.5x Ultra-Points",
        cost: new Decimal(5e16),
        unlocked() {
            return hasUpgrade("p", 51)
        }
        },
        53: { title: "Point XIII (PU53)",
        description: "2x Points.",
        cost: new Decimal(1e19),
        unlocked() {
            return hasUpgrade("p", 52)
        }
        },
        54: { title: "Point XIV (PU54)",
        description: "10x Points.",
        cost: new Decimal(1e20),
        unlocked() {
            return hasUpgrade("p", 53)
        }
        },
        55: { title: "Super-Point III (PU55)",
        description: "3x Super-Points",
        cost: new Decimal(1e21),
        unlocked() {
            return hasUpgrade("p", 54)
        }
        },
        61: { title: "Super Points II (PU61)",
        description: "Gain a 5x Ultra-Points, 15x Super-Points and over a 50x Points + unlock a new layer.",
        cost: new Decimal(1e23),
        unlocked() {
            return hasUpgrade("up", 34)
        }
        },
        62: { title: "Super Points III (Googol) (PU62)",
        description: "15x Points, 9x Super-Points and 6x Ultra-Points!",
        cost: new Decimal(1e50),
        unlocked() {
            return hasUpgrade("p", 61)
        }
        },
        63: { title: "Point XV (PU63)",
        description: "10x Points.",
        cost: new Decimal(1e51),
        unlocked() {
            return hasUpgrade("p", 62)
        }
        },
        64: { title: "Super-Point IV (PU64)",
        description: "2.5x Super-Points",
        cost: new Decimal(5.555e55),
        unlocked() {
            return hasUpgrade("p", 63)
        }
        },
        65: { title: "Point XVI (PU65)",
        description: "2x Points and Super-Points",
        cost: new Decimal(1e61),
        unlocked() {
            return hasUpgrade("p", 64)
        }
        },
        71: { title: "Super Points IV (PU71)",
        description: "25x Points, 3x Super-Points and 2x Ultra-Points",
        cost: new Decimal(5e70),
        unlocked() {
            return hasUpgrade("p", 65)
        }
        },
        72: { title: "Discount I (PU72)",
        description: "Points-1 is cheaper based on points.",
        cost: new Decimal(1e72),
        effect() {
            return player.points.add(1).pow("0.1")
        },
        effectDisplay() { return  "/" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("p", 71)
        }
        },
        73: { title: "Super Points V (PU73)",
        description: "3x Points, Super-Points and Ultra-Points",
        cost: new Decimal(1e73),
        unlocked() {
            return hasUpgrade("p", 72)
        }
        },
        74: { title: "Point XVII (PU74)",
        description: "10x Points and increase effect of PU25",
        cost: new Decimal(1e75),
        unlocked() {
            return hasUpgrade("p", 73)
        }
        },
        75: { title: "Super Points VI (PU75)",
        description: "100x Points and +20% Hyper-Points",
        cost: new Decimal(2e92),
        unlocked() {
            return hasUpgrade("p", 74)
        }
        },
        81: { title: "Discount III (PU81)",
        description: "Points-1 is even cheaper based on points. (Stronger)",
        cost: new Decimal(1e114),
        effect() {
            return player.points.add(1).pow("0.3333333333")
        },
        effectDisplay() { return  "/" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("p", 75)
        }
        },
        82: { title: "Accelerate (PU82)",
        description: "Points boosts itself yet again",
        cost: new Decimal(1e121),
        effect() {
            return player.points.add(1).pow("0.00986").min("1e3")
        },
        effectDisplay() { return + format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("p", 81)
        }
        },
        83: { title: "Powered Sub-Points (PU83)",
        description: "Every Points-3 you have boosts point gain by +5% compounding (Stronger)",
        cost: new Decimal(1e129),
        effect() {
            let effect = Decimal.pow(1.05, player.pb3.points)
            return effect
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("p", 82)
        }
        },
        84: { title: "Super Points VII (PU84)",
        description: "450x Points, 20x Super-Points and 2x Ultra-Points",
        cost: new Decimal(5e137),
        unlocked() {
            return hasUpgrade("p", 83)
        }
        },
        85: { title: "Point XVIII (PU85)",
        description: "20x Points again",
        cost: new Decimal(1e145),
        unlocked() {
            return hasUpgrade("p", 84)
        }
        },
        91: { title: "Point XVIII (PU91)",
        description: "9x Points",
        cost: new Decimal(1e147),
        unlocked() {
            return hasUpgrade("p", 85)
        }
        },
        92: { title: "Point XIX (PU92)",
        description: "4x Super-Points",
        cost: new Decimal(1e148),
        unlocked() {
            return hasUpgrade("p", 91)
        }
        },
        93: { title: "Point XX (PU93)",
        description: "5x Ultra-Points",
        cost: new Decimal(1e149),
        unlocked() {
            return hasUpgrade("p", 92)
        }
        },
        94: { title: "Point XXI (PU94)",
        description: "2x Points",
        cost: new Decimal(1e150),
        unlocked() {
            return hasUpgrade("p", 93)
        }
        },
        95: { title: "Point XXII (PU95)",
        description: "3x Points",
        cost: new Decimal(1e151),
        unlocked() {
            return hasUpgrade("p", 94)
        }
        },
        101: { title: "Point XXIII (PU101)",
        description: "2x Points",
        cost: new Decimal(1e152),
        unlocked() {
            return hasUpgrade("p", 95)
        }
        },
        102: { title: "Point XXIV (PU102)",
        description: "3.5x Points",
        cost: new Decimal(5e152),
        unlocked() {
            return hasUpgrade("p", 101)
        }
        },
        103: { title: "Point XXV (PU103)",
        description: "2x Points",
        cost: new Decimal(1e154),
        unlocked() {
            return hasUpgrade("p", 102)
        }
        },
        104: { title: "Point XXVI (PU104)",
        description: "1.1x Points",
        cost: new Decimal(1e155),
        unlocked() {
            return hasUpgrade("p", 103)
        }
        },
        105: { title: "Advanced Upgrades (PU105)",
        description: "4.2x Hyper-Points (50th Prestige Upgrade)",
        cost: new Decimal(1e156),
        unlocked() {
            return hasUpgrade("p", 104)
        }
        },
    },
    color: "blue",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Prestige Points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for Prestige Points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})
