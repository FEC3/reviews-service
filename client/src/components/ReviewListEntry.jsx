import React from 'react';
var moment = require('moment');
class ReviewListEntry extends React.Component{
  constructor(props){
    super(props);
  }
  ifrecommend(recommend){
    if(recommend === 1){
      return "Yes, I recommend this product.";
    }else{
      return "No, I do not recommend this product.";
    }
  }
  render(){
    return (
      <div>
        <div>
        <span>{this.props.review.author}</span>

        <span>{moment(this.props.review.createdAt).fromNow()}</span>
        </div>
        <div>
          {this.props.review.title}
          <p>{this.props.review.body}</p>
          <div>{this.ifrecommend(this.props.review.recommend)}</div>
          Helpful? {this.props.review.helpful_count}
        </div>
      </div>
    )
    }

}

export default ReviewListEntry;