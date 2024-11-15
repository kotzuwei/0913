//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();


//web root
server.use(express.static(__dirname+"/AgencyProject"));


//DB
var DB = require("nedb-promises");
var Profolio = DB.create(__dirname+"/profolio.db");
Profolio.insert({modal: "#portfolioModal1", imgSrc:"roundicons.png", heading:"Round Icons", text:"Graphic Design"})



//web get
server.get("/:DDDDD", (req, res)=>{
    res.send("早ㄤ");
})
server.get("/services", (req, res)=>{
    var services = [
        {icon: "fa-shopping-cart", heading:"E-Commerce", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
        {icon: "fa-laptop", heading:"Responsive Design", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."}
    ];
    res.send(services);
})


server.listen(80, ()=>{
    console.log(":DDDDD");
})

