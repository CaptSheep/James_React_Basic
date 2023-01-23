import React from "react";

class countFunction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

    }

    increaseBtn = () => {
     this.setState({count: this.state.count + 1})
    }
    decreaseBtn = ()=>{
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1> {this.state.count}</h1>
                <button onClick={this.increaseBtn}> Increase</button>
                <button onClick={this.decreaseBtn}> Decrease</button>

            </div>
        )
    }

}

export default countFunction