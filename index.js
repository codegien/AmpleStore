const express = require("express");
const cors = require("cors");
const products = require("./data/products");

const product = require("./routes/products.routes");

const app = express();

app.use(express.json());
app.use(cors());

//routes that handles product relate eP
app.use("/api/products", product);

app.get("/", (req, res) => {
	res.send("You are welcome!");
});

app.get("/api/products");
app.post("/api/products");

const PORT = 8000;

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}....`);
});
