const express = require('express');
const app = express();

app.use(express.static("./methods-public"));

app.use(express.urlencoded({extended:false}))

app.get((req,res)=>{
    res.status(200).end("Hello World")
})

app.post('/login',(req,res)=>{
    const {name} = req.body;
    if(name)
    {
        res.send(`Welcome ${name}`);
    }
    res.end("POST");
})

app.listen(5000,()=>{
    console.log("Server is listening");
})