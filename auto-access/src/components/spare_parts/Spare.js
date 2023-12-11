import React, { Component } from 'react';

export class Spare extends Component {
  render() {
    return (
      <div className="item">
        <img src={'/images/' + this.props.item.image}></img>
        {/* <img src="/images/car1.png"></img> */}
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.model}</p>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}</b>
          <button onClick={() => this.props.addToCart(this.props.item)} className="button-add-to-cart">
              Добавить в корзину
          </button>
        </div>
    );
  }
}

export default Spare;
