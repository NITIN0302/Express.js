const express = require("express")

const app = express();

app.use(express.json())

app.post("/",(req,res)=>{
	const kidney = req.body.kidney
	const kidneylength = kidney.length

	res.send("You have " + kidneylength + " kidney");
})
.use((err,req,res,next)=>{
	res.json({
		msg : "Something went wrong"
	})
})
.listen(3000,()=>{
	console.log("Server is listening to the port")
})
