var express = require('express');
const data = require('./metadata.json');
var app= express();
app.get('/',function (req,res){
console.log("my Data");
res.json(data);
})

// fs package
app.get('/:id',function(req,res){
    let {id}=req.params;
    console.log("my data");
    const result=data.filter(item => item.id == id);
    return res.send(result);
});

    
app.listen(3000);

