const express = require("express")

const app = express();

function checkage(req,res,next)
{
      const a = parseInt(req.query.a)
      if(a >= 14)
      {
              next();
      }
      else
      {
      res.json({
                      msg : "You are underage"
              })
      }
}

app.use(checkage);// will trigger for all the method below its declarations


app.get("/ride1",(req,res)=>{
	res.json({
		msg : "You are allowed to take ride"
	})
})
.get("/ride2",(req,res)=>{
        res.json({
                msg : "You are allowed to take ride"
        })
})
.listen(3000,()=>{console.log("Server is Listening")})


