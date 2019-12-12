import React from 'react';
import { GoStar } from 'react-icons/go';
import styled from 'styled-components';

const OneReviewStyle = styled.div`
  font-family: 'Verdana, sans-serif';
  font-size: 11px;
  height: 237px;
  width: 542.906px;
`


const Average = styled.div`
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  height: 18px;
  margin-bottom: 10px;
`

const Valuemoney = styled.div`
  display: inline-flex;
  flex-direction: row;
`
const Title = styled.div`
  padding-top: 10px;
  width: 105px;
`
const Numberrating = styled.div`
  padding-left: 25px;
  padding-top: 10px;
  width: 18px;
`

const OverNumber = styled.div`
  padding-left: 75px;
  padding-top: 10px;
  margin-right:10px;
  width: 18px;
  height: 24px;
`

const Starstyle = styled.div`
  padding-left: 20px;
  font-size:20px;
  margin-left: 6px;
  margin-right: 6px;
  width: 144px;
  height: 24px;
`


const Barstyle = styled.div`
  margin-left: 6px;
  margin-right: 6px;
  display: inline-flex;
  flex-direction: row;
  padding-top: 10px;
  padding-left: 20px;
`


const FilledStar = styled(GoStar)`
  color :#FFCC00;
  font-size: 1em;
`

const NoFilledStar = styled(GoStar)`
  color: #EEEEEE;
  font-size: 1em;
`
const Bar = styled.td`
  border-collapse: collapse;
  margin-top: 6px;
`

const NoGold = styled.div`
  height: 8px;
  width: 35px;
  border: 0.5px solid rgb(205, 205, 205);
  border-collapse: collapse;
`

const Gold = styled.div`
  background: #fc0;
  height: 8px;
  width: 35px;
  border: 0.5px solid rgb(205, 205, 205);
`

class AverageRating extends React.Component{
  // let reviews = props.product.reviews;
  constructor(props){
    super(props);
  }

  ratingStars (num){
    console.log("come to stars?")
    var stars = [];

    for(var i = 0; i <= 4; i++){
      if(i < num){
        stars.push(<FilledStar className='stars'/>);
      }else {
        stars.push(<NoFilledStar className='nostars'/>);
      }
    }
    return stars;
  };


  ifBar(num, rating){
    if(num > Number(rating)){
      return <NoGold className="nogold"/>
    }else{
      return <Gold className="gold"/>
    }
  }

  render(){
    return (
      <div>
        <OneReviewStyle>
        <div>
          <Average>
          Average Customer Ratings
          </Average>
        </div>
        <Valuemoney>
            <Title>Overall</Title>
            <Starstyle>
                    {this.ratingStars(this.props.product.avg_overall_total).map((star,i)=>(
                      <span key={`star-${i}`}>{star}</span>
                    ))}
            </Starstyle>
            <OverNumber>
              <div className='avg-overall-total'>
              {this.props.product.avg_overall_total}
              </div>
            </OverNumber>
        </Valuemoney>


      <Valuemoney>

        <Title>
        Value for money
        </Title>



        <Barstyle className='bar-style'>
            <Bar>{this.ifBar(1, this.props.product.avg_value_rating)}</Bar>
            <Bar>{this.ifBar(2, this.props.product.avg_value_rating)}</Bar>
            <Bar>{this.ifBar(3, this.props.product.avg_value_rating)}</Bar>
            <Bar>{this.ifBar(4, this.props.product.avg_value_rating)}</Bar>
            <Bar>{this.ifBar(5, this.props.product.avg_value_rating)}</Bar>
        </Barstyle>


        <Numberrating>
          {this.props.product.avg_value_rating}
        </Numberrating>
        </Valuemoney>




        <Valuemoney>

          <Title>
          Product quality
          </Title>

          <Barstyle>
            <Bar>{this.ifBar(1, this.props.product.avg_quality_rating)}</Bar>
            <Bar>{this.ifBar(2, this.props.product.avg_quality_rating)}</Bar>
            <Bar>{this.ifBar(3, this.props.product.avg_quality_rating)}</Bar>
            <Bar>{this.ifBar(4, this.props.product.avg_quality_rating)}</Bar>
            <Bar>{this.ifBar(5, this.props.product.avg_quality_rating)}</Bar>
          </Barstyle>
          <Numberrating>
          {this.props.product.avg_quality_rating}
          </Numberrating>

          </Valuemoney>


          <Valuemoney>
          <Title>
          Appearance
          </Title>
          <Barstyle>
            <Bar>{this.ifBar(1, this.props.product.avg_apperance_rating)}</Bar>
            <Bar>{this.ifBar(2, this.props.product.avg_apperance_rating)}</Bar>
            <Bar>{this.ifBar(3, this.props.product.avg_apperance_rating)}</Bar>
            <Bar>{this.ifBar(4, this.props.product.avg_apperance_rating)}</Bar>
            <Bar>{this.ifBar(5, this.props.product.avg_apperance_rating)}</Bar>
            </Barstyle>
            <Numberrating>
            {this.props.product.avg_apperance_rating}
            </Numberrating>
          </Valuemoney>



          <Valuemoney>
          <Title>
          Works as expected
          </Title>
          <Barstyle>
            <Bar>{this.ifBar(1, this.props.product.avg_expected_rating)}</Bar>
            <Bar>{this.ifBar(2, this.props.product.avg_expected_rating)}</Bar>
            <Bar>{this.ifBar(3, this.props.product.avg_expected_rating)}</Bar>
            <Bar>{this.ifBar(4, this.props.product.avg_expected_rating)}</Bar>
            <Bar>{this.ifBar(5, this.props.product.avg_expected_rating)}</Bar>
            </Barstyle>
            <Numberrating>
            {this.props.product.avg_expected_rating}
            </Numberrating>
          </Valuemoney>
         </OneReviewStyle>
      </div>
  )}
}

export default AverageRating;