import React, { Component } from 'react';
import './FoodTitle.css';

class FoodTitle extends Component {
  render() {
    let divStyle = {};
    if (this.props.name.length > 5) {
      let vw = 100 / (this.props.name.length);
      divStyle = {
        fontSize: vw + 'vmin'
      }
    }
    return (
      <div className="FoodTitle" style={divStyle}>{this.props.name}</div>
    )
  }
}

export default FoodTitle;
