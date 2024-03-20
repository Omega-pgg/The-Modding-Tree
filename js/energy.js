
addLayer("e", {
    name: "e", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    passiveGeneration() {
        if (hasMilestone("mp", 6)) return (hasMilestone("mp", 6)?1:0)
        },
    effect(){

    },
    effect(){
        return Decimal.pow(10, player[this.layer].total)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
      },
      effect(){
        let e = player[this.layer].total.max("1").pow("3")
        if(e.gt("e3000")){
            if(hasAchievement("a",237))e=e.log10().pow(5.18e3/6).min("ee4")
        }
        return e
      },
      effectDescription(){

},
effectDescription(){
    let s =  "boosting point gain by x" + format(tmp[this.layer].effect) 
    if(this.effect().gt("e1e6")){s=s+" (hardcapped)"}
    else if(this.effect().gt("e3000")){s=s+" (softcapped)"}
    return s
    /*
      use format(num) whenever displaying a number
    */
   
  },
    tooltip(){
        return "<h3>Energy</h3><br>" + format(player.e.points) + " Energy"
      },
      upgrades: {
        11: {
            title: "Energy Upgrades? (EU11)",
            description: "3x Light",
            cost: new Decimal(1e12),
                },
                12: {
                    title: "Energy Boost (EU12)",
                    description: "10x Energy",
                    cost: new Decimal(1e14),
                    unlocked() {
                        return hasUpgrade("e", 11)
                    
                    }
                        },
                        13: {
                            title: "Energy Boost II (EU13)",
                            description: "5x Light",
                            cost: new Decimal(1.25e18),
                            unlocked() {
                                return hasUpgrade("e", 12)
                            
                            }
                                },
                                14: { title: "Light Energetic (EU14)",
        description: "Energy boosts Light",
        cost: new Decimal(1e23),
        effect() {
            return player[this.layer].points.add(1).pow("0.1")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("e", 13)
        }
        },
        15: {
            title: "Air Fire (EU15)",
            description: "Air cost is divided by 10.",
            cost: new Decimal(1e27),
            unlocked() {
                return hasUpgrade("e", 14)
            
            }
                },
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
                    ["raw-html", () => `<h4 style="opacity:.5">The Energy Layer will give a boost to Points.</h4>`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9,10,11]]
                ],
            },
        },
    },
    color: "yellow",
    requires: new Decimal("1e4000"), // Can be a function that takes requirement increases into account
    resource: "Energy", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["ai"],
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1e-308,    
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        mult = mult.times(tmp.l.effect)
        if (hasUpgrade('ai', 11)) mult = mult.times(upgradeEffect('ai', 11))
        if (hasUpgrade('mp', 64)) mult = mult.times(upgradeEffect('mp', 64))
        if (hasUpgrade('mp', 72)) mult = mult.times(upgradeEffect('mp', 72))
        if (hasUpgrade('e', 12)) mult = mult.times(10)
        if (hasUpgrade('sp', 91)) mult = mult.times(5)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "E", description: "E: Reset for Energy", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("mp", 61) || player[this.layer].unlocked)},
})
