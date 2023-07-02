const express=require('express');
const cuisineModel = require('./model/cuisinesDb');
const ccuisineModel = require('./model/ccusineDb');

const cors = require('cors');

const app= new express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


app.post('/addcuisine',async(req,res)=>{
    console.log(req.body)
    var data =await cuisineModel(req.body);
    data.save();
    res.send({status:"data saved"})
})

app.get('/viewcuisine',async(req,res)=>{
    var data = await cuisineModel.find();
    res.json(data);
})

app.delete('/deletecuisine/:id',async(req,res)=>{
    console.log(req.params)
    let id = req.params.id;
    await cuisineModel.findByIdAndDelete(id);
    res.json({status:"deleted"})
})

app.put('/updatecuisine/:id',async(req,res)=>{
    // console.log(req.params)
    let id = req.params.id;
    try{
        var data = await cuisineModel.findByIdAndUpdate(id,req.body)
        res.json({status:"updated"})
    }
    catch(err){
        res.status(500).send(err)
    }
})


app.post('/caddcuisine',async(req,res)=>{
    console.log(req.body)
    var data =await ccuisineModel(req.body);
    data.save();
    res.send({status:"data saved"})
})

app.get('/cviewcuisine',async(req,res)=>{
    var data = await ccuisineModel.find();
    res.json(data);
})

app.delete('/cdeletecuisine/:id',async(req,res)=>{
    console.log(req.params)
    let id = req.params.id;
    await ccuisineModel.findByIdAndDelete(id);
    res.json({status:"deleted"})
})

app.put('/cupdatecuisine/:id',async(req,res)=>{
    // console.log(req.params)
    let id = req.params.id;
    try{
        var data = await ccuisineModel.findByIdAndUpdate(id,req.body)
        res.json({status:"updated"})
    }
    catch(err){
        res.status(500).send(err)
    }
})





app.listen(3008,()=>{
    console.log("app is running in port 3008")
})
