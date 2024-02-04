const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true }, // String is shorthand for {type: String}

  date: { type: Date, default: Date.now },
  roll: Number,
});

exports.product = mongoose.model("Product", productSchema);
