const express = require('express')
const app = express();

app.get("/",(req,res)=>{
	const kidneyid = req.query.kidneyid
	const username = req.headers.username
	const password = req.headers.password

	if(username === "NITIN" && password === "pass")
	{
		if(kidneyid == 1|| kidneyid == 2)
		{
			res.json({
				msg:"your kidney is fine"
			})
		}
		else
		{
			res.status(400).json({
				msg : "Something went wrong"
			})
		}
	}
	else
	{
		res.status(400).json({
                                msg : "Something went wrong"
                        })
	}
	res.json({
		msg : "Something went wrong"
	})

})
.listen(3000,()=>{
	console.log("listening to the port in 3000")
})
