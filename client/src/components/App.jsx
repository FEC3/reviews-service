import React from 'react';
// import sampledata from '../sample_data.js';
import ReviewList from './ReviewList.jsx';
import ReviewsDisplay from './ReviewsDisplay.jsx';
const style = {
  universal: {
    'fontFamily': 'Noto Sans'
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product:{
        product_id: null,
        overall_rating: null,
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
          not_helful_count: null
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
      <div id = 'app' style={style.universal}>
       <h2>Reviews</h2>
        <div className = 'ratingsnapshot'>Rating Snapshot</div>
        <div className = 'averagerating'>Average Customer Ratings</div>
        <ReviewsDisplay product = {this.state.product}/>
      </div>
    )
  }
}

export default App;