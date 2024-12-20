//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();
var bodyParser = require("body-parser");


//web root
server.use(express.static(__dirname+"/AgencyProject"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());


//DB
var DB = require("nedb-promises");
var ProfolioDB = DB.create(__dirname+"/profolio.db");
var ProfolioDB = DB.create(__dirname+"/contact_me.db");
    // ProfolioDB.insert([ 
    //     { href: "#portfolioModal1", imgSrc: "img/portfolio/roundicons.png", title: "Round Icons", text: "Graphic Design" },
    //     { href: "#portfolioModal2", imgSrc: "img/portfolio/startup-framework.png", title: "Startup Framework", text: "Website Design" },
    //     { href: "#portfolioModal3", imgSrc: "img/portfolio/treehouse.png", title: "Treehouse", text: "Website Design" },
    //     { href: "#portfolioModal1", imgSrc: "img/portfolio/roundicons.png", title: "Round Icons", text: "Graphic Design" },
    //     { href: "#portfolioModal2", imgSrc: "img/portfolio/startup-framework.png", title: "Startup Framework", text: "Website Design" },
    //     { href: "#portfolioModal3", imgSrc: "img/portfolio/treehouse.png", title: "Treehouse", text: "Website Design" }
    // ])



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


server.get("/profolio", (req,res)=>{
    //db
    ProfolioDB.find({}).then(results=>{
        if(results != null)
        {
            res.send(results);
        }
        else
        {
            res.send("error");
        }
    })

})


server.post("contact_me", (req,res)=>{
    ContactDB.insert(req.body);
    res.send("ok");
})


server.listen(80, ()=>{
    console.log(":DDDDD");
})

