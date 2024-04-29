const http=require ('http');
const { stringify } = require('querystring');
const Port=3016;
const hostname="localhost"
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.statusCode=200;
        res.setHeader("Content-Type" ,"application/json")
        res.end(JSON.stringify({"mentor":"Abhiraj"}))

    }else if(req.url=="/about"){
        res.statusCode=200;
        res.setHeader("Content-Type" ,"Text/Plain")
        res.end("mentor Abhiraj")

    }else if(req.url=="/contact"){
        res.statusCode=200;
        res.setHeader("Content-Type" ,"Text/Plain")
        res.end("contact details found")
    }else{
        res.statusCode=500;
        res.setHeader("Content-Type" ,"Text/Plain")
        res.end("Page not found")
    }
   

});

server.listen(Port,()=>{
    console.log(`server is running at ${hostname}:${Port}`)

})