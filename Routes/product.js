const express = require("express");
const router = express.Router();
const product = require("../Controller/product");

router.get("/", product.product);
router.post("/", product.createProduct);
router.delete("/:id", product.deleteProduct);
router.patch("/:id", product.updateProduct);

exports.router = router;
