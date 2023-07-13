const express = require('express');
const app = express();
const longer = require('./longer.js');
const authorize = require('./authorize.js');


app.use([longer,authorize]);

app.get('/',(req,res)=>{
    res.send("Home");
})

app.get('/about',(req,res)=>{
    res.send("About");
})

app.get('/api',(req,res)=>{
    res.send("Api");
})

app.listen(5000,()=>{
    console.log("Server is listening");
})