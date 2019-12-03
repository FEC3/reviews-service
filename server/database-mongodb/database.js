const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/reviews';
mongoose.Promise = global.Promise;

mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
.catch(error => handleError(error)); //set up for connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error：'));

db.on('connected', ()=>{
  console.log("DB connection good")
});


module.exports = db;