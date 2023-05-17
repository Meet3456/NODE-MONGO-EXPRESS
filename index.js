const express = require('express')
const app = express()

// connecting to Database:
const mongoose = require('mongoose')
mongoose.connect("mongodb://0.0.0.0:27017/e-comm")

// defining models and schemas:
const productSchema = mongoose.Schema({
    name:String,
    price:String,
    brand:String,
    category:String
});

const Product = mongoose.model('products',productSchema)

// middelwares:
app.use(express.json())

// API's

// CREATE(POST):
app.post('/create',async (req,resp)=>{
    let data = new Product(req.body);
    let result = await data.save();
    console.log(req.body)
    resp.send(result);
})


// Retrieve objects(GET)
app.get('/getall',async (req,resp)=>{
    let data = await Product.find();
    resp.send(data);
})


// DELETE:
app.delete("/delete/:_id",async (req,resp)=>{
    console.log(req.params)
    let data = await Product.deleteOne(req.params);
    resp.send(data);
})


// UPDATE RECORDS:
app.put("/update/:_id",async (req,resp)=>{
    console.log(req.params)
    let data = await Product.updateOne(
        req.params,
        {
            $set : req.body
        }
    );
    resp.send(data)
})




app.listen(8080)