import React from 'react'
import ReviewList from './ReviewList.jsx';


let ReviewsDisplay = (props) => {
  return (
    <div id = 'review-display'>
      <ReviewList product = {props.product}/>
    </div>
  )
}

export default ReviewsDisplay;