const express = require("express")
const app = express();

const user = [{
	name:"john",
	kidneys:[{
			healthy:false
		}]
}]

app.get("/", (req,res)=>{
	let johnkidneys = user[0]["kidneys"].length;
	let healthykid = 0;
	for(let i=0;i<johnkidneys;i++)
	{
		if(user[0]["kidneys"].healthy == true)
		{
			healthykid++;
		}
	}
	let unhealthy = johnkidneys - healthykid;
	res.json({
		johnkidneys,
		healthykid,
		unhealthy
	})
})
.post("/",(req,res)=>{
	const isHealthy = req.body.isHealthy
	user[0].kidneys.push({healthy:isHealthy})
	res.send("Done!")
})
.listen(3000,()=>{
	console.log("App is listening at 3000")
})
