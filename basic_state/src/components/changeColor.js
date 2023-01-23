import React from "react";

class ChangeColor extends React.Component{
    constructor(props) {
        super(props);
        this.state  = {
            color : 'Red'
        }
    }

    changeColor = () => {
      setTimeout(() => {
            this.setState({color:  'Blue'})
        },1000)

    }

    render(){
        return (
            <div style={{backgroundColor: this.state.color, width : 600 , height : 400}}>
                    <button onClick={this.changeColor}>Click</button>
            </div>

        )


    }


}
export default ChangeColor