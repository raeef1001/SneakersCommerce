const mongoose = require('mongoose');

// (1) this is the scema model 
const orderScema = new mongoose.Schema({
  

    product_id:Array,
    seller_id: String,
    user_id: String,
    payment_amount: String,
    payment_method: String,
    payment_status: String,
    order_status: String,
    order_date: String,
    delivery_date: String,
    delivery_address: String,
    delivery_charge: String,
    delivery_status: String,
})

// (2) make the collection and export the model 
module.exports = mongoose.model('orders',orderScema)