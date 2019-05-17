// libraries
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('../database/database');
// console.log(mongoose.model);
// const MyModel = mongoose.model('Yumly');
// console.log(MyModel);


// middleware

// routes

app.get('/restuarant', (req, res) => {
    mongoose.model.find({name: "Chad"});
    res.send('Hello World!');
    });

// listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`))