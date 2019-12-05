var faker = require('faker');
var db = require('./database.js')
var Reviews = require('./schema.js')
const PRODUCT_AMOUNT = 100;
const PRODUCT_REVIEWS_AMOUNT = 6;
let fakeReviewsList = [];

for(var i = 0; i <PRODUCT_REVIEWS_AMOUNT;i++){
  var reviewsdata = {
    overall_rating : Math.floor(Math.random() * 5) + 1,
    date: faker.date.between("2019-01-01", "2019-11-30"),
    author: faker.name.findName(),
    title: faker.random.words(),
    body: faker.lorem.paragraph(),
    recommend: faker.random.boolean(),
    value_rating:Math.floor(Math.random() * 5) + 1,
    quality_rating:Math.floor(Math.random() * 5) + 1,
    appearance_rating: Math.floor(Math.random() * 5) + 1,
    expected_rating: Math.floor(Math.random() * 5) + 1,
    helpful_count: Math.floor(Math.random() * 30),
    not_helful_count:Math.floor(Math.random() * 30)
  }
  fakeReviewsList.push(reviewsdata)
}




let sampleReviews = [];

for(var i = 1; i <= PRODUCT_AMOUNT; i++){
  let fakeReview = new Reviews({
    product_id: i,
    reviews: fakeReviewsList
  });
  sampleReviews.push(fakeReview)
}

console.log("this is result: ",sampleReviews)


const insertSampleReviews = () => {
  Reviews.create(sampleReviews)
};

insertSampleReviews();