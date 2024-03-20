
addLayer("l", {
    name: "l", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "L", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    passiveGeneration() {
      if (hasMilestone("mp", 7)) return (hasMilestone("mp", 7)?1:0)
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
        let e = player[this.layer].total.max("1").pow("1")
        if(e.gt("e3000")){
            if(hasAchievement("a",237))e=e.log10().pow(5.18e3/6).min("ee4")
        }
        return e
      },
      effectDescription(){

},
effectDescription(){
    let s =  "boosting energy gain by x" + format(tmp[this.layer].effect) 
    if(this.effect().gt("e1e6")){s=s+" (hardcapped)"}
    else if(this.effect().gt("e3000")){s=s+" (softcapped)"}
    return s
    /*
      use format(num) whenever displaying a number
    */
   
  },
    tooltip(){
        return "<h3>Light</h3><br>" + format(player.l.points) + " Light"
      },
    color: "#DCD9CD",
    requires: new Decimal("1e4000"), // Can be a function that takes requirement increases into account
    resource: "Light", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    branches: ["e"],
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1e-308,    
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('ai', 11)) mult = mult.times(upgradeEffect('ai', 11))
        if (hasUpgrade('e', 11)) mult = mult.times(3)
        if (hasUpgrade('mp', 73)) mult = mult.times(upgradeEffect('mp', 73))
        if (hasUpgrade('mp', 75)) mult = mult.times(upgradeEffect('mp', 75))
        if (hasUpgrade('e', 13)) mult = mult.times(5)
        if (hasUpgrade('e', 14)) mult = mult.times(upgradeEffect('e', 14))
        if (hasUpgrade('sp', 91)) mult = mult.times(5)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "L", description: "L: Reset for Light", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("mp", 61) || player[this.layer].unlocked)},
})
