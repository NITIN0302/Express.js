const express = require("express")
const zod = require("zod") // zod is a external library

const app = express();
const schema = zod.array(zod.number());
app.use(express.json())
app.post("/",(req,res)=>{
	const kidney = req.body.kidney;
	const response = schema.safeParse(kidney)  //safeparse function will check according to schema defined and 
		                       		  //return true or false according to the condition
	if(!response.success)
	{
		throw new Error('my error');
	}
	res.json({
		msg : `You have ${kidney.length} kidneys`
	})
})
.use((err,req,res,next)=>{
        res.json({
                msg : "Something went wrong from global"
        })
})
.listen(3000,()=>{
	console.log("Server is listening to the port 3000")
})
