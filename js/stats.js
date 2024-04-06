
addLayer("stat", {
    
    name: "statistics", // This is optional, only used in a few places, If absent it just uses the layer id.
    
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
   
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
   
    startData() { return {
        unlocked: true,
    }},
    
    color: "#ffffff",
    tooltip(){return "Statistics"},
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    tabFormat:{
        "Stats":{
            content:[
                ["display-text",function(){return getStatTab()}]
            ]
        },
    },
})

function getStatTab(){
    let br = "<br>"
    let x = "<h1 style='color: #ffffff'>Points</h1>"
    x += br
    x += "<h3>You have " + format(player.points) + " Points.</h3>"
    x += br
    x+= "――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――"
    x += br
    x += "<h1>Time:🕒</h1>"
    x += br
    x += "<h3>You have played for " + formatTime(player.timePlayed, true + ".</h3>")
   x += br
    x+= "<h4>―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――</h4>"
    if (player.le.unlocked){
        x += br
        x += "<h1 style='color: #66FF00'>Leaf</h1>"
        x += br
       x += "<h3>You have " + formatWhole(player.le.points) + " Leaf Points.</h3>"
       x += br
       x+= "――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――"
    }
    x += br
    let y = "<h1 style='color: yellow'>Achievements:🏆</h1>"
    y += br
    y += "<h3>You have " + formatWhole(player.a.achievements.length) +  "/" + (Object.keys(tmp.a.achievements).length - 2) + " Achievements.</h3>"
    y += br
    y+= "――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――"
    return x+y
}
