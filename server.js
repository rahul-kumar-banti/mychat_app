var  express  = require("express");
var container=  require("./container");
var bodyParser=require("body-parser");
var  ejs=require("ejs");
var  http=require("http")
container.resolve(function(){
var app=function serverConfig(){
	app=express();
	const server=http.createServer(app);
	server.listen(3000,function(){
	console.log("server is  running  at  port 3000");
	});
	}
	});
