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
import Login from './Pages/Login';

// firebase import : 
import { initializeApp } from 'firebase/app';
import "firebase/auth"
import firebaseConfig from './firebase.config';
import {signOut, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


export const Context = createContext(); 
function App() {
  const [cartItems,setCartItems]=useState([])
  const [lovedItems,setLovedItems]=useState([])
  const [initial_load,setinitial_load]=useState(0)

  const [openModal, setOpenModal] = useState(false);

  // login 
  // initializing firebase from firebase config file 
  const app = initializeApp(firebaseConfig)
  const provider = new GoogleAuthProvider()

// storing user data 
  const[userDetails,setUser]= useState({
    isSignedIn: false,
    uid:"",
    userName:"",
    UserEmail :"",
    UserImage :"",
    phone:"",
    student_id : "",
    department : "",
    batch : "",
    program : "",
    section : "",
    iut_id:"",
    address:"",
    role:{}, 
    all_data_available:false,
  })

// this function take care of signin 
  var signIn =()=>{
    const auth = getAuth()
    signInWithPopup(auth,provider)
    .then(result=>{
      const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
     const user = result.user;
     console.log(user)
  // a object is made with the user data 
     var userDetails={
      isSignedIn: true,
      uid:user.uid,
    userName:user.displayName,
    UserEmail :user.email,
    UserImage :user.photoURL,
    phone:"",
    iut_id:"",
    address:"",
    role:{}, 
    student_id :"",
    department : "",
    batch : "",
    program :"",
    section : "",
    all_data_available:false,
    
     }
  // user object is being stored into useState
     setUser(userDetails)

    })

  // handling error for auth
    .catch((error) => {
     
      const errorCode = error.code;
      const errorMessage = error.message;      
      const email = error.customData.email;      
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(`error code = ${errorCode}`)
      console.log(`error message = ${errorMessage}`)
      console.log(`error email = ${email}`)
      console.log(`credential  = ${credential}`)

      
    });
  }

// sending login data to backend : 
useEffect(()=>
{

    
    if (userDetails.isSignedIn) {
      fetch("http://localhost:4545/addUser", {
      method: 'POST', // Specify the HTTP method
      headers: {
        'Content-Type': 'application/json', // Specify the content type
        // Add any additional headers as needed
      },
      body: JSON.stringify({
        // Your request payload goes here
        name: userDetails.userName,
        id: userDetails.uid,
        email: userDetails.UserEmail,
        phone:userDetails.phone,
        iut_id: userDetails.iut_id,
        address: userDetails.address,
        image: userDetails.UserImage,
        all_data_available:false,
      }),
    })
      .then(response => {
        // Handle the response
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // or response.text() or response.blob(), etc., depending on the response type
      })
      .then(data => {
        // Handle the data returned by the server
        console.log('Success:', data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
    }
   
 
},[userDetails])

// getting other information about the user : 
useEffect(()=>
{

  if (userDetails.isSignedIn) {
  try {
    fetch(`http://localhost:4545/getUser/${userDetails.uid}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then(d=>{
      console.log(d)
      if (d) {
        
  console.log("called inside getting user data")
        
        var new_user_details={
          isSignedIn: true,
          uid:userDetails.uid,
          userName:userDetails.userName,
          UserEmail :userDetails.UserEmail,
          UserImage :userDetails.UserImage,
          phone:d.phone,
          iut_id:d.iut_id,
          address:d.address,
          role:d.role,
          student_id : d.student_id,
          department : d.department,
          batch : d.batch,
          program : d.program,
          section : d.section,
          all_data_available:d.all_data_available
          
           }
           setUser(new_user_details)
           console.log(new_user_details)
      }
    
    })  
  } catch (error) {
    console.log(error)
  }
  }
},[userDetails.uid])
// this function take care of signOut
var signout =()=>{
  
      const auth = getAuth();
      signOut(auth).then(() => {
        console.log("sign out")
      // here it reinitialize the object to put into setUser
        var userDetails={
        isSignedIn: false,
        uid:"",
        userName:"",
        UserEmail :"",
        UserImage :"",
        phone:"",
        image:"",
        student_id : "",
        department : "",
        batch : "",
        program : "",
        section : "",
        iut_id:"",
        address:"",
        role:{}, 
        all_data_available:false,
         }
      setUser(userDetails)
      })
      .catch((error) => {
        console.log(error)
      });
    }



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
    <Context.Provider value={[fakes,userDetails,openModal,setOpenModal,setUser]}>
    <main >
      <Header cartItems={cartItems} wishItems={lovedItems} categories={categories} signIn={signIn} signout={signout}> </Header>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/catagory/:id' element={<Catagory/>}/>
      <Route path='/singleproduct/:id' element={<ProductSIngle cartItems={cartItems} setCartItems={setCartItems} wishItems={lovedItems} setLovedItems={setLovedItems} related={fakes} ></ProductSIngle>}/>
      <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} signIn={signIn}></Cart>}/>
      <Route path='/wishlist' element={<Wishlist wishItems={lovedItems} setLovedItems={setLovedItems}></Wishlist>}/>
      <Route path='/checkout' element={<Checkout cartItems={cartItems} setCartItems={setCartItems}></Checkout>}/>
    </Routes>
      <Footer></Footer>
    </main>
    </Context.Provider>
  );
}

export default App;
