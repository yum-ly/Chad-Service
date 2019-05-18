const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs = require('fs');

mongoose.connect('mongodb://localhost/Yumly', {useNewUrlParser: true}, (err) => {
    if(err){
        console.log('error connecting to mongodb');
    } else {
        console.log("successful connection to mongodb");
    }
});

const schema = mongoose.Schema({
    uuid: Number,
    name: String,
    address: String,
    pricing: Number,
    foodScore: Number,
    images: Array
});

const restaurantData = mongoose.model('restaurants', schema);

const seed = () => {fs.readFile('../data.json', (err, data) => {
        let parsedata = JSON.parse(data);
        parsedata.map(e => {
            const newRestaurant = new restaurantData(e)
            newRestaurant.save()
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
        })
    }
)}


module.exports = restaurantData;