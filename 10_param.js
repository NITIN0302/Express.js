const express = require('express');
const { products } = require('./8_data');
const app = express();

app.get('/',(req,res)=>{
    res.json(products);
})

app.get('/api/product/:productID',(req,res)=> {

    const {productID} = req.params;

    const singleProduct = products.find(
        (product) =>product.id === Number(productID)
    )

    if(!singleProduct)
    {
        res.end("Product not found");
    }

    res.json(singleProduct)
})

app.listen(5000,()=>{
    console.log("Server is listening");
})
