const express = require("express")
const app = express()

const findSum = (a) => {
	let sum = 0;
	for(let i=1;i<=a;i++)
	{
		sum += i;
	}
	return sum;
}

app.get("/",(req,res)=>{
	let a = req.query.a
	let ans = findSum(a)
	res.send(`The sum of ${a} is ${ans}.`)
})
.listen(3000,()=>{
console.log("Listening to the port");
})
