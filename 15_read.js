const express = require('express');
const app = express();
let {products} = require('./8_data.js');


app.get('/',(req,res)=>{
    res.status(200).json({products});
})



app.listen(5000,()=>{
    console.log("Server is listening");
})