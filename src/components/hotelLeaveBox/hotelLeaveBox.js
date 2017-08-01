/**
 * Created by queen on 17-7-27.
 */
const React=require('react');
const HotelLeaveBox=React.createClass({
  render:function () {
    return (
      <span>
        <input type="checkbox" value={this.props.leave.value}/>
        {this.props.leave.title}
      </span>
    )
  }
});
module.exports=HotelLeaveBox;
