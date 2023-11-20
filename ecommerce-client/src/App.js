import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { createContext } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom";
import HeroBanner from './Components/HeroBanner';
import Home from './Components/Home';
import Catagory from './Pages/Catagory';
import ProductSIngle from './Pages/ProductSIngle';
import Cart from './Pages/Cart';
import { useEffect, useState } from 'react';
import Wishlist from './Pages/Wishlist';
import Checkout from './Pages/Checkout';
export const Context = createContext(); 
function App() {
  const [cartItems,setCartItems]=useState([])
  const [lovedItems,setLovedItems]=useState([])
  const [initial_load,setinitial_load]=useState(0)

  // getting cart and wishlist items from localstorage : 
 // useEffect to load data from localStorage when the component mounts
 useEffect(() => {
  console.log("called first")
  const storedcart = localStorage.getItem('mycart');
  const storedwish = localStorage.getItem('mywish');
  console.log(storedwish)
  if (storedcart) {
    setCartItems(JSON.parse(storedcart))
  }
  if (storedwish) {
    setLovedItems(JSON.parse(storedwish))
  }
   

    console.log(lovedItems)
 
}, []);


  
// getting the categories :
const [categories,setCategories]=useState([])

const [categoryCaller,setCategoryCaller]=useState(true)
useEffect(()=>
{
  try {
    fetch('http://localhost:4545/catagoryList')
  .then(res=>res.json())
  .then(data=>{
      var fnew=[data]
      setCategories(fnew)
      console.log("showing category list")
      console.log(categories)
      if (categories.length<=0) {
        setCategoryCaller(!categoryCaller)
      }
  })
    
  } catch (error) {
    console.log(error)
    
  }
},[categoryCaller])





  // getting the banners : 
  const [banners,setBanners]=useState([])
  const [bannerCaller,setBannerCaller]=useState(true)
  useEffect(()=>
  {
    try {
      fetch('http://localhost:4545/banners')
    .then(res=>res.json())
    .then(data=>{
        var fnew=[data]
        setBanners(fnew)
        console.log("showing banners")
        console.log(banners)
        if (banners.length<=0) {
          setBannerCaller(!bannerCaller)
        }
    })
      
    } catch (error) {
      console.log(error)
      
    }
  },[bannerCaller])

  // getting the products :
  const [fakes,setFakes]=useState([])
  const [caller,setcaller]=useState(true)
  useEffect(()=>
   {

   try {
    fetch('http://localhost:4545/products')
    .then(res=>res.json())
    .then(data=>{
        var fnew=[data]
        var products_with_new_schema= fnew[0].map((item)=>{
          var total_quant= Object.values(item.size_quant).reduce((sum, value) => sum + parseInt(value), 0);
          const disabled = Object.keys(item.size_quant).filter(key => parseInt(item.size_quant[key]) === 0);
          const available_Size = Object.keys(item.size_quant).filter(key => parseInt(item.size_quant[key]) !== 0);

          return {
            _id:item._id,
            name:item.name,
            subtitle:item.subtitle,
            Image:item.Image,
            allImages:item.allImages,
            desc:item.desc,
            desctwo:item.desctwo,
            price:item.price,
            discount:item.discount,
            discountedPrice:item.discountedPrice,
            catagory:item.catagory,
            selected_Size:0,
            selected_quantity:0,
            total_price:0,
            total_quantity:total_quant,
            all_size:available_Size,
            disabled_size:disabled,            
            size_quant:item.size_quant,

          }
        })
        setFakes(products_with_new_schema)
        console.log("showing fakes")
        console.log(fakes)
        if (fakes.length<=0) {
          setcaller(!caller)
        }
    })  
   } catch (error) {
    console.log(error)
   }
  },[caller])
   

  
  return (
    <Context.Provider value={fakes}>
    <main >
      <Header cartItems={cartItems} wishItems={lovedItems} categories={categories}> </Header>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/catagory/:id' element={<Catagory/>}/>
      <Route path='/singleproduct/:id' element={<ProductSIngle cartItems={cartItems} setCartItems={setCartItems} wishItems={lovedItems} setLovedItems={setLovedItems} related={fakes} ></ProductSIngle>}/>
      <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems}></Cart>}/>
      <Route path='/wishlist' element={<Wishlist wishItems={lovedItems}></Wishlist>}/>
      <Route path='/checkout' element={<Checkout cartItems={cartItems}></Checkout>}/>
    </Routes>
      <Footer></Footer>
    </main>
    </Context.Provider>
  );
}

export default App;
