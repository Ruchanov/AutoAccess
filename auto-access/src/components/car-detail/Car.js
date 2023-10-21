import React, { Component } from 'react';

export class Car extends Component {
  
  render() {
    return (
      <div className="item">
        <img src={'/images/' + this.props.item.images}></img>
        {/* <img src="/images/car2.png"></img> */}
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.model}</p>
        <p>{this.props.item.desc}</p>
        <p>{this.props.item.category}</p>
        <b>{this.props.item.price}</b>
        <button onClick={() => this.props.addToCart(this.props.item)}>
  Добавить в корзину
        </button>

      </div>
    );
  }
}

export default Car;
