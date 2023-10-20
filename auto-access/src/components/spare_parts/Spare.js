import React, { Component } from 'react';

export class Spare extends Component {
  render() {
    return (
      <div className="item">
        <img src={'/images/' + this.props.item.image}></img>
        {/* <img src="/images/car2.png"></img> */}
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.model}</p>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}</b>
        <div className='addToCart'>

        </div>
      </div>
    );
  }
}

export default Car;
