// libraries
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const restaurantData = require('../database/database');
const path = require('path');

// console.log(restaurantData);
// // middleware
    app.use('/', express.static('dist'));

    // app.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    //   });

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json())
 
// routes
app.get('/', (req, res) => {
    const temp = path.join(__dirname, 'dist');
    console.log('TEMP VARIABLE ', temp);
    res.send(temp);
  })

app.get('/images', (req, res) => {
    restaurantData.find({}, (err, items) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            let randomRestaurants = [];
            for(let i = 0; i < 6; i++){
                let myUUID = Math.ceil(Math.random() * 100);
                randomRestaurants.push(items.splice(myUUID, 1)[0]);
            }
            let results = randomRestaurants.map((obj) => obj.images)
            res.send(results);
        }
    })
});

app.get('/name', (req, res) => {
    restaurantData.find({}, (err, items) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            let randomRestaurants = [];
            for(let i = 0; i < 6; i++){
                let myUUID = Math.ceil(Math.random() * 100);
                randomRestaurants.push(items.splice(myUUID, 1)[0]);
            }
            let results = randomRestaurants.map((obj) => obj.name)
            res.send(results);
        }
    })
});

app.get('/bld', (req, res) => {
    restaurantData.find({}, (err, items) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            let randomRestaurants = [];
            for(let i = 0; i < 6; i++){
                let myUUID = Math.ceil(Math.random() * 100);
                randomRestaurants.push(items.splice(myUUID, 1)[0]);
            }
            let results = randomRestaurants.map((obj) => obj.bld)
            res.send(results);
        }
    })
});

app.get('/address', (req, res) => {
    restaurantData.find({}, (err, items) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            let randomRestaurants = [];
            for(let i = 0; i < 6; i++){
                let myUUID = Math.ceil(Math.random() * 100);
                randomRestaurants.push(items.splice(myUUID, 1)[0]);
            }
            let results = randomRestaurants.map((obj) => obj.address)
            res.send(results);
        }
 })

app.get('/foodScore', (req, res) => {
    restaurantData.find({}, (err, items) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            let randomRestaurants = [];
            for(let i = 0; i < 6; i++){
                let myUUID = Math.ceil(Math.random() * 100);
                randomRestaurants.push(items.splice(myUUID, 1)[0]);
            }
            let results = randomRestaurants.map((obj) => obj.foodScore)
            res.send(results);
        }
    })
});
});

// listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`))