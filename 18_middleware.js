const express = require("express")
const app = express()

const userAuth = (req,res,next) => {
	username = req.headers.username
	password = req.headers.password
	if(username != "NITIN" || password != "pass")
	{
		res.status(400).json({
			msg : "Something Went Worng from userAuth"
		})
	}
	else
	{
		next();
	}
}

const Kidneymiddleware = (req,res,next) => {
	kidneyId = req.query.kidneyid
	if(kidneyId != 1 && kidneyId != 2)
	{
		res.status(400).json({
			msg : "Something Went Wrong from Kidneymiddleware"
		})
	}
	else
	{
		next();
	}
}

app.get("/",(req,res)=>{
	res.send("Hello World")
})
.get("/health-check",userAuth,Kidneymiddleware,(req,res)=>{
	res.json({
		msg : "Your kidney is healthy"
	})
})
.listen(3000,()=>{
	console.log("App is listenign to the port 3000")
})
