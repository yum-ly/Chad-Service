// libraries
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const restaurantData = require('../database/database');
// console.log(restaurantData);
// // middleware
    app.use(express.static(path.join(__dirname, './dist')));

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json())
 
// routes
app.get('/', (req, res) => {
    res.send('Hey! Cramer')
  })

app.get('/restaurants', (req, res) => {
    restaurantData.find({foodScore: 4}, function (err, docs) {
        if(err){
            console.log('error get request', err);
            res.end();
        } else {
            console.log('successful get:', docs);
            res.send(docs);
        }
      });
    });

// listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`))