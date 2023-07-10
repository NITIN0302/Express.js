const express = require('express');
const app = express();
const  {products} = require('./8_data');

app.get('/',(req,res)=>{
    res.end('<h1>Hello World</h1> <a href="./api/product">product</a>');
})

app.get('/api/product',(req,res)=>{
    const newProduct = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image};
    })
    res.json(newProduct);
})

app.listen(5000,()=>{
    console.log("server is listening");
})