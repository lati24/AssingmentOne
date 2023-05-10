const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/Count")
    .then(() => {console.log("Database connected")})
    .catch((err) => {
        console.log("Database connection failed")
        console.log(err)
    })


















