const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


let reviewSchema = new mongoose.Schema({
  product_id: Number,
  five_star:Number,
  four_star:Number,
  three_star:Number,
  two_star: Number,
  one_star:Number,
  avg_overall_total: Number,
  avg_value_rating: Number,
  avg_quality_rating:Number,
  avg_apperance_rating: Number,
  avg_expected_rating: Number,
  reviews: Array
});

let Reviews = mongoose.model('Reviews', reviewSchema);


module.exports = Reviews;