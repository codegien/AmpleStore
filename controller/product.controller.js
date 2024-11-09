const { json } = require("body-parser");
const products = require("../data/products");

const createProduct = async (req, res) => {
	try {
		const newArrival = req.body;
		const newProducts = [...products, newArrival];
		return res.status(201).json(newProducts);
	} catch (e) {
		console.log(e);
	}
};

const getProducts = async (req, res) => {
	return res.status(200).json({
		success: true,
		data: products.reverse(),
	});
};

const getProductById = async (req, res) => {
	const { id } = req.params;
	const product = products.find((item) => item.id === id);
	return res.status(200).json({ success: true, data: product });
};

module.exports = { createProduct, getProducts, getProductById };
