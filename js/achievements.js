addLayer("a", {

    startData() {
        return {
            unlocked: true,
            points: new Decimal(0),
        }
    },
    color: "yellow",
    symbol: "A",
    row: "side",
    layerShown() {
        return true
    },
    tooltip() {
        return ("Achievements")
    },
    achievements: {
        11: {
            name: "A new beginning",
            done() {
                if (hasUpgrade("p", 11))
                return true
            },
            tooltip: "Buy the first upgrade. (PU11)",
            onComplete() {
            },
        },
        12: {
            name: "Your first thousand",
            done() {
                return player.points.gte(1e3)
            },
            tooltip: "Get 1,000 Points.",
            onComplete() {
            },
        },
        13: {
            name: "Your first million",
            done() {
                return player.points.gte(1e6)
            },
            tooltip: "Get 1,000,000 Points.",
            onComplete() {
            },
        },
        14: {
            name: "First Upgrade Effect",
            done() {
                if (hasUpgrade("p", 14))
                return true
            },
            tooltip: "Buy the fourth upgrade. (PU14)",
            onComplete() {
            },
        },
        15: {
            name: "10 Upgrades!",
            done() {
                if (hasUpgrade("p", 25))
                return true
            },
            tooltip: "Buy the tenth upgrade. (PU25)<br> Reward: 2x Points",
            onComplete() {
            },
        },
        21: {
            name: "Superior",
            done() {
                return player.sp.points.gte(1)
            },
            tooltip: "Perform a Super-Point reset.",
            onComplete() {
            },
        },
        22: {
            name: "Superiored",
            done() {
                return player.sp.points.gte(100)
            },
            tooltip: "Get 100 Super-Points.",
            onComplete() {
            },
        },
        23: {
            name: "Your first billion",
            done() {
                return player.points.gte(1e9)
            },
            tooltip: "Get 1e9 Points.",
            onComplete() {
            },
        },
        24: {
            name: "Extending Tree!",
            done() {
                if (hasUpgrade("sp", 13))
                return true
            },
            tooltip: "Buy the third sp upgrade. (SP13)<br>",
            onComplete() {
            },
        },
        25: {
            name: "Up",
            done() {
                if (hasUpgrade("sp", 25))
                return true
            },
            tooltip: "Buy the tenth sp upgrade. (SP25)<br>Reward: 2x Points",
            onComplete() {
            },
        },
        31: {
            name: "Ultralize",
            done() {
                return player.up.points.gte(1)
            },
            tooltip: "Perform a Ultra-Point reset.",
            onComplete() {
            },
        },
        32: {
            name: "Sub-Points",
            done() {
                return player.pb.points.gte(1)
            },
            tooltip: "Get 1 Points-1.",
            onComplete() {
            },
        },
        33: {
            name: "Super-Ultralize",
            done() {
                return player.up.points.gte(5e4)
            },
            tooltip: "Get 50,000 Ultra-Points.",
            onComplete() {
            },
        },
        34: {
            name: "Big Points",
            done() {
                return player.points.gte(1e30)
            },
            tooltip: "Get 1e30 Points.",
            onComplete() {
            },
        },
        35: {
            name: "Last Sub-Point",
            done() {
                return player.pb3.points.gte(1)
            },
            tooltip: "Get 1 Points-3.<br> Reward: 2x Points",
            onComplete() {
            },
        },
        41: {
            name: "Your first Decillion",
            done() {
                return player.points.gte(1e33)
            },
            tooltip: "Get 1e33 Points.",
            onComplete() {
            },
        },
        42: {
            name: "Superioreds",
            done() {
                return player.sp.points.gte(1e15)
            },
            tooltip: "Get 1e15 Super-Points.",
            onComplete() {
            },
        },
        43: {
            name: "Superiorends",
            done() {
                return player.sp.points.gte(1e20)
            },
            tooltip: "Get 1e20 Super-Points.",
            onComplete() {
            },
        },
        44: {
            name: "Upgrader",
            done() {
                if (hasUpgrade("up", 25))
                return true
            },
            tooltip: "Buy the tenth up upgrade. (UP25)",
            onComplete() {
            },
        },
        45: {
            name: "Ultra-Points are finally worth it.",
            done() {
                if (hasUpgrade("up", 34))
                return true            },
            tooltip: "Get the 14th ultra-point upgrade.<br> Reward: 2x Points",
            onComplete() {
            },
        },
        51: {
            name: "Hyperlize",
            done() {
                return player.hp.points.gte(1)
            },
            tooltip: "Perform a Hyper-Point reset.",
            onComplete() {
            },
        },
        52: {
            name: "Super-Hyperlize",
            done() {
                return player.hp.points.gte(20)
            },
            tooltip: "Get 20 Hyper-Points.",
            onComplete() {
            },
        },
        53: {
            name: "Ultralization",
            done() {
                return player.up.points.gte(1e18)
            },
            tooltip: "Get 1e18 Ultra-Points.",
            onComplete() {
            },
        },
        54: {
            name: "Points-verse",
            done() {
                return player.points.gte(1e80)
            },
            tooltip: "Get 1e80 Points.",
            onComplete() {
            },
        },
        55: {
            name: "Ultra-Hyperlize",
            done() {
                return player.hp.points.gte(100)
            },
            tooltip: "Get 100 Hyper-Points.<br> Reward: 2x Points and Super-Points",
            onComplete() {
            },
        },
        61: {
            name: "Googol",
            done() {
                return player.points.gte(1e100)
            },
            tooltip: "Get 1e100 Points.",
            onComplete() {
            },
        },
        62: {
            name: "Hyperlization",
            done() {
                return player.hp.points.gte(400)
            },
            tooltip: "Get 400 Hyper-Points.",
            onComplete() {
            },
        },
        63: {
            name: "Nice",
            done() {
                return player.sp.points.gte(1e69)
            },
            tooltip: "Get 1e69 Super-Points.",
            onComplete() {
            },
        },
        64: {
            name: "Ultralizated",
            done() {
                return player.up.points.gte(1e33)
            },
            tooltip: "Get 1e33 Ultra-Points.",
            onComplete() {
            },
        },
        65: {
            name: "Overpowered",
            done() {
                return player.hp.points.gte(25000)
            },
            tooltip: "Get 25,000 Hyper-Points.<br> Reward: 2x Points and Super-Points.",
            onComplete() {
            },
        },
        71: {
            name: "Worker",
            done() {
                if (hasMilestone("hp", 1))
                return true            },
            tooltip: "Get the 1st milestone on Hyper-Points.",
            onComplete() {
            },
        },
        72: {
            name: "Lazy",
            done() {
                if (hasMilestone("hp", 2))
                return true            },
            tooltip: "Get the 2nd milestone on Hyper-Points.",
            onComplete() {
            },
        },
        73: {
            name: "Grinder",
            done() {
                return player.hp.points.gte(1e6)
            },
            tooltip: "Get 1,000,000 Hyper-Points.",
            onComplete() {
            },
        },
        74: {
            name: "Infinity",
            done() {
                return player.points.gte("1.80e308")
            },
            tooltip: "Get 1.80e308 Points!",
            onComplete() {
            },
        },
        75: {
            name: "Too many sub-points",
            done() {
                return player.pb3.points.gte(250)
            },
            tooltip: "Get 250 Points-3.<br> Reward: 2x Points and Super-Points",
            onComplete() {
            },
        },
        81: {
            name: "Boring Part",
            done() {
                if (hasUpgrade("hp", 53))
                return true            },
            tooltip: "Get the 23rd hyper-point upgrade. (HP53)",
            onComplete() {
            },
        },
        82: {
            name: "First Challenge",
            done() {
                if (hasChallenge("hp", 11))
                return true            },
            tooltip: "Complete the 1st hyper-point challenge.",
            onComplete() {
            },
        },
        83: {
            name: "Buyables?",
            done() {
                if (hasUpgrade("p", 112))
                return true
            },
            tooltip: "Get the 57th prestige point upgrade. (PU112)",
            onComplete() {
            },
        },
        84: {
            name: "Super Scaled",
            done() {
                if (hasChallenge("hp", 12))
                return true            },
            tooltip: "Complete the 2nd hyper-point challenge.",
            onComplete() {
            },
        },
        85: {
            name: "Too many points",
            done() {
                return player.sp.points.gte("1.80e308")
            },
            tooltip: "Get 1.80e308 Super-Points!<br> Reward: 2x Points and Super-Points",
            onComplete() {
            },
        },
        91: {
            name: "Googolizer",
            done() {
                return player.up.points.gte(1e100)
            },
            tooltip: "Get 1e100 Ultra-Points.",
            onComplete() {
            },
        },
        92: {
            name: "Faster!",
            done() {
                return player.hp.points.gte(1e33)
            },
            tooltip: "Get 1e33 Hyper-Points.",
            onComplete() {
            },
        },
        93: {
            name: "Softcap",
            done() {
                if (hasChallenge("hp", 21))
                return true            },
            tooltip: "Complete the 3rd hyper-point challenge.",
            onComplete() {
            },
        },
        94: {
            name: "So many upgrades",
            done() {
                if (hasUpgrade("up", 65))
                return true            },
            tooltip: "Get the 30th ultra-point upgrade. (UP65)",
            onComplete() {
            },
        },
        95: {
            name: "You already know what this is.",
            done() {
                return player.p.points.gte("1.80e308")
            },
            tooltip: "Get 1.80e308 Prestige Points!<br> Reward: 2x Points and Super-Points",
            onComplete() {
            },
        },
        101: {
            name: "Dark",
            done() {
                return player.up.points.gte("1e250")
            },
            tooltip: "Get 1e250 Ultra-Points.",
            onComplete() {
            },
        },
        102: {
            name: "Point-disturb",
            done() {
                if (hasChallenge("hp", 22))
                return true            },
            tooltip: "Complete the 4th hyper-point challenge.",
            onComplete() {
            },
        },
        103: {
            name: "Too super",
            done() {
                return player.sp.points.gte("1e600")
            },
            tooltip: "Get 1e600 Super-Points.",
            onComplete() {
            },
        },
        104: {
            name: "This achievement doesn't exist",
            done() {
                return player.points.gte("1e1000")
            },
            tooltip: "Get 1e1,000 Points!!",
            onComplete() {
            },
        },
        105: {
            name: "Too super+",
            done() {
                return player.sp.points.gte("1e900")
            },
            tooltip: "Get 1e900 Super-Points.<br> Reward: 2x Points and Super-Points",
            onComplete() {
            },
        },
    },
    tabFormat: ["blank", ["display-text", function() {
        return "<h3 style='color: yellow;'>Achievements: " + player.a.achievements.length + "/" + (Object.keys(tmp.a.achievements).length - 2) + "</h4>"
    }
    ], "blank", "blank", "achievements", ],
}, )
