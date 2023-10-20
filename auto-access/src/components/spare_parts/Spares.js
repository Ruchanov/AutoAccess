import React, { Component } from 'react';
import './Cars.css';
import Car from './Car';
import Header from '../main/Header';

export class Spares extends Component {
  state = {
    searchQuery: '',
    filteredItems: this.props.items, // Initialize with all items
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
        <Header></Header>
        <input type="text" placeholder="Search..." value={this.state.searchQuery}
        onChange={this.handleSearchChange}/>
        {this.state.filteredItems.map((el) => (
        <Car key={el.id} item={el} />
        ))}
      </main>
    );
  }
}



export default Cars;
