/**
 * Created by queen on 17-7-27.
 */
const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;


const HotelFilter = require('../hotelFilter/hotelFilter');
const HotelList = require('../hotelList/hotelList');

let routes = (
  <Router location="hash">
    <Route path="/hotelFilter" name='hotelFilter' component={HotelFilter}/>
    <Route path="/hotelList" name='hotelList' component={HotelList}/>
  </Router>
);


var Hotel = React.createClass({
  render: function () {
    return routes;
  }
});

module.exports = Hotel;
