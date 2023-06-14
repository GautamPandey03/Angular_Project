console.log("Gautam");
const express=require('express');
const { consumers } = require('stream');
const app=express();
app.get('/gautam/:if',function(req,res)
{
    id=req.params.if
    if(id==20)
    {
        res.send("Hey Chetak..")
    }
    else{
        res.send("Hello Word"+id)
    }

   
})
app.listen(9000,(req,resp)=>{
    console.log("Hey...");
}
)