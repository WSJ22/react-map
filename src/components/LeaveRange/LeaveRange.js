/**
 * Created by queen on 17-7-27.
 */
const React = require('react');
const LeaveCheckBox = require('../hotelLeaveBox/hotelLeaveBox');
require('./LeaveRange.css');
const LeaveRange = React.createClass({
  getInitialState: function () {
    return {
      leaveShow: 'none',
      leaveRange: [
        {
          value: [0, 200],
          title: '经济型'
        },
        {
          value: [200, 300],
          title: '二星级'
        },
        {
          value: [300, 500],
          title: '三星级'
        },
        {
          value: [500, 1000],
          title: '舒适四星级'
        },
        {
          value: [1000,3000],
          title: '高级五星级'
        }
      ]
    }
  },


  handleClick: function () {
    if (this.state.leaveShow === 'none') {
      this.setState({
        leaveShow: 'block'
      })
    } else {
      this.setState({
        leaveShow: 'none'
      })
    }
  },
  render: function () {
    let LeaveChoose = [];
    this.state.leaveRange.forEach((leave)=> {
      LeaveChoose.push(<LeaveCheckBox leave={leave}/>)
    });

    return (
      <li>
        <span onClick={this.handleClick} className="Range">酒店级别</span>
        <div style={{display:this.state.leaveShow}}>
          {LeaveChoose}
        </div>
      </li>
    )
  }
});


module.exports = LeaveRange;


