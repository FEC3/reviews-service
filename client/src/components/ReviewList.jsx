import React from 'react';
import styled from 'styled-components';
import ReviewListEntry from './ReviewListEntry.jsx'
// import RatingStars from './RatingStars.jsx'

const OneReviewStyle = styled.div`
  font-family: 'Verdana, sans-serif';
`

const ReviewList = (props) => {
  console.log("what is props in reviewlist?",props.product.reviews)
  // let reviews = props.product.reviews;
  return (
    <div>
      this is the rating
      {/* {props.product.overall_rating} */}

      <h3>HERE are the reviews</h3>
      <OneReviewStyle>
      {props.product.reviews.map(review=>(

        <ReviewListEntry review = {review} key = {review.author} />
      ))}
      </OneReviewStyle>
    </div>

  )
}

export default ReviewList;