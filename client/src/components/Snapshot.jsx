import React from 'react';
import styled from 'styled-components';
import { GoStar } from 'react-icons/go';

const OneReviewStyle = styled.div`
  font-family: 'Verdana, sans-serif';
  font-size: 11px;
  height: 237px;
  width: 336.594px;
`

const Snap = styled.div`
  display: inline-flex;
  flex-direction: row;
  height: 23px;
`

const Bar = styled.table`
  margin-top: 6px;
`

const OneStar = styled(GoStar)`
  color :#333333;
  font-size: 1em;
  height: 23px;
`

const Num = styled.div`
  margin-top: 3px;
  margin-bottom: 3px;
  padding-bottom: 3px;
  padding-left: 5px;
  padding-right:5px;
  height: 20px;
`

const Barstyle = styled.div`
  margin-top: 3px;
  margin-bottom: 3px;
  display: inline-flex;
  flex-direction: row;
  padding-bottom: 3px;
  padding-left: 5px;
  padding-right:5px;
  height:10px;
  width:235.562px;
`


const NoGold = styled.div`
  height: 8px;
  width: 35px;
  border: 0.5px solid rgb(205, 205, 205);
`
//
const Gold = styled.div`
  background: #fc0;
  height: 8px;
  width: 35px;
  border: 0.2px solid rgb(205, 205, 205);
`
//border: 0.2px solid rgb(205, 205, 205);
class Snapshot extends React.Component{
  // let reviews = props.product.reviews;
  constructor(props){
    super(props);
  }
  ifBar(num, rating){
    if(num > Number(rating)){
      return <NoGold className='nogold'/>
    }else{
      return <Gold className='gold'/>
    }
  }

  render(){
    return (
      <OneReviewStyle>
        <div className='rating-snapshot'>
          Rating Snapshot
        </div>
        <div>
          Select a row below to filter reviews
        </div>
        <Snap>
          <Num>
            5
          </Num>
          <OneStar/>

          <Barstyle>

            <Bar>{this.ifBar(1, this.props.product.five_star)}</Bar>
            <Bar>{this.ifBar(2, this.props.product.five_star)}</Bar>
            <Bar>{this.ifBar(3, this.props.product.five_star)}</Bar>
            <Bar>{this.ifBar(4, this.props.product.five_star)}</Bar>
            <Bar>{this.ifBar(5, this.props.product.five_star)}</Bar>

          </Barstyle>

        </Snap>

        <Snap>
        <Num>
        4
        </Num><OneStar/>
        <Barstyle>
        <Bar>{this.ifBar(1, this.props.product.four_star)}</Bar>
        <Bar>{this.ifBar(2, this.props.product.four_star)}</Bar>
        <Bar>{this.ifBar(3, this.props.product.four_star)}</Bar>
        <Bar>{this.ifBar(4, this.props.product.four_star)}</Bar>
        <Bar>{this.ifBar(5, this.props.product.four_star)}</Bar>
        </Barstyle>
        </Snap>

        <Snap>
        <Num>
        3
        </Num><OneStar/>
        <Barstyle>
        <Bar>{this.ifBar(1, this.props.product.three_star)}</Bar>
        <Bar>{this.ifBar(2, this.props.product.three_star)}</Bar>
        <Bar>{this.ifBar(3, this.props.product.three_star)}</Bar>
        <Bar>{this.ifBar(4, this.props.product.three_star)}</Bar>
        <Bar>{this.ifBar(5, this.props.product.three_star)}</Bar>
        </Barstyle>
        </Snap>

        <Snap>
        <Num>
        2
        </Num><OneStar/>
        <Barstyle>
        <Bar>{this.ifBar(1, this.props.product.two_star)}</Bar>
        <Bar>{this.ifBar(2, this.props.product.two_star)}</Bar>
        <Bar>{this.ifBar(3, this.props.product.two_star)}</Bar>
        <Bar>{this.ifBar(4, this.props.product.two_star)}</Bar>
        <Bar>{this.ifBar(5, this.props.product.two_star)}</Bar>
        </Barstyle>
        </Snap>

        <Snap>
        <Num>
        1
        </Num><OneStar/>
        <Barstyle>
        <Bar>{this.ifBar(1, this.props.product.one_star)}</Bar>
        <Bar>{this.ifBar(2, this.props.product.one_star)}</Bar>
        <Bar>{this.ifBar(3, this.props.product.one_star)}</Bar>
        <Bar>{this.ifBar(4, this.props.product.one_star)}</Bar>
        <Bar>{this.ifBar(5, this.props.product.one_star)}</Bar>
        </Barstyle>
        </Snap>
      </OneReviewStyle>
    )
  }
}

export default Snapshot;