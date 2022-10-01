// Basic Lib Import
const express =require('express');
const router =require('./src/routes/api');
const app= new express();
const bodyParser =require('body-parser');

// Security Middleware Lib Import
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');

// Database Lib Import
const mongoose =require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

// Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));



// Body Parser Implement
app.use(bodyParser.json())

// Request Rate Limit
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

// Mongo DB Database Connection
const uri = "mongodb+srv://taskuser107:<password>@cluster0.inmnzge.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
let OPTION={user:'taskuser107',pass:'TAHQhta2Y6M@Aae',autoIndex:true}
mongoose.connect(uri,OPTION,(error)=>{
    console.log("Connection Success")
    console.log(error)
})



// Routing Implement
app.use("/api/v1",router)

// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})


module.exports=app;




//my code
// const express = require("express");
// const router = require("./src/routes/api");
// const app = new express();
// const bodyParser = require("body-parser");

// // Security Middleware Lib Import
// const rateLimit = require("express-rate-limit");
// const helmet = require("helmet");
// const mongoSanitize = require("express-mongo-sanitize");
// const xss = require("xss-clean");
// const hpp = require("hpp");
// const cors = require("cors");

// // Database Lib Import
// const mongoose = require("mongoose");

// // Security Middleware Implement
// app.use(cors());
// app.use(helmet());
// app.use(mongoSanitize());
// app.use(xss());
// app.use(hpp());

// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb" }));

// // Body Parser Implement
// app.use(bodyParser.json());

// // Request Rate Limit
// const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
// app.use(limiter);

// // const uri =
// //   "mongodb+srv://<user>:<pass>@cluster0.1u7kw.mongodb.net/?retryWrites=true&w=majority";
// // const client = new MongoClient(uri, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// //   serverApi: ServerApiVersion.v1,
// // });

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// let OPTION={user:'taskuser107',pass:'TAHQhta2Y6M@Aae',autoIndex:true}
// mongoose.connect(URI,OPTION,(error)=>{
//     console.log("Connection Success")
//     console.log(error)
// })

// // let OPTION = {
// //   user: "taskuser107",
// //   pass: "TAHQhta2Y6M@Aae",
// //   autoIndex: true,
// // };

// mongoose.connect(URI, OPTION, (error) => {
//   console.log("Connection Success");
//   console.log(error);
// });

// // Routing Implement
// app.use("/api/v1", router);

// // Undefined Route Implement
// app.use("*", (req, res) => {
//   res.status(404).json({ status: "fail", data: "Not Found" });
// });

// module.exports = app;
