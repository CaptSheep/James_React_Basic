import {Component} from "react";

class SumNumber extends Component
{
    render(){
        return ( <h1> Total :  {this.props.number1 + this.props.number2}</h1>)
    }
}
export default SumNumber