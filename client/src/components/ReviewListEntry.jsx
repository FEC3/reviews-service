import React from 'react';
var moment = require('moment');
import { GoStar } from 'react-icons/go';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const Review = styled.div`
  display:flex;
  flex-direction:row;
`


const TitleStyle = styled.div`
  font-size: 14px;
  color: #333333;
  height: 18px;
  width: 1064.810;
`

const ContextStyle = styled.div`
  font-size: 11px;
  color: #333333;
  width: 739.359px;
  height: 57px;
`
const AuthorStyle = styled.div`
font-size: 11px;
color: rgb(51,51,51);
font-weight: 400;
line-height: 18px;
`

const DateStyle = styled.div`
  font-size: 11px;
  color: #999999
`
const NoGold = styled.div`
  height: 4px;
  width: 44px;
  border: 0.5px solid rgb(175, 175, 175)
`

const Gold = styled.div `
  background: #fc0;
  height: 4px;
  width: 44px;
  border: 0.5px solid rgb(175, 175, 175)
`

const Bar = styled.div`
  font-size:11px;
  height: 14px;
  left: auto;
  width: 282.719px;
  height: 176px;
  margin-left: 10px;
  margin-right: 0px;
  padding: 10px;
  position: static;
`

const ButtonStyle = styled.div`
  background-color: rgb(237, 237, 237)
`

const FilledStar = styled(GoStar)`
  color :#FFCC00;
  font-size: 1em;
`

const NoFilledStar = styled(GoStar)`
  color: #EEEEEE;
  font-size: 1em;
`


// const NoGold

class ReviewListEntry extends React.Component {
  constructor(props){
    super(props);
  }



  ifRecommend(recommend){
    if(recommend===0){
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
        stars.push(<FilledStar/>);
      }else {
        stars.push(<NoFilledStar/>);
      }
    }
    return stars;
  };

  ifBar(num, rating){
    if(num > Number(rating)){
      return <NoGold />
    }else{
      return <Gold />
    }
  }

  render(){
    return (
      <div>
      <hr style={{ border: '1px dotted', borderstyle: 'none none dotted', color: 'rgb(225,225,225' }} />
      <Review>

        <div className='left-single-review'>
            <div className = 'star_rating'>
              {this.ratingStars(this.props.review.overall_rating).map((star,i)=>(
                <span key={`star-${i}`}>{star}</span>
              ))}
            </div>
            <div className = 'author_rating'>
              <AuthorStyle>{this.props.review.author}</AuthorStyle>
            </div>


              <DateStyle>
                {moment(this.props.review.date).fromNow()}
              </DateStyle>

                <TitleStyle>
                  {this.props.review.title}
                </TitleStyle>

                <ContextStyle>
                  {this.props.review.body}
                </ContextStyle>



                {this.ifRecommend(this.props.review.recommend)}
                <div>
                  {/** Setting up for the buttons */}
                  Helpful? {'   '}
                  <>
                    <style type="text/css">
                      {`
                      .btn-flat {
                        background-color: rgb(237, 237, 237);
                      }

                      .btn-xxs {
                        padding: 0.2rem 0.5rem;
                        font-size: 0.5rem;
                      }
                      `}
                    </style>

                    <Button variant="flat" size="xxs">
                    Yes {this.props.review.helpful_count}
                    </Button>{' '}
                    <Button variant="flat" size="xxs">No {this.props.review.helpful_count}</Button>{' '}
                    <Button variant="flat" size="xxs">Report</Button>
                  </>
                  </div>

          </div>

          <div className ="right-single-review">
          <Bar>
        <div>Value for money</div>

        <table className="value_for_money">
          <tbody>
            <tr>
              <td >{this.ifBar(1, this.props.review.value_rating)}</td>
              <td >{this.ifBar(2, this.props.review.value_rating)}</td>
              <td >{this.ifBar(3, this.props.review.value_rating)}</td>
              <td >{this.ifBar(4, this.props.review.value_rating)}</td>
              <td >{this.ifBar(5, this.props.review.value_rating)}</td>
            </tr>
          </tbody>
        </table>

        <div>Product quality</div>


        <table className="product_quality">
          <tbody>
            <tr>
              <td >{this.ifBar(1, this.props.review.quality_rating)}</td>
              <td >{this.ifBar(2, this.props.review.quality_rating)}</td>
              <td >{this.ifBar(3, this.props.review.quality_rating)}</td>
              <td >{this.ifBar(4, this.props.review.quality_rating)}</td>
              <td >{this.ifBar(5, this.props.review.quality_rating)}</td>
            </tr>
          </tbody>
        </table>

        <div>Appearance</div>


        <table className="appearance">
          <tbody>
            <tr>
              <td >{this.ifBar(1, this.props.review.apperance_rating)}</td>
              <td >{this.ifBar(2, this.props.review.apperance_rating)}</td>
              <td >{this.ifBar(3, this.props.review.apperance_rating)}</td>
              <td >{this.ifBar(4, this.props.review.apperance_rating)}</td>
              <td >{this.ifBar(5, this.props.review.apperance_rating)}</td>
            </tr>
          </tbody>
        </table>

        <div>Works as expected</div>


        <table className="work_as_expected">
          <tbody>
            <tr>
              <td >{this.ifBar(1, this.props.review.expected_rating)}</td>
              <td >{this.ifBar(2, this.props.review.expected_rating)}</td>
              <td >{this.ifBar(3, this.props.review.expected_rating)}</td>
              <td >{this.ifBar(4, this.props.review.expected_rating)}</td>
              <td >{this.ifBar(5, this.props.review.expected_rating)}</td>
            </tr>
          </tbody>
        </table>
        </Bar>

          </div>

      </Review>
      </div>
    )
  }
}

export default ReviewListEntry;


