const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config()
app.use(express.json());
app.use(require('./routes/auth'))
app.use(require('./routes/contactPage'))
const middleware = (req, res, next) => {
    console.log("middleware");
}
middleware();
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


app.listen(PORT, () => {
    console.log("server is running port No " + PORT)
})