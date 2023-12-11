// Car.js
import React, { Component } from 'react';
import './Car.css';

export class Car extends Component {
    render() {
        return (
            <div className="item">
                <img src={'/images/' + this.props.item.images} alt={this.props.item.name} />
                <h2>{this.props.item.name}</h2>
                <p>{this.props.item.model}</p>
                <p>{this.props.item.desc}</p>
                <p>{this.props.item.category}</p>
                <b>{this.props.item.price}</b>
                <button onClick={() => this.props.addToCart(this.props.item)} className="button-add-to-cart">
                    Добавить в корзину
                </button>
            </div>
        );
    }
}

export default Car;