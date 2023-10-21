import React, { Component } from 'react';

class Korzina extends Component {
  render() {
    if (!this.props.cartItems) {
      return <div>No items in the cart.</div>;
    }

    return (
      <div>
        <h2>Корзина</h2>
        <ul>
          {this.props.cartItems.map((item, index) => (
            <li key={index}>{item.name} - {item.price}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Korzina;
