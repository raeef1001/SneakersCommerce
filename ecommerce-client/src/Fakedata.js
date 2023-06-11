import React from 'react';
import p1 from './assets/p1.png'
import p2 from './assets/p2.png'
import p3 from './assets/p3.png'
import p4 from './assets/p4.png'
import p5 from './assets/p5.png'
import p6 from './assets/p6.png'
import p7 from './assets/p7.png'
import productOne from './assets/product-1.webp'
const Fakedata = [
    {
        id:1,
        name: "air jordar sdfsd",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        desctwo:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        subtitle:"Men's Shoes",
        price:20000,
        discount:20,
        discountedPrice:16000,
        size:[6,7,8,9,10,6.5,7.5],
        disabledSize:[11,12,14],
        catagory:"Jordan",
        Image:productOne,
        allImages:[p1,p2,p3,p4,p5,p6,p7],
        selectedSize:'',
        quantity:1,
      

    },
    {
        name: "air jordar sdfsd",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        desctwo:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        subtitle:"Men's Shoes",
        price:20000,
        discount:20,
        discountedPrice:16000,
        size:[6,7,8,9,10,6.5,7.5],
        disabledSize:[11,12,14],
        catagory:"Jordan",
        Image:"https://res.cloudinary.com/dirbibxzp/image/upload/v1686339483/thumbnail_s8bh6q.jpg",
        allImages:["https://res.cloudinary.com/dirbibxzp/image/upload/v1686339483/air-jordan-1-mid-se-craft-shoes-RmP7J6_kopwhk.jpg","https://res.cloudinary.com/dirbibxzp/image/upload/v1686339484/38175751-fd04-468e-8049-c772d41f5397_pvi3cw.webp","https://res.cloudinary.com/dirbibxzp/image/upload/v1686339483/cb9e0841-2e25-42b5-89f8-71a958794c2a_nlxofp.webp","https://res.cloudinary.com/dirbibxzp/image/upload/v1686339483/693cc53f-d228-472a-bf17-0a2e2c42daf7_an8d10.webp"],
        selectedSize:0,
        quantity:1,
      
    },
    {
        id:3,
        name: "air 3 jordar",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        desctwo:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        subtitle:"Men's Shoes",
        price:20000,
        discount:20,
        discountedPrice:16000,
        size:[6,7,8,9,10,6.5,7.5],
        disabledSize:[11,12,14],
        catagory:"Jordan",
        Image:productOne,
        allImages:[p1,p2,p3,p4,p5,p6,p7]
        ,selectedSize:''
    },
    {
        id:4,
        name: "air4 jordar",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        desctwo:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        subtitle:"Men's Shoes",
        price:20000,
        discount:20,
        discountedPrice:16000,
        size:[6,7,8,9,10,6.5,7.5],
        disabledSize:[11,12,14],
        catagory:"Jordan",
        Image:productOne,
        allImages:[p1,p2,p3,p4,p5,p6,p7]
        ,selectedSize:''
    },
    {
        id:5,
        name: "air5 jordar",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        desctwo:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        subtitle:"Men's Shoes",
        price:20000,
        discount:20,
        discountedPrice:16000,
        size:[6,7,8,9,10,6.5,7.5],
        disabledSize:[11,12,14],
        catagory:"Jordan",
        Image:productOne,
        allImages:[p1,p2,p3,p4,p5,p6,p7]
        ,selectedSize:''
    },
    {
        id:6,
        name: "air 6jordar",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        desctwo:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        subtitle:"Men's Shoes",
        price:20000,
        discount:20,
        discountedPrice:16000,
        size:[6,7,8,9,10,6.5,7.5],
        disabledSize:[11,12,14],
        catagory:"Jordan",
        Image:productOne,
        allImages:[p1,p2,p3,p4,p5,p6,p7]
        ,selectedSize:''
    },
    {
        id:7,
        name: "air 7jordar",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        desctwo:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        subtitle:"Men's Shoes",
        price:20000,
        discount:20,
        discountedPrice:16000,
        size:[6,7,8,9,10,6.5,7.5],
        disabledSize:[11,12,14],
        catagory:"Jordan",
        Image:productOne,
        allImages:[p1,p2,p3,p4,p5,p6,p7]
        ,selectedSize:''
    },
    {
        id:8,
        name: "air 8jordar",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        desctwo:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        subtitle:"Men's Shoes",
        price:20000,
        discount:20,
        discountedPrice:16000,
        size:[6,7,8,9,10,6.5,7.5],
        disabledSize:[11,12,14],
        catagory:"Jordan",
        Image:productOne,
        allImages:[p1,p2,p3,p4,p5,p6,p7]
        ,selectedSize:''
    },
    {
        id:9,
        name: "air 9jordar",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        desctwo:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        subtitle:"Men's Shoes",
        price:20000,
        discount:20,
        discountedPrice:16000,
        size:[6,7,8,9,10,6.5,7.5],
        disabledSize:[11,12,14],
        catagory:"Jordan",
        Image:productOne,
        allImages:[p1,p2,p3,p4,p5,p6,p7]
        ,selectedSize:''
    },
    {
        id:10,
        name: "air 10jordar",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        desctwo:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        subtitle:"Men's Shoes",
        price:20000,
        discount:20,
        discountedPrice:16000,
        size:[6,7,8,9,10,6.5,7.5],
        disabledSize:[11,12,14],
        catagory:"Jordan",
        Image:productOne,
        allImages:[p1,p2,p3,p4,p5,p6,p7]
        ,selectedSize:''
    },
    {
        id:11,
        name: "air 11jordar",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        desctwo:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum explicabo libero nisi totam excepturi in assumenda recusandae nemo. Rerum tenetur molestias ab velit dicta dignissimos ratione, labore, itaque magnam, cumque fugit. Tempore possimus nesciunt aliquam incidunt veniam laborum quo ratione quas, fugit dolorum? Illum, voluptatum doloribus? Vitae est ad laudantium.",
        subtitle:"Men's Shoes",
        price:20000,
        discount:20,
        discountedPrice:16000,
        size:[6,7,8,9,10,6.5,7.5],
        disabledSize:[11,12,14],
        catagory:"Jordan",
        Image:productOne,
        allImages:[p1,p2,p3,p4,p5,p6,p7]
        ,selectedSize:''
    }
]
export default Fakedata;


