const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1/reviews', {useNewUrlParser: true, useUnifiedTopology: true})
.catch(error => handleError(error));
const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error：'));

// db.on('connected', ()=>{
//   console.log("DB connection good")
// });


module.exports = db;