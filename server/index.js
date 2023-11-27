const mongoose = require('mongoose')
require('dotenv').config()
var express = require('express');
var bodyParser = require('body-parser')
const cors = require('cors')
const Product = require('./Product');
const user = require('./User');
const order = require('./Order');

// node setup 
var app = express();
app.use(cors());
app.use(bodyParser.json());

// mongoose 
const uri =process.env.MONGO_URI ;
mongoose.connect(uri)
    .then(() => console.log('connected to server'))
    .catch((err) => console.log(err))



// client will get this info when on /users url 
var data
async function loadProduct() {

    const productlist = await Product.find().limit(9)
    // console.log(productlist)
    data = productlist
}
app.get('/products', async (req, res) => {
    await loadProduct()

    // console.log("datasend" + data)
    res.send(data)



})


// header catagory : 
async function getCat() {

    const productlist = await Product.find()


    let incrementingId = 1; // Start with id = 1

   data = Object.entries(productlist.reduce((acc, obj) => {
      const {  catagory } = obj;
      acc[ catagory] = (acc[ catagory] || 0) + 1;
      return acc;
    }, {})).map(([ catagory, doc_count]) => ({
      id: incrementingId++,
      url: `catagory/${catagory}`,
      name:catagory,
      doc_count,
    }));
      

}
app.get('/catagoryList', async (req, res) => {
    await getCat()
    res.send(data)

})

// catagory 
async function loadProductcat(cat) {

    const productlist = await Product.find({ catagory: `${cat}` }).limit(9)
    // console.log(productlist)
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
    // console.log(productlistid)
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





// creating user : 
async function findUser(id) {

    const userid = await user.find({ id: `${id}` })
    // console.log(userid)
    return userid;
}
async function createUser(name, id, email, phone, iut_id, address, image, role,res,all_data_available) {
    var u = await findUser(id)
    if (u.length > 0) {
        return u;
        
    }
    else{
        const user1 = new user({
            name: name,
            id: id,
            email: email,
            phone: phone,
            iut_id: iut_id,
            address: address,
            image: image,
            role: role,
            all_data_available : all_data_available
        })
        await user1.save()
        
    }
   
}
app.post('/addUser', async (req, res) => {
    var name = req.body.name
    var id = req.body.id
    var email = req.body.email
    var phone = req.body.phone
    var iut_id = req.body.iut_id
    var address = req.body.address
    var image = req.body.image
    var role = req.body.role
    var all_data_available = req.body.all_data_available

    try {
      var aa =    await createUser(name, id, email, phone, iut_id, address, image, role,res,all_data_available)
    } catch (error) {
        console.error(error)
    }
    // await createUser(name, id, email, phone, iut_id, address, image, role,res,all_data_available)
    res.send(aa)

}
)



// updating user information : 
async function updateUser(id, name, email, phone, image,student_id,department,batch,program,section,all_data_available) {
    const updatedUser = await user.updateOne({ id: `${id}` }, {
        $set: {
            name: name,
            email: email,
            phone: phone,
            image: image,
            student_id : student_id,
            department : department,
            batch : batch,
            program : program,
            section : section,
            all_data_available : all_data_available
            
        }
    })
    // console.log(updatedUser)
    // console.log("called")
    // console.log(id, email, phone, image,student_id,department,batch,program,section)
}
app.post('/updateUser', async (req, res) => {
    var name = req.body.name
    var id = req.body.id
    var email = req.body.email
    var phone = req.body.phone
    var image = req.body.image
    var student_id = req.body.student_id
    var department = req.body.department
    var batch = req.body.batch
    var program = req.body.program
    var section = req.body.section
    var all_data_available = req.body.all_data_available

    try {
        await updateUser(id, name, email, phone, image,student_id,department,batch,program,section,all_data_available)
        
    } catch (error) {
        console.error(error)
        
    }
    
   
    res.send("user updated")

}
)





// getting all the information about the user : 
async function getUser(id) {
    try {
        const userid = await user.find({ id: `${id}` })
        console.log("called getUser")
        console.log(userid)
        return userid;
    } catch (error) {
        console.log(error)
    }

  
}
app.get('/getUser/:id', async (req, res) => {
    var id = req.params.id
    data = await getUser(id)
    if (data.length>0) {
        res.send(data[0])
        
    }
    // res.send(data[0])

}
)

// http://localhost:4545/getUser/${userDetails.uid}





// order : 
async function createOrder(product_id, user_id) {
    const order1 = new order({
        product_id: product_id,
        // seller_id: seller_id,
        user_id: user_id,
        // payment_amount: payment_amount,
        // payment_method: payment_method,
        // payment_status: payment_status,
        // order_status: order_status,
        // order_date: order_date,
        // delivery_date: delivery_date,
        // delivery_address: delivery_address,
        // delivery_charge: delivery_charge,
        // delivery_status: delivery_status
    })
    await order1.save()
    console.log(order1)
}
app.post('/addOrder', async (req, res) => {
    var product_id = req.body.product_id
    // var seller_id = req.body.seller_id
    var user_id = req.body.user_id
    // var payment_amount = req.body.payment_amount
    // var payment_method = req.body.payment_method
    // var payment_status = req.body.payment_status
    // var order_status = req.body.order_status
    // var order_date = req.body.order_date
    // var delivery_date = req.body.delivery_date
    // var delivery_address = req.body.delivery_address
    // var delivery_charge = req.body.delivery_charge
    // var delivery_status = req.body.delivery_status

    await createOrder(product_id, user_id)
    res.send(product_id)

}
)
















// always caller 
let intervalID;

function repeatEverySecond() {
  intervalID = setInterval(sendMessage, 100000);
//   console.log(intervalID)
}
function sendMessage() {
    console.log("called")
      fetch('https://sneakersserver.onrender.com/products')
    //   .then(response =>console.log(response) )
        
     
  }

repeatEverySecond()
// binding port 
app.listen(4545)



// run()
// async function run() {

//     const sampleProduct = new Product({})}
//     await sampleProduct.save()
//     console.log(sampleProduct)
// }

