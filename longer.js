const longer = (req,res,next) =>{
    console.log(req.method, req.url);
    res.send("HELLO WORLD");
}
module.export = longer;