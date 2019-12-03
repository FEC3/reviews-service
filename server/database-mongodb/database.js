const mongoose = require('mongoose');
const mongoUri = 'mongodb://127.0.0.1/reviews';
mongoose.Promise = global.Promise;

mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true}); //set up for connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error：'));

let reviewSchema = mongoose.Schema({
  product_id: Number,
  date: { type: Date, default: Date.now },
  author: String,
  title: String,
  body: String,
  recommend: Boolean,

  overall_rating : { type: Number, min: 1, max: 5 },
  value_rating: {type: Number, min: 1, max: 5},
  quality_rating: {type: Number, min: 1, max: 5},
  appearance_rating: {type: Number, min: 1, max: 5},
  works_as_expected_rating: {type: Number, min: 1, max: 5},

  helpful_count: Number,
  not_helful_count: Number
});

let Review = mongoose.model('Review', reviewSchema);


module.exports = reviewSchema;