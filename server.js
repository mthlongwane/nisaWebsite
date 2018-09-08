var express = require ('express');
var app =  express();
var path = require("path");
const port = process.env.PORT || 3000 ; // process.env stores all enviroment variables

var loc = path.join(__dirname+"/")

app.use( '/' , express.static(path.join(__dirname ,'/')));

var router = express.Router();


router.use(function(req,res,next){
    next();
})

app.use("/", router)
app.use("*", function(req,res){
    res.sendFile(loc+"404.html");
}
)

router.get("/", function(req,res){
    res.sendFile(loc+"index.html");
})

router.get("/aboutUs",function(req,res){
    res.sendFile(loc+"aboutUs.html");
})


router.get("/contactUs",function(req,res){
    res.sendFile(loc+"contactUs.html");
})



 
//server setup to listen at port 3000
app.listen(port, () => {
    console.log(`Port started @ ${port}.`);
})
 
module.exports = {app} ;