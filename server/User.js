const mongoose = require('mongoose');

// (1) this is the scema model 
const userScema = new mongoose.Schema({
    
    name: String,
    id: String,
    email: String,
    phone: String,
    address: String,
    image: String,
    student_id : String,
    department : String,
    batch : String,
    program : String,
    section : String,
    role: Object
})

// (2) make the collection and export the model 
module.exports = mongoose.model('user',userScema)