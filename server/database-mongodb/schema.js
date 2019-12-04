const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = require('./database.js')

let reviewSchema = new mongoose.Schema({
  product_id: Number,
  overall_rating: Number,
  reviews: Array
});

let Reviews = mongoose.model('Reviews', reviewSchema);


module.exports = Reviews;