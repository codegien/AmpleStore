const express = require("express");

const router = express.Router();

const {
	createProduct,
	getProducts,
	getProductById,
} = require("../controller/product.controller");

router.post("/create", createProduct);
router.get("/get", getProducts);
router.get("/get/:id", getProductById);
module.exports = router;
