addLayer("pb2", {
    name: "p2", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P2", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    tooltip(){
        return "<h3>Points-2</h3><br>" + format(player.pb2.points) + " P-2"
      },
      upgrades: {
        11: {
            title: "Sub-Points^2",
            description: "Every Points-2 you have multiplies point gain by 1.5x again compounding.",
            cost: new Decimal(0),
            effect() {
                let effect = Decimal.pow(1.5, player[this.layer].points).min("57.67")
                return effect
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                },
  },
  autoUpgrade() { if (hasMilestone("hp" , 3)) return true},

    color: "#8b0000",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "Points-2", // Name of prestige currency
    resetsNothing() {return hasMilestone("hp", 3)},
    autoPrestige() {
        return hasMilestone("hp", 3)
    },
    baseResource: "Super-Points", // Name of resource prestige is based on
    baseAmount() {return player.sp.points}, // Get the current amount of baseResource
    branches: ["up", "p"],
    canBuyMax() { return hasMilestone("hp", 2) },
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent() {if (inChallenge("hp", 12)) return new Decimal(2.5)
    else if (inChallenge("hp", 51)) return new Decimal("5")
    else if (inChallenge("hp", 32)) return new Decimal("3.25")
    else if (inChallenge("hp", 31)) return new Decimal("2.75")
    else if (inChallenge("mp", 11)) return new Decimal("20")
    else if (inChallenge("mp", 12)) return new Decimal("20")
    else return new Decimal(2.25)},      
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('sp', 65)) mult = mult.div(upgradeEffect('sp', 65))
        if (hasUpgrade('hp', 71)) mult = mult.div(upgradeEffect('hp', 71))
        if (hasUpgrade('mp', 65)) mult = mult.div(upgradeEffect('mp', 65))
        if (hasUpgrade('mp', 82)) mult = mult.div(upgradeEffect('mp', 82))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "2", description: "2: Reset for Points-2", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("up", 12) || player[this.layer].unlocked)},
})
