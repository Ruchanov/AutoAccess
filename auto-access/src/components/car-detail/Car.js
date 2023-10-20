import {Component} from "react";

export class Car extends Component{
    render() {
        return (
            <div>{this.props.car.name}</div>
        )
    }
}
export default Car