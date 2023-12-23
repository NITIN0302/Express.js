const express = require("express")
const app = express();

let user = [{
	name:"john",
	kidneys:[{
			healthy:true
		}]
}];

app.use(express.json())
app.get("/", (req,res)=>{
	let johnkidneys = user[0]["kidneys"].length;
	let healthykid = 0;
	for(let i=0;i<johnkidneys;i++)
	{
		if(user[0]["kidneys"][i].healthy === true)
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
.put("/",(req,res)=>{
	let johnkidneys = user[0]["kidneys"].length;
        for(let i=0;i<johnkidneys;i++)
        {
               user[0]["kidneys"][i].healthy = true
        }
	res.send("")	
})
.delete("/",(req,res)=>{
	user[0]["kidneys"]  = user[0]["kidneys"].filter((ele)=>{
		if(ele.healthy == true)
			return ele;
	})
	res.send("")
})
.listen(3000,()=>{
	console.log("App is listening at 3000")
})
