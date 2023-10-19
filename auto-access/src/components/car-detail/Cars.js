import React, {Component} from 'react'
import './Cars.css';

export class Cars extends  Component{
    render() {
        return(
            <main>
                {this.props.cars.map(el =>(
                    <h1>{el.name}</h1>
                ))}
            </main>

        )
    }
}

export default Cars