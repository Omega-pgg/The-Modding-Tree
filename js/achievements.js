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
    tooltip(){
        return "<h3>Achievements</h3><br>"  + player.a.achievements.length + "/" + (Object.keys(tmp.a.achievements).length - 2) + "</h4>"
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
            tooltip: "Unlock the first hyper-point buyable. (PU112)",
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
            name: "Buyable Power!",
            done() {
                if (hasUpgrade("p", 115))
                return true                },
            tooltip: "Unlock the 2nd hyper-point buyable. (PU115)<br> Reward: 2x Points and Super-Points",
            onComplete() {
            },
        },
        111: {
            name: "Too many Infinites",
            done() {
                return player.up.points.gte("1.80e308")
            },
            tooltip: "Get 1.80e308 Ultra-Points!",
            onComplete() {
            },
        },
        112: {
            name: "Overflate",
            done() {
                return player.hp.points.gte("1e50")
            },
            tooltip: "Get 1e50 Hyper-Points.",
            onComplete() {
            },
        },
        113: {
            name: "The scaling is too big",
            done() {
                return player.pb.points.gte("20")
            },
            tooltip: "Get 20 Points-1.",
            onComplete() {
            },
        },
        114: {
            name: "Points takeover",
            done() {
                return player.points.gte("1e1600")
            },
            tooltip: "Get 1e1,600 Points.",
            onComplete() {
            },
        },
        115: {
            name: "Points Overload",
            done() {
                return player.sp.points.gte("1e1000")
            },
            tooltip: "Get 1e1,000 Super-Points!<br> Reward: 2x Points and Super-Points",
            onComplete() {
            },
        },
        121: {
            name: "A new reset!",
            done() {
                return player.mp.points.gte("1")
            },
            tooltip: "Get 1 Mega-Point.",
            onComplete() {
            },
        },
        122: {
            name: "A new reset... Again!",
            done() {
                return player.mp.total.gte("2")
            },
            tooltip: "Get 2 Mega-Points in total.",
            onComplete() {
            },
        },
        123: {
            name: "The scaling is okay",
            done() {
                return player.pb2.points.gte("40")
            },
            tooltip: "Get 40 Points-2.",
            onComplete() {
            },
        },
        124: {
            name: "Googolize",
            done() {
                return player.hp.points.gte("1e100")
            },
            tooltip: "Get 1e100 Hyper-Points.",
            onComplete() {
            },
        },
        125: {
            name: "Buyable Repeat Power!",
            done() {
                if (hasUpgrade("up", 75))
                return true                },
            tooltip: "Unlock the 3rd hyper-point buyable. (UP75)<br> Reward: 2x Points and Super-Points",
            onComplete() {
            },
        },
        131: {
            name: "Op Upgrade",
            done() {
                if (hasUpgrade("mp", 15))
                return true                },
            tooltip: "Get the 5th mega-point upgrade.",
            onComplete() {
            },
        },
        132: {
            name: "This is too many...",
            done() {
                return player.up.points.gte("1e800")
                       },
            tooltip: "Get 1e800 Ultra-Points",
            onComplete() {
            },
        },
        133: {
            name: "Universal Points",
            done() {
                return player.points.gte("1e2500")
            },
            tooltip: "Get 1e2,500 Points.",
            onComplete() {
            },
        },
        134: {
            name: "Breaking Point",
            done() {
                return player.pb3.points.gte("3000")
            },
            tooltip: "Get 3,000 Points-3.",
            onComplete() {
            },
        },
        135: {
            name: "Finally no more challenging.",
            done() {
                if (hasMilestone("mp", 3))
                return true                },
            tooltip: "Get the 3rd mega-point milestone.<br> Reward: 2x Points and Super-Points",
            onComplete() {
            },
        },
        141: {
            name: "Megalize",
            done() {
                return player.mp.total.gte("100")
            },
            tooltip: "Get 100 Mega-Points in total.",
            onComplete() {
            },
        },
        142: {
            name: "Super-lize?",
            done() {
                return player.sp.total.gte("1e2000")
            },
            tooltip: "Get 1e2,000 Super-Points.",
            onComplete() {
            },
        },
        143: {
            name: "More Sub-Points?",
            done() {
                if (hasUpgrade("mp", 24))
                return true                },
            tooltip: "Unlock Points-4.",
            onComplete() {
            },
        },
        144: {
            name: "Millinillion",
            done() {
                return player.points.gte("1e3003")
            },
            tooltip: "Get 1e3,003 Points!",
            onComplete() {
            },
        },
        145: {
            name: "This achievement doesn't exist II",
            done() {
                return player.up.points.gte("1e1000")
            },
            tooltip: "Get 1e1,000 Ultra-Points!!<br> Reward: 2x Points and Super-Points",
            onComplete() {
            },
        },
        151: {
            name: "More Mega",
            done() {
                if (hasUpgrade("mp", 25))
                return true                },
            tooltip: "Get the 10th mega-point upgrade. (MP25)",
            onComplete() {
            },
        },
        152: {
            name: "Again? More challenging!!!!",
            done() {
                if (hasUpgrade("mp", 31))
                return true                },
            tooltip: "Get the 11th mega-point upgrade. (MP31)",
            onComplete() {
            },
        },
        153: {
            name: "Ultra-Points and Points-3 was useless!",
            done() {
                if (hasChallenge("mp", 11))
                return true            },
            tooltip: "Complete the 1st mega-point challenge. (Wait why did the numbers went down a lot)",
            onComplete() {
            },
        },
        154: {
            name: "Such a useless upgrade",
            done() {
                if (hasUpgrade("mp", 41))
                return true                },
            tooltip: "Get the 16th mega-point upgrade. (MP41)",
            onComplete() {
            },
        },
        155: {
            name: "Stable Hyper",
            done() {
                return player.hp.points.gte("1e200")
            },
            tooltip: "Get 1e200 Hyper-Points<br> Reward: 2x Points and Super-Points",
            onComplete() {
            },
        },
        161: {
            name: "Even more Sub-Points!?!?",
            done() {
                if (hasUpgrade("mp", 51))
                return true                },
            tooltip: "Unlock Points-5.",
            onComplete() {
            },
        },
        162: {
            name: "Hyper God",
            done() {
                return player.hp.points.gte("1e303")
            },
            tooltip: "Get 1e303 Hyper-Points.",
            onComplete() {
            },
        },
        163: {
            name: "Mechanic",
            done() {
                if (hasUpgrade("mp", 61))
                return true                },
            tooltip: "Unlock Air & Energy and Light",
            onComplete() {
            },
        },
        164: {
            name: "Mega Smith",
            done() {
                return player.mp.points.gte("1e7")
            },
            tooltip: "Get 10,000,000 Mega-Points.",
            onComplete() {
            },
        },
        165: {
            name: "Point Wesson",
            done() {
                return player.points.gte("1e6003")
            },
            tooltip: "Get 1e6,003 Points.<br> Reward: 2x Points and Super-Points",
            onComplete() {
            },
        },
        171: {
            name: "Energlizer",
            done() {
                return player.e.points.gte("50000")
            },
            tooltip: "Get 50,000 Energy.",
            onComplete() {
            },
        },
        172: {
            name: "Point Burner",
            done() {
                if (hasUpgrade("mp", 81))
                return true    },
            tooltip: "Unlock Points-6.",
            onComplete() {
            },
        },
        173: {
            name: "Super Form",
            done() {
                return player.sp.points.gte("1e5000")
            },
            tooltip: "Get 1e5,000 Super-Points.",
            onComplete() {
            },
        },
        174: {
            name: "Breath",
            done() {
                return player.ai.points.gte("5")
            },
            tooltip: "Get 5 Air.",
            onComplete() {
            },
        },
        175: {
            name: "Point Pusher",
            done() {
                return player.points.gte("1e10000")
            },
            tooltip: "Get 1e10,000 Points!<br> Reward: 2x Points and Super-Points",
            onComplete() {
            },
        },
        181: {
            name: "A new reset journey!",
            done() {
                return player.sa.points.gte("1")
            },
            tooltip: "Reach Sacrifice Tier 1.",
            onComplete() {
            },
        },
        182: {
            name: "When will the scaling begin?",
            done() {
                return player.pb3.points.gte("15000")
            },
            tooltip: "Get 15,000 Points-3.",
            onComplete() {
            },
        },
        183: {
            name: "Mega Last",
            done() {
                return player.mp.points.gte("1e15")
            },
            tooltip: "Get 1e15 Mega-Points.",
            onComplete() {
            },
        },
        184: {
            name: "Googolize Energy Power",
            done() {
                return player.e.points.gte("1e100")
            },
            tooltip: "Get 1e100 Energy.",
            onComplete() {
            },
        },
        185: {
            name: "Super Googol",
            done() {
                return player.sp.points.gte("1e10000")
            },
            tooltip: "Get 1e10,000 Super-Points. Reward: 100,000x Ultra-Points and Hyper-Points",
            onComplete() {
            },
        },
        191: {
            name: "A new reset journey... yet again but way easier!",
            done() {
                return player.sa.points.gte("5")
            },
            tooltip: "Reach Sacrifice Tier 5.",
            onComplete() {
            },
        },
        192: {
            name: "Can't hold all of these e1,000!",
            done() {
                return player.hp.points.gte("1e1000")
            },
            tooltip: "Get 1e1,000 Hyper-Points",
            onComplete() {
            },
        },
        193: {
            name: "Mega Broken",
            done() {
                return player.mp.points.gte("1e33")
            },
            tooltip: "Get 1e33 Mega-Points.",
            onComplete() {
            },
        },
        194: {
            name: "Point Territory",
            done() {
                return player.points.gte("1e25000")
            },
            tooltip: "Get 1e25,000 Points.",
            onComplete() {
            },
        },
        195: {
            name: "This is getting repetive",
            done() {
                return player.sa.points.gte("10")
            },
            tooltip: "Reach Sacrifice Tier 10.",
            onComplete() {
            },
        },
        201: {
            name: "Not anymore.",
            done() {
                return player.scp.points.gte("1")
            },
            tooltip: "Get 1 Sacrifice Point.",
            onComplete() {
            },
        },
        202: {
            name: "Ultra-Sublizer",
            done() {
                return player.up.points.gte("1e10000")
            },
            tooltip: "Get 1e10,000 Ultra-Points",
            onComplete() {
            },
        },
        203: {
            name: "Infinity Energy",
            done() {
                return player.e.points.gte("1.80e308")
            },
            tooltip: "Get 1.80e308 Energy",
            onComplete() {
            },
        },
        204: {
            name: "Point AFK",
            done() {
                return player.points.gte("1e50000")
            },
            tooltip: "Get 1e50,000 Points.",
            onComplete() {
            },
        },
        205: {
            name: "Quite challenging the layers!",
            done() {
                if (hasChallenge("sa", 11))
                return true            },
            tooltip: "Complete the 1st sacrifice challenge. Reward: 10x Points, SP, UP and HP",
            onComplete() {
            },
        },
        211: {
            name: "Is this bacteria??",
            done() {
                return player.c.points.gte("1")
            },
            tooltip: "Get 1 Cell.",
            onComplete() {
            },
        },
        212: {
            name: "Sacrifice Inflation",
            done() {
                return player.scp.points.gte("1e100")
            },
            tooltip: "Get 1e100 Sacrifice Points.",
            onComplete() {
            },
        },
        213: {
            name: "Sacrifice Spammer",
            done() {
                return player.sa.points.gte("30")
            },
            tooltip: "Reach Sacrifice Tier 30.<br> Reward: Sacrifice Tier doesn't reset anything forever.",
            onComplete() {
            },
        },
        214: {
            name: "Light Focus",
            done() {
                return player.l.points.gte("1e250")
            },
            tooltip: "Get 1e250 Light.",
            onComplete() {
            },
        },
        215: {
            name: "No boosts from layers challenge",
            done() {
                if (hasChallenge("sa", 12))
                return true            },
            tooltip: "Complete the 2nd sacrifice challenge.",
            onComplete() {
            },
        },
        221: {
            name: "Time Counter",
            done() {
                return player.tp.points.gte("1")
            },
            tooltip: "Get 1 Time Power.",
            onComplete() {
            },
        },
        222: {
            name: "Cells Grinder",
            done() {
                return player.c.points.gte("e50")
            },
            tooltip: "Get 1e50 Cells.",
            onComplete() {
            },
        },
        223: {
            name: "Already e308??",
            done() {
                return player.scp.points.gte("1.80e308")
            },
            tooltip: "Get 1.80e308 Sacrifice Points.",
            onComplete() {
            },
        },
        224: {
            name: "Current year in seconds",
            done() {
                return player.tp.points.gte("6.3829e10")
            },
            tooltip: "Get 63,829,000,000 Time Power. (Year 2024)",
            onComplete() {
            },
        },
        225: {
            name: "Answer to Everything",
            done() {
                return player.sa.points.gte("42")
            },
            tooltip: "Reach Sacrifice Tier 42.<br> Reward: 1,000,000x Energy & Light",
            onComplete() {
            },
        },
        231: {
            name: "More Layers",
            done() {
                return player.le.points.gte("1")
            },
            tooltip: "Get 1 Leaf Points.<br> Reward: Row 1 to Row 3 Layers are automated forever.",
            onComplete() {
            },
        },
        232: {
            name: "MORE INFLATION",
            done() {
                return player.points.gte("e200000")
            },
            tooltip: "Get 1e200,000 Points.",
            onComplete() {
            },
        },
        233: {
            name: "Addition Buyable Amount??",
            done() {
                 if (hasMilestone("le", 4))
                return true            },
            tooltip: "Reach 4th leaf milestone.",
            onComplete() {
            },
        },
        234: {
            name: "Faster Inflation!!",
            done() {
                return player.scp.points.gte("e1500")
            },            
            tooltip: "Get 1e1,500 Sacrifice Points",
            onComplete() {
            },
        },
        235: {
            name: "Sacrificer No Lifer ",
            done() {
                return player.sa.points.gte("100")
            },            
            tooltip: "Reach Sacrifice Tier 100. <br> Reward: Automatically get Sacrifice Tier forever.",
            onComplete() {
            },
        },
        241: {
            name: "Energy Combuster",
            done() {
                return player.e.points.gte("1e2500")
            },            
            tooltip: "Get 1e2,500 Energy.",
            onComplete() {
            },
        },
        242: {
            name: "Time Consumer",
            done() {
                return player.tp.points.gte("1e420")
            },            
            tooltip: "Get 1e420 Time Power",
            onComplete() {
            },
        },
        243: {
            name: "Grass Toucher",
            done() {
                return player.le.points.gte("1e9")
            },            
            tooltip: "Get 1,000,000,000 Leaf Points.<br> Reward: Automatically buy Cell Buyables",
            onComplete() {
            },
        },
        244: {
            name: "Point Prestigious",
            done() {
                return player.points.gte("e500000")
            },            
            tooltip: "Get 1e500,000 Points",
            onComplete() {
            },
        },
        245: {
            name: "The Softcap",
            done() {
                return player.e.points.gte("3.333e3333")
            },            
            tooltip: "Reach the energy effect softcap.<br> Reward: 10x every Currency below Sacrifice (Except MP)",
            onComplete() {
            },
        },
        251: {
            name: "A layer that resets on the same row???",
            done() {
                return player.st.points.gte("1")
            },
            tooltip: "Reach Super Tier 1.<br> Reward: Row 4 Layer is automated forever.",
            onComplete() {
            },
        },
        252: {
            name: "Already???",
            done() {
                return player.st.points.gte("2")
            },
            tooltip: "Reach Super Tier 2.",
            onComplete() {
            },
        },
        253: {
            name: "Finally...",
            done() {
                return player.mp.points.gte("e1000")
            },            
            tooltip: "Get 1e1,000 Mega-Points.",
            onComplete() {
            },
        },
        254: {
            name: "Trees",
            done() {
                return player.le.points.gte("1e33")
            },            
            tooltip: "Get 1e33 Leaf Points.",
            onComplete() {
            },
        },
        255: {
            name: "Time Overflow",
            done() {
                return player.tp.points.gte("1e1000")
            },            
            tooltip: "Get 1e1,000 Time Power",
            onComplete() {
            },
        },
        261: {
            name: "A new layer without the reset button?",
            done() {
                return player.cp.points.gte("1")
            },            
            tooltip: "Get 1 Charge Power.<br> Reward: Automatically buy Leaf Buyables. (except the last one)",
            onComplete() {
            },
        },
        262: {
            name: "Maximusmillion",
            done() {
                return player.points.gte("e1e6")
            },            
            tooltip: "Get 1e1,000,000 Points.",
            onComplete() {
            },
        },
        263: {
            name: "Evolved Milestones",
            done() {
                if (hasUpgrade("cp", 24))
                return true            },
            tooltip: "Charge the first hyper-point milestone",
            onComplete() {
            },
        },
        264: {
            name: "The Super Softcap",
            done() {
                return player.c.points.gte("1e2500")
            },            
            tooltip: "Reach the cell softcap.",
            onComplete() {
            },
        },
        265: {
            name: "Time based milestones???",
            done() {
                if (hasUpgrade("cp", 33))
                return true            },
            tooltip: "Charge the first leaf point milestone",
            onComplete() {
            },
        },
        271: {
            name: "New Grassy",
            done() {
                return player.le.points.gte("1e250")
            },            
            tooltip: "Get 1e250 Leaf Points.",
            onComplete() {
            },
        },
        272: {
            name: "Maximusmillion x2",
            done() {
                return player.points.gte("e2e6")
            },            
            tooltip: "Get 1e2,000,000 Points.",
            onComplete() {
            },
        },
        273: {
            name: "Sacrificer Explosion ",
            done() {
                return player.sa.points.gte("1000")
            },            
            tooltip: "Reach Sacrifice Tier 1,000. <br> Reward: Automatically get Super Tier forever.",
            onComplete() {
            },
        },
        274: {
            name: "Divine?",
            done() {
                return player.dp.points.gte("1")
            },            
            tooltip: "Get 1 Divine Point.<br> Reward: Automatically buys the last leaf buyable",
            onComplete() {
            },
        },
        275: {
            name: "Micrillion",
            done() {
                return player.points.gte("e3e6")
            },            
            tooltip: "Get 1e3,000,000 Points.<br> Reward: 100,000,000x MP, Cells, SP and TP",
            onComplete() {
            },
        },
        281: {
            name: "Division?",
            done() {
                return player.dp.total.gte("100")
            },            
            tooltip: "Get 100 Divine Point.<br> Reward: Automatically buy Charge Power Buyables",
            onComplete() {
            },
        },
        282: {
            name: "The Hardcap",
            done() {
                if (hasUpgrade("cp", 73))
                return true            },
            tooltip: "Reach the light effect hardcap",
            onComplete() {
            },
        },
        283: {
            name: "The Grind",
            done() {
                return player.dp.total.gte("1e6")
            },            
            tooltip: "Get 1,000,000 Divine Points.",
            onComplete() {
            },
        },
        284: {
            name: "Pure Pain!",
            done() {
                if (hasChallenge("dp", 12))
                return true            },
            tooltip: "Complete the 2nd divine challenge.",
            onComplete() {
            },
        },
        285: {
            name: "The Upgrade Tree with sub-currency!",
            done() {
                if (hasUpgrade("dp", 31))
                return true            },
            tooltip: "Unlock the upgrade tree tab with Divine Perks.",
            onComplete() {
            },
        },
    },
    tabFormat: ["blank", ["display-text", function() {
        return "<h3 style='color: yellow;'>Achievements: " + player.a.achievements.length + "/" + (Object.keys(tmp.a.achievements).length - 2) + "</h4>"
    }
    ], "blank", "blank", "achievements", ],
}, )
