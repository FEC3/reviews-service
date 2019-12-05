import React from 'react';
var moment = require('moment');
import { GoStar } from 'react-icons/go';

const style = {
  star: {
    color: 'grey'
  },
  star_filled: {
    color: 'yellow'
  }
}

class ReviewListEntry extends React.Component {
  constructor(props){
    super(props);
  }



  ifRecommend(recommend){
    if(recommend==='false'){
      return 'No, I do not recommend this product';
    }else{
      return 'Yes, I recommend this product'
    }
  }

  ratingStars (num){
    console.log("come to stars?")
    var stars = [];

    for(var i = 1; i <= 5; i++){
      if(i < num){

        stars.push(<GoStar style={style.star_filled}/>);
      }else {
        stars.push(<GoStar style={style.star}/>);
      }
    }

    return stars;
  };

  render(){
    return (
      <div className='review-author'>
        <div className='review-author-date'>
        <div className = 'star_rating'>
        {this.ratingStars(this.props.review.overall_rating).map((star,i)=>(
          <span key={`star-${i}`}>{star}</span>
        ))}
                 <span>{this.props.review.author}</span>
          <span>{moment(this.props.review.date).fromNow()}</span>
      </div>

        </div>
        <div>
        {this.props.review.body}
        </div>
        <div>
          {this.ifRecommend(this.props.review.recommend)}
        </div>

      </div>
    )
  }
}

export default ReviewListEntry;