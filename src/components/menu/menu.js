/**
 * Created by queen on 17-7-27.
 */
import React from 'react';
require('./menu.css');
const Menu=React.createClass({
  getInitialState:function () {
    return {
      filterClass:'select',
      listClass:''
    }
  },
  handleClick: function (e) {
    if (e.target.innerHTML === '筛选条件') {
      this.setState({
        filterClass: 'select',
        listClass: ''
      });
    } else {
      this.setState({
        filterClass: '',
        listClass: 'select'
      });
    }
  },
  render:function () {
    return (
      <div className="select-cont">
        <div className="menu">
          <div className={this.state.filterClass} onClick={this.handleClick}>
            <a href="#/hotelFilter">
              筛选条件
            </a>
          </div>
          <div className={this.state.listClass} onClick={this.handleClick}>
            <a href="#/hotelList">酒店列表</a>
          </div>
        </div>
      </div>
    )
  }
});
module.exports=Menu;
