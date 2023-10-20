import React, { Component } from 'react';
import './Cars.css';
import Car from './Car';
import Header from '../main/Header';

export class Cars extends Component {
  render() {
    return (
      <main>
        <Header></Header>
        {this.props.items.map(el => (
          <Car key={el.id} item={el}></Car>
        ))}
      </main>
    );
  }
}

export default Cars;
