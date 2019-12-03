const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let reviewSchema = mongoose.Schema({
  product_id: Number,
  date: { type: Date, default: Date.now },
  author: String,
  title: String,
  body: String,
  recommend: Boolean,
  overall_rating : Number,
  value_rating: Number,
  quality_rating: Number,
  appearance_rating: Number,
  expected_rating: Number,
  helpful_count: Number,
  not_helful_count: Number
});

let Reviews = mongoose.model('Reviews', reviewSchema);


module.exports = Reviews;