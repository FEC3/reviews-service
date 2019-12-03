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

let reviewSchema = mongoose.Schema({
  product_id: Number,
  date: { type: Date, default: Date.now },
  author: String,
  title: String,
  body: String,
  recommend: Boolean,

  helpful_count: Number,
  not_helful_count: Number
});

let Review = mongoose.model('Review', reviewSchema);


module.exports = Review;
module.exports = db;