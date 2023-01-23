import React from 'react'

class Shape extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'Rectangle',
            width : 20,
            height: 10,
            color : 'Red'
        }
    }

    changeColor(){
         this.setState({color: 'Blue'})
    }
    render(){
        return(
            <div>
                <h1> The name of Shape is {this.state.name}</h1>
                <h1> The width of Shape is {this.state.width}</h1>
                <h1> The height of Shape is {this.state.height}</h1>
                <h1> The color of Shape is {this.state.color}</h1>
                <button onClick={this.changeColor.bind(this)}>Click</button>
            </div>
        )
    }

}

export default Shape