const mongoose = require("mongoose");
require("dotenv").config();

async function main() {
  await mongoose.connect(process.env.DB_PATH);
  console.log("database is connected");
}
main().catch((err) => console.log(err));