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


app.listen(3000, () => {
    console.log("server is running port No 3000")
})