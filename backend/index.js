const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config()
app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/contactPage'));
const data = require('./data/product.json');

const PORT = 5000;

mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    },
    (err) => {
        if (err) throw err;
        console.log("MongoDB connection established");
    }
);

// API for the Products Page
app.get("/api/products", (req, res) => {
    // console.log(data);
    res.send(data);
})

// API for the Products Page for specific id or product
app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.find(x => x.id === productId);
    if (product)
        res.send(product);
    else
        res.status(404).send({ msg: "Product Not Found. " })
})

app.listen(PORT, () => {
    console.log("server is running port No " + PORT)
})