const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./5_navbar-app')); //will import all the file from navbar-app

// app.get('/',(req,res)=>{
//     res.status(200).sendFile(path.resolve(__dirname,'./5_navbar-app/index.html'));
// })

app.get('*',(req,res)=>{
    res.status(200).send("Resource not found");
})

app.listen(5000,()=>{
    console.log("Server is listening");
})

