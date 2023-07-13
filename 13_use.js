const express = require('express');
const longer = require('./longer')
const app = express();

app.use(longer); //we can pass a path on which we can apply middleware ex : app.use('/api',longer);

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
