import React from 'react';
var moment = require('moment');
import { GoStar } from 'react-icons/go';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const Review = styled.div`
  display:flex;
  flex-direction:row;
`
const Header = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 24px;
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
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1px;
  margin:5px;
`

const DateStyle = styled.div`
  font-size: 11px;
  color: #999999;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
`
const NoGold = styled.div`
  height: 8px;
  width: 50px;
  border: 0.5px solid rgb(205, 205, 205);
  border-collapse: collapse;
`

const Gold = styled.div`
  background: #fc0;
  height: 8px;
  width: 50px;
  border: 0.2px solid rgb(205, 205, 205);
`

const Bar = styled.td`
  border-collapse: collapse;
`


const BarStyle = styled.div`
  font-size: 11px;
`

const RecommendStyle = styled.div`
  font-weight: 700;
  font-size: 11px;
`

const FilledStar = styled(GoStar)`
  color :#FFCC00;
  font-size: 1em;
`

const NoFilledStar = styled(GoStar)`
  color: #EEEEEE;
  font-size: 1em;
`


class ReviewListEntry extends React.Component {
  constructor(props){
    super(props);
    this.state = {count:this.props.review.helpful_count, nocount: this.props.review.not_helpful_count};
    this.clickBtn = this.clickBtn.bind(this);
    this.clickNoBtn = this.clickNoBtn.bind(this);
  }
  clickBtn(){
    this.setState({
        count: this.state.count + 1,
    });
  }

  clickNoBtn(){
    this.setState({
        nocount: this.state.nocount+1
    });
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
      return <NoGold className='nogold'/>
    }else{
      return <Gold className='gold'/>
    }
  }

  render(){
    return (
      <div id='review-list-entry'>
      <hr style={{ border: '1px dotted', borderstyle: 'none none dotted', color: 'rgb(225,225,225' }} />
      <Review>

        <div className='left-single-review'>
            <Header>
              <div className = 'rating-stars'>
              {this.ratingStars(this.props.review.overall_rating).map((star,i)=>(
                <span key={`star-${i}`}>{star}</span>
              ))}
              </div>

              <div>
              <AuthorStyle>{this.props.review.author}</AuthorStyle>{'   '}
              </div>
              <div>
              <DateStyle>
                {moment(this.props.review.date).fromNow()}
              </DateStyle>
              </div>
            </Header>
                <TitleStyle>
                  {this.props.review.title}
                </TitleStyle>

                <ContextStyle>
                  {this.props.review.body}
                </ContextStyle>


                <BarStyle>{this.ifRecommend(this.props.review.recommend)}</BarStyle>

                <div>
                  {/** Setting up for the buttons */}
                  <BarStyle>
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
                        font-weight: 700;
                      }
                      `}
                    </style>


            <Button variant="flat" size="xxs" onClick={this.clickBtn}>
            Yes {this.state.count}
            </Button>

            {'   '}

                    <Button variant="flat" size="xxs" onClick={this.clickNoBtn}>
            No {this.state.nocount}
            </Button>{'   '}
                    {/* <Button variant="flat" size="xxs">No {this.props.review.not_helpful_count}</Button>{' '} */}
                    <Button variant="flat" size="xxs">Report</Button>
                  </>
                  </BarStyle>
                  </div>

          </div>

          <div className ="right-single-review">
              <BarStyle>Value for money</BarStyle>
                    <Bar>{this.ifBar(1, this.props.review.value_rating)}</Bar>
                    <Bar>{this.ifBar(2, this.props.review.value_rating)}</Bar>
                    <Bar>{this.ifBar(3, this.props.review.value_rating)}</Bar>
                    <Bar>{this.ifBar(4, this.props.review.value_rating)}</Bar>
                    <Bar>{this.ifBar(5, this.props.review.value_rating)}</Bar>
              <BarStyle>Product quality</BarStyle>
                    <Bar>{this.ifBar(1, this.props.review.quality_rating)}</Bar>
                    <Bar>{this.ifBar(2, this.props.review.quality_rating)}</Bar>
                    <Bar>{this.ifBar(3, this.props.review.quality_rating)}</Bar>
                    <Bar>{this.ifBar(4, this.props.review.quality_rating)}</Bar>
                    <Bar>{this.ifBar(5, this.props.review.quality_rating)}</Bar>
              <BarStyle>Appearance</BarStyle>
                    <Bar>{this.ifBar(1, this.props.review.apperance_rating)}</Bar>
                    <Bar>{this.ifBar(2, this.props.review.apperance_rating)}</Bar>
                    <Bar>{this.ifBar(3, this.props.review.apperance_rating)}</Bar>
                    <Bar>{this.ifBar(4, this.props.review.apperance_rating)}</Bar>
                    <Bar>{this.ifBar(5, this.props.review.apperance_rating)}</Bar>

              <BarStyle>Works as expected</BarStyle>
                    <Bar>{this.ifBar(1, this.props.review.expected_rating)}</Bar>
                    <Bar>{this.ifBar(2, this.props.review.expected_rating)}</Bar>
                    <Bar>{this.ifBar(3, this.props.review.expected_rating)}</Bar>
                    <Bar>{this.ifBar(4, this.props.review.expected_rating)}</Bar>
                    <Bar>{this.ifBar(5, this.props.review.expected_rating)}</Bar>
              </div>

      </Review>
      </div>
    )
  }
}

export default ReviewListEntry;