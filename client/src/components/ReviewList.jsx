import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx'
const ReviewList = (props) => {
  return (
    <div className='review-list'>
      <ul>
        <li className = 'review-list-item'>
        {props.reviews.map(review=>(
          <ReviewListEntry review={review} key = {review._id}/>
        ))}
        </li>
      </ul>

    </div>
  )
}

export default ReviewList;