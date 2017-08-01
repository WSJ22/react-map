/**
 * Created by queen on 17-7-27.
 */
const React=require('react');
const PriceCheckBox=React.createClass({
  render:function () {
    return (
      <span>
        <input type="checkbox" value={this.props.price.value}/>
        {this.props.price.title}
      </span>
    )
  }
});
module.exports=PriceCheckBox;
