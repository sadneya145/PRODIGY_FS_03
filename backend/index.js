const port=4000;
const express=require('express')
const app =express()
const mongoose =require("mongoose")
const jwt =require("jsonwebtoken")
const multer = require("multer")
const path =require("path")
const cors =require("cors");
const { error } = require('console');
const { type } = require('os');

app.use(express.json())
app.use(cors())

//database connection to mongoDB
mongoose.connect("mongodb+srv://sadneyasam:root@cluster0.xjw2f3j.mongodb.net/e-commerce")

//api creation
app.get("/",(req,res)=>{
    res.send("Express App is runnig")
})

//image storage engine

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
      cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
});

//schema creating for user model

const Users = mongoose.model('Users',{
  name:{
    type:String,
  },
  email:{
    type:String,
    unique:true,
  },
  password:{
    type:String,
  },
  cartData:{
    type:Object,
  },
  date:{
    type:Date,
    default:Date.now,
  }
})

//creating endpoint for registering the user
app.post('/signup',async(req,res)=>{

  let check = await Users.findOne({email:req.body.email});
  if(check){
    return res.status(400).json({succes:false,errors:"existing user with same email address"})
  }
  let cart ={};
  for(let i=0;i<300;i++){
    cart[i]=0;
  }
  const user =new Users({
    name:req.body.username,
    email:req.body.email,
    password:req.body.password,
    cartData:cart,
  })

  await user.save();

  const data ={
    user:{
      id:user.id
    }
  }

  const token = jwt.sign(data,'secret-ecom')
  res.json({succes:true,token})
})

//crating endpoint for user login
app.post('/login',async(req,res)=>{
  let user =await Users.findOne({email:req.body.email});
  if(user){
    const passCompare = req.body.password === user.password;
    if(passCompare){
      const data={
      user:{
        id:user.id
      }
    }
    const token = jwt.sign(data,'secret_ecom');
    res.json({succes:true,token});
    }
    else{
      res.json({succes:false,errors:"wrong password"})
    }
  }
  else{
    res.json({succes:false,errors:"wrong Email Id"})
  }
})

const upload =multer({storage:storage})

//creating upload endpoint for images
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

// Schema for creating products
const Product= mongoose.model("product",{
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    new_price: {
      type: Number,
      required: true,
    },
    old_price: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    available: {
      type: Boolean,
      default: true,
    },
  });
  
  
  app.post('/addproduct', async (req, res) => {
    const product = new Product({
      id:req.body.id,
      name:req.body.name,
      image:req.body.image,
      category:req.body.category,
      old_price:req.body.old_price,
      new_price:req.body.new_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
      succes:true,
      name:req.body.name,
    })
  });

//craeting API for deleting products

app.post('/removeproduct', async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

//creating API for getting alll products
app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

app.get('/newcollection',async(req,res)=>{
  let products = await Product.find({});
  let newcollection =products.slice(1).slice(-8);
  console.log("Newcollection Fetched Successfully!")
  res.send(newcollection);
})

app.get('/popularwomen',async (req,res)=>{
  let products = await Product.find({category:"women"});
  let popular_in_women =products.slice(0,4);
  console.log("Popular in women fetched successfully!")
  res.send(popular_in_women)
})

// fetch user
const fetchuser =async(req,res,next)=>{
  const token =req.header('auth-token');
  if(!token){
    res.status(401).send({errors:"Please authenticate"})
  }
  else{
    try{
      const data =jwt.verify(token,'secret_ecom')
      req.user =data.user;
      next()
    }catch(error){
      req.status(401).send({errors:"please authenticate"})
    }
  }
}
//add products
app.post('/addtocart',fetchuser,async(req,res)=>{
  // console.log(req.body);
  console.log("added");
  let userData =await Users.findOne({_id:req.user.id});
  userData.cartData[req.body.itemId]+=1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
  res.send("Added")
})


//remove product
app.post('/removefromcart',fetchuser,async(req,res)=>{
  console.log("removed");
  let userData =await Users.findOne({_id:req.user.id});
  if(userData.cartData[req.body.itemId]>0){
  userData.cartData[req.body.itemId]-=1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
 
  }
})

app.post('/getcart',fetchuser,async(req,res)=>{
 console.log("Getcart");
 let userData= await Users.findOne({_id:req.user.id})
 res.json(userData.cartData)
})
app.listen(port,(error)=>{
    if(!error){
        console.log("Server running on port "+port)
    }
    else{
        console.log("Error: "+error)
    }
})