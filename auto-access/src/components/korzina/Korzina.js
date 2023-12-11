import React, { Component } from 'react';

<<<<<<< HEAD
class Korzina extends Component {
  render() {
    if (!this.props.cartItems || this.props.cartItems.length === 0) {
      return <div>Корзина пуста.</div>;
=======
export class Korzina extends Component {
    render() {
        return (
            <div className="korzina">
                <h3>Корзина</h3>
                {this.props.cartItems.map((item) => (
                    <div key={item.id}>
                        <img src={'/images/' + item.images} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.model}</p>
                        <p>{item.desc}</p>
                        <p>{item.category}</p>
                        <b>{item.price}</b>
                        <button onClick={() => this.props.removeFromCart(item)}>Удалить</button>
                    </div>
                ))}
            </div>
        );
>>>>>>> de617bd688de6c749864bcf8974e8d4de1426b7e
    }
}

export default Korzina;
