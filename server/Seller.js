const mongoose = require('mongoose');

// (1) this is the scema model 
const sellerScema = new mongoose.Schema({
    
    name: String,
    id: String,
    email: String,
    phone: String,
    iut_id: String,
    address: String,
    image: String,
    coverImage: String,
    shopName: String,
    contactNumber: String,

    role: Object
})

// (2) make the collection and export the model 
module.exports = mongoose.model('seller',sellerScema)