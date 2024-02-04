const model = require("../Model/product");

const product = model.product;
exports.product =async (req, res) => {
  try {
    const productdata =await product.find();
   
    res.status(200).json(productdata);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.createProduct =async (req, res) => {
  try {
     const productdata = new product(req.body);
     const data=await productdata.save();
    res.status(201).json(data)
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    const productId=req.params.id
    const data=await product.findByIdAndDelete(productId)
    console.log(data)
    res.status(200).json(data)
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};


exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const data = await product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });

    res.status(200).json(data);
  } catch (error) {

    res.status(400).json(error);
  }
};