module.exports = {
    MongoURI: "mongodb+srv://anjugupta9213:Dg1612991985%40@cluster0.a104kkq.mongodb.net/?retryWrites=true&w=majority"
}

// // mongodb://127.0.0.1:27017/codeial

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Nodejs-Auth');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

db.once('open',function(){
    console.log("Connected to Database :: MongoDB");
});

module.exports = db;