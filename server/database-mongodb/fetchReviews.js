const Reviews = require('./schema.js')

let fetchReviews = (_id) => {
  return new Promise((resolve, reject)=>{
    Reviews.findById(_id, (err, result)=>{
      if(err){
        console.log(err);
        reject(err)
      }else{
        resolve(result)
      }
    })
  })
}

module.exports.fetchReviews = fetchReviews