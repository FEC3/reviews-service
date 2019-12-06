const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


let reviewSchema = new mongoose.Schema({
  product_id: Number,
  reviews: Array
});

let Reviews = mongoose.model('Reviews', reviewSchema);


module.exports = Reviews;