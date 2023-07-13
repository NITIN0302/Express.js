// soul of the Express.js

const express = require('express');
const app = express();

// req => middleware => res
// longer is middleware we have to pass next middleware are terminated condition


const longer = (req,res,next) =>{
    console.log(req.method, req.url);
    res.send("HELLO WORLD");
}

app.get('/',longer,(req,res)=>{
    res.send("Home Page");
})
app.get('/about',(req,res)=>{
    res.send("About Page");
})

app.listen(5000,()=>{
    console.log("Server is listening")
})