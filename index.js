const express = require("express");
const app = express();
const router = express.Router();
// const bodyParser = require("body-parser");

require('./config/db')
require("dotenv").config();


// app.use(bodyParser)
app.use(express.json());
app.get('/',(req,res)=>res.json('Server is running successfully'))


//routes imports
const productrouter = require("./Routes/product");
const Userrouter = require("./Routes/auth");


//All Routes
app.use("/api/v1/product", productrouter.router);
app.use("/api/v1/auth", Userrouter.router);


const PORT=process.env.PORT
app.listen(PORT, () => {
  console.log(`server is listening ${PORT}`);
});
