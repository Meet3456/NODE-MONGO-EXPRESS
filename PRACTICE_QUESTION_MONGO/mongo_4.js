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


const insertintoDB = async (name,price,brand,category)=>{
    const result = new Product({
        name:name,
        price:price,
        brand:brand,
        category:category
    })

    await result.save();
    console.log("Product inserted successfully",result);
}


app.get('/',async(req,resp)=>{
    const product = await Product.findOne();
    resp.send(product);
})

const port = 5000;
app.listen(port,()=>{
    console.log(`Server Running on https://localhost${port}`);
})

//insertintoDB("mi","25000","redmi","mobile");