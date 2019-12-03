var faker = require('faker');
var db = require('./database.js')
var Reviews = require('./schema.js')
const PRODUCT_AMOUNT = 100;

let sampleReviews = [];
// let seed = () => {

for(var i = 1; i <= PRODUCT_AMOUNT; i++){
  let fakeReview = new Reviews({
    product_id: i,
    date: faker.date.recent(),
    author: faker.name.findName(),
    title: faker.random.words(),
    body: faker.lorem.paragraph(),
    recommend: faker.random.boolean(),
    overall_rating : Math.floor(Math.random() * 5) + 1,
    value_rating:Math.floor(Math.random() * 5) + 1,
    quality_rating:Math.floor(Math.random() * 5) + 1,
    appearance_rating: Math.floor(Math.random() * 5) + 1,
    expected_rating: Math.floor(Math.random() * 5) + 1,
    helpful_count: Math.floor(Math.random() * 30),
    not_helful_count:Math.floor(Math.random() * 30)
  });
  sampleReviews.push(fakeReview)

}

// }

const insertSampleReviews = () => {
  Reviews.create(sampleReviews)
    .then(() => db.disconnect());
};

insertSampleReviews();