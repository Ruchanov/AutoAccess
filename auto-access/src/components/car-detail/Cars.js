import React, { Component } from 'react';
import './Cars.css';
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
    const updatedCartItems = [...this.state.cartItems, item];
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
        <Korzina cartItems={this.state.cartItems} />
      </main>
    );
  }
}

export default Cars;
