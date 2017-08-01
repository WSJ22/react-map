/**
 * Created by queen on 17-7-27.
 */
import React from 'react';
const Map=require('../BaiduMap/Map')
const PriceRange = require('../priceRange/PriceRange');
const LeaveRange=require('../LeaveRange/LeaveRange');
require('./hotelFilter.css');
const HotelFilter=React.createClass({
  render:function () {
    return(
     <div className="scroll-clip">
       <div className="list">
         <ul>
           <PriceRange/>
           <LeaveRange/>
           <Map/>
         </ul>
       </div>
     </div>
    )
  }
})
module.exports=HotelFilter;
