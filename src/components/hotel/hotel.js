/**
 * Created by queen on 17-7-27.
 */
import React from 'react';
require('./hotel.css')
const Hotel=React.createClass({
  getInitialState:function () {
    return {
      imgSrc:'',
      name:'',
      address:'',
      price:''
    }
  },
  render:function () {
    return(
      <div className="clearfloat hotel">
        <dl>
          <dd><img src={this.props.hotelInfo.imgSrc}/></dd>
          <dt>{this.props.hotelInfo.name}</dt>
          <dt>{this.props.hotelInfo.address}</dt>
        </dl>
        <span className="price">{this.props.hotelInfo.price}</span>
      </div>



    )
  }
});
module.exports=Hotel
