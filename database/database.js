const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/Yumly', {useNewUrlParser: true}, (err) => {
    if(err){
        console.log('error connecting to mongodb');
    } else {
        console.log("successful connection to mongodb");
    }
});

module.exports = mongoose;