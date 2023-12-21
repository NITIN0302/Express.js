const express = require("express")
const app = new express();


app.get("/",(req,res)=>{
	res.send("Hello World")
})
.listen(3000,()=>{
	console.log("listening to the port")
})
