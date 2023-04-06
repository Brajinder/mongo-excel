const mongoose = require("mongoose");

// try to add "try and catch"
mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        console.log('Mongoose connected');
    }).catch((err) => {
        console.log(err, "***Mongoose not connected***");
    });
