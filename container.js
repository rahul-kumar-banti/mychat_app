const dependable=require("dependable");
const  path= require("path");
var  container= dependable.container();
 const mycontainer=[
['_','lodash']
 ];

 mycontainer.forEach(function(val){
container.register(val[0],function(){
	return require(val[1]);
});
 });
 container.load(path.join(__dirname,'/controller'))
 container.load(path.join(__dirname,'/helper'))
container.register("container",function(){
	return container;
});
module.exports=container;