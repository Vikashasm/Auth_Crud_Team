const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const dotenv=require("dotenv").config();

async function main() {
  await mongoose.connect(process.env.DB_PATH);
  console.log("database is connected");
}
main().catch((err) => console.log(err));

app.use(express.json());
const productrouter = require("./Routes/product");


app.get('/',(req,res)=>res.json('Server is running successfully')
)

app.use("/api/v1/product", productrouter.router);


const PORT=process.env.PORT
app.listen(PORT, () => {
  console.log(`server is listening ${PORT}`);
});
