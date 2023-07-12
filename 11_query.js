const express = require('express');
const { products } = require('./8_data');
const app = express();

app.get('/api/v1/query',(req,res)=>{
    
    const { search,limit } = req.query
    let searcharray = [...products];

    if(search){
        searcharray = searcharray.filter((product)=>{
            return product.name.startsWith(search);
        })
    }

    if(limit){
        searcharray = searcharray.slice(0,Number(limit));
    }

    res.status(200).json(searcharray);
})

app.listen(5000,()=>{
    console.log("server is listening")
})
