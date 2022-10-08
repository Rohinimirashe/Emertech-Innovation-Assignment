var express = require('express');
const axios=require('axios');
const data = require('./user.json');
var app= express();
app.get('/',function (req,res){
console.log("my Data");
res.json(data);
})

// fs package
app.get('/:id',async function(req,res){
    let {id}=req.params;
    console.log("my data");
    const result2=data.filter(item => item.id == id);
     let getIp=await axios(`http://localhost:3000/${id}`);
     let rest=result2[0];
     rest["ip_address"]=getIp.data[0].ip_address;
     return res.send(result2);
});


app.listen(3001);

