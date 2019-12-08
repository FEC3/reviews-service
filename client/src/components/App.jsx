import React from 'react';
import styled from 'styled-components';
// import sampledata from '../sample_data.js';
import ReviewList from './ReviewList.jsx';
import ReviewsDisplay from './ReviewsDisplay.jsx';
import AverageRating from './AverageRating.jsx';
import Snapshot from './Snapshot.jsx';

const UpperandLower  = styled.div`
margin-left: auto;
margin-right: auto
`
const GeneralStyle = styled.div`
  width: 1020.81px;
  height: 919.5px;
  margin: auto;
`

const Upper = styled.div`
  width: 1109.81px;
  height: 239.5px;

  display: inline-flex;
  flex-direction: row;
  left: 50%;
  margin-left: 330px;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product:{
        product_id: null,
        five_star:null,
        four_star:null,
        three_star:null,
        two_star:null,
        one_star:null,
        avg_overall_total: null,
        avg_value_rating: null,
        avg_quality_rating: null,
        avg_apperance_rating: null,
        avg_expected_rating:null,
        reviews : [{
          date:null,
          author: null,
          title: null,
          body: null,
          recommend: null,
          value_rating: null,
          quality_rating: null,
          apperance_rating: null,
          expected_rating: null,
          helpful_count: null,
          not_helpful_count: null
        }]
      }
    }
  }

  componentDidMount(){
    this.fetch();
  }

  fetch(){
    let id = new URLSearchParams(document.location.search.substring(1)).get('id');
    fetch(`http://127.0.0.1:3003/reviews/${id}`)
    .then((res)=>{
      return res.json();
    }).then((res)=>{
      console.log("this is res:",res)
      this.setState({
        product: res
      })
    })
  }

  // console.log("this is state======",this.state.product);

  render(){
    // console.log("this is product from app.jsx: ",this.state.product)
    return (
      <UpperandLower>
        <h2>Reviews</h2>
        <Upper>
          <Snapshot product = {this.state.product}/>
          <AverageRating product = {this.state.product}/>
        </Upper>
        <GeneralStyle>
          <ReviewsDisplay product = {this.state.product}/>
        </GeneralStyle>
      </UpperandLower>
    )
  }
}

export default App;