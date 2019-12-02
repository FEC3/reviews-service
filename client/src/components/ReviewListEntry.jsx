import React from 'react';
const ReviewListEntry = (props) => {
  return (
    <div>
      <h1>{props.review.title}</h1>
      {props.review.body}
      {props.review.recommend}
      {props.review.helpful_count}
    </div>
  )
}

export default ReviewListEntry;