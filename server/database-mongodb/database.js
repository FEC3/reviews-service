const mongoose = require('mongoose');
const mongoUri = 'mongodb://127.0.0.1/reviews';
mongoose.Promise = global.Promise;

mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true}); //set up for connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error：'));

let reviewSchema = mongoose.Schema({ })

let Review = mongoose.model('Review', reviewSchema);


module.exports = db;