const mongoose = require('mongoose')
require('dotenv').config()
var express = require('express');
var bodyParser = require('body-parser')
const cors = require('cors')
const Product = require('./Product');


// node setup 
var app = express();
app.use(cors());
app.use(bodyParser.json());

// mongoose 
const uri =process.env.MongoUri ;
mongoose.connect(uri)
    .then(() => console.log('connected to server'))
    .catch((err) => console.log(err))



// client will get this info when on /users url 
var data
async function loadProduct() {

    const productlist = await Product.find().limit(9)
    console.log(productlist)
    data = productlist
}
app.get('/products', async (req, res) => {
    await loadProduct()

    console.log("datasend" + data)
    res.send(data)



})


// catagory 
async function loadProductcat(cat) {

    const productlist = await Product.find({ catagory: `${cat}` }).limit(9)
    console.log(productlist)
    data = productlist
}
app.get('/catagory/:id', async (req, res) => {
    var cat = req.params.id
    await loadProductcat(cat)
    res.send(data)

})



// single product 

async function loadProductId(id) {

    const productlistid = await Product.findById(`${id}`)
    console.log(productlistid)
    data = productlistid
}
app.get('/singleproduct/:id', async (req, res) => {
    var id = req.params.id
    await loadProductId(id)
    res.send(data)

})


// app.get('/products/:id', (req,res)=>{
//     console.log(req.params.id)
//     res.send(req.params.id)
// })

// getting info form client 

// app.post('/addUser',(req,res)=>{
// console.log(req.body)
// res.send(req.body)
// })


// binding port 
app.listen(4545, () => console.log('listening on 4545'))



// run()
// async function run() {

//     const sampleProduct = new Product({})}
//     await sampleProduct.save()
//     console.log(sampleProduct)
// }

