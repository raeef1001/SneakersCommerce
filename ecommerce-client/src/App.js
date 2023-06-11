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
export const Context = createContext(); 
function App() {
  const [cartItems,setCartItems]=useState([])
  const [lovedItems,setLovedItems]=useState([])
  
  const [fakes,setFakes]=useState([])
  const [caller,setcaller]=useState(true)
  useEffect(()=>
   {

    fetch('http://localhost:4545/products')
    .then(res=>res.json())
    .then(data=>{
        var fnew=[data]
        setFakes(fnew[0])
        console.log("showing fakes")
        console.log(fakes)
        if (fakes.length<=0) {
          setcaller(!caller)
        }
    })
  },[caller])
   

  
  return (
    <Context.Provider value={fakes}>
    <main >
      <Header cartItems={cartItems} wishItems={lovedItems} > </Header>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/catagory/:id' element={<Catagory/>}/>
      <Route path='/singleproduct/:id' element={<ProductSIngle cartItems={cartItems} setCartItems={setCartItems} wishItems={lovedItems} setLovedItems={setLovedItems} related={fakes} ></ProductSIngle>}/>
      <Route path='/cart' element={<Cart cartItems={cartItems}></Cart>}/>
      <Route path='/wishlist' element={<Wishlist wishItems={lovedItems}></Wishlist>}/>
    </Routes>
      <Footer></Footer>
    </main>
    </Context.Provider>
  );
}

export default App;
