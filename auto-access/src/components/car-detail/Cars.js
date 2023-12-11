// Cars.js
import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Car from './Car';
import Header from '../main/Header';
import Korzina from '../korzina/Korzina';


export class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      filteredItems: this.props.items,
      searchQuery: '',
    };
  }

  addToCart = (item) => {
    const updatedCartItems = [item, ...this.state.cartItems];
    this.setState({ cartItems: updatedCartItems });
  };

  removeFromCart = (item) => {
    const updatedCartItems = this.state.cartItems.filter((cartItem) => cartItem.id !== item.id);
    this.setState({ cartItems: updatedCartItems });
  };

  handleSearchChange = (e) => {
    const query = e.target.value;
    this.setState({ searchQuery: query }, () => {
      this.filterItems(query);
    });
  };

  filterItems = (query) => {
    const filteredItems = this.props.items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ filteredItems });
  };

  render() {
    return (
<<<<<<< HEAD
      <main>
        <Header />
        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchQuery}
          onChange={this.handleSearchChange}
        />
        {this.state.filteredItems.map((el) => (
          <div key={el.id}>
            <Car item={el} addToCart={this.addToCart} />
            <button onClick={() => this.addToCart(el)}>Добавить в корзину</button>
          </div>
        ))}

        <Link to="/korzina">Перейти в корзину</Link>

        
      </main>
=======
        <main>
          <Header />
          <input
              type="text"
              placeholder="Search..."
              value={this.state.searchQuery}
              onChange={this.handleSearchChange}
          />
          {this.state.filteredItems.map((el) => (
              <Car key={el.id} item={el} addToCart={this.addToCart} />
          ))}
          <Korzina cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />
        </main>
>>>>>>> de617bd688de6c749864bcf8974e8d4de1426b7e
    );
  }
}

export default Cars;

