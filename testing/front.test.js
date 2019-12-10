import React from 'react';
import Sample from './sample_data.js';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure,mount } from 'enzyme';
configure({adapter: new Adapter()});
import App from '../client/src/components/App.jsx';
import AverageRating from '../client/src/components/AverageRating.jsx';
import ReviewsDisplay from '../client/src/components/ReviewsDisplay.jsx';
import Snapshot from '../client/src/components/Snapshot.jsx'
import ReviewList from '../client/src/components/ReviewList.jsx'
import ReviewListEntry from '../client/src/components/ReviewListEntry.jsx'


describe('App Component', () => {
  test('App has all elements', () => {
    const component = shallow(<App />, {disableLifecycleMethods: true});
    expect(component.find('AverageRating')).toHaveLength(1);
    expect(component.find('ReviewList')).toHaveLength(1);
    expect(component.find('Snapshot')).toHaveLength(1);
  });
});

describe('Snapshot Component',()=>{
  test('Includes elements',()=>{
    const component = shallow(<Snapshot product={Sample[0]} />);
    expect(component).toHaveLength(1);
    expect(component.find('.rating-snapshot')).toHaveLength(1);
  })

})

describe('ReviewList Component',()=>{
  test('Includes elements',()=>{
    const component = shallow(<ReviewList product={Sample[0]}/>,
    {disableLifecycleMethods: true});
    expect(component.find('.review-list')).toHaveLength(1);
  })

})


describe('ReviewListEntry Component',()=>{
  test('Includes elements',()=>{
    const component = shallow(<ReviewListEntry review={Sample[0].reviews}/>,
    {disableLifecycleMethods: true});
    expect(component.find('.left-single-review')).toHaveLength(1);
    expect(component.find('.right-single-review')).toHaveLength(1);
  })

  test('Render stars',()=>{
    const component = shallow(<ReviewListEntry review={Sample[0].reviews}/>,
    {disableLifecycleMethods: true});
    expect(component.find('.rating-stars')).toHaveLength(1);
  })

})