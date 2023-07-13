const express = require('express');
// const longer = require('./longer')
const app = express();

const longer = (req,res,next) =>{
    console.log(req.method, req.url);
}

app.use(longer);

app.get('/',(req,res)=>{
    res.send("Pilo World")
})

app.get('/about',(req,res)=>{
    res.send("Hilo World")
})

app.get('/section',(req,res)=>{
    res.send("Silo World")
})

app.listen(5000,()=>{
    console.log("Server is listening");
})
