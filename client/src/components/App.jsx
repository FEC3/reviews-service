import React from 'react';
import sampledata from '../sample_data.js';
import ReviewList from './ReviewList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews : sampledata
    }
  }
  render(){
    return (
      <div id = 'app'>
       <h2>Reviews</h2>
        <div className = 'ratingsnapshot'>Rating Snapshot</div>
        <div className = 'averagerating'>Average Customer Ratings</div>
        <h2><ReviewList reviews={this.state.reviews}/></h2>
      </div>
    )
  }
}

export default App;