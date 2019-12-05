import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx'
// import RatingStars from './RatingStars.jsx'
const ReviewList = (props) => {
  console.log("what is props in reviewlist?",props.product.reviews)
  // let reviews = props.product.reviews;
  return (
    <div>
      this is the rating
      {/* {props.product.overall_rating} */}

      <h3>HERE are the reviews</h3>
      {props.product.reviews.map(review=>(

        <ReviewListEntry review = {review} key = {review.author} />
      ))}
    </div>

  )
}

export default ReviewList;