const longer = (req,res,next) =>{
    console.log("longer")
    next();
}
module.exports = longer;