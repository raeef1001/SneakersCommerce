const mongoose = require('mongoose');

// (1) this is the scema model 
const ProductScema = new mongoose.Schema({
    
    name: String,
    desc:String,
    desctwo:String,
    subtitle:String,
    price:Number,
    discount:Number,
    discountedPrice:Number,
    size:[Number],
    disabledSize:[Number],
    catagory:String,
    Image:String,
    allImages:[String],
    selectedSize:Number,
    quantity:Number,
    size_quant:Object
})

// (2) make the collection and export the model 
module.exports = mongoose.model('Product',ProductScema)