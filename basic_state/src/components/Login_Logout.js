import React, {Component} from "react";
import Home from "./Home";

class Login_Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginStatus: false
        }
    }

    changeLoginStatus = () => {
        this.setState({loginStatus: true})
    }
    changeLogoutStatus = () => {
        this.setState({loginStatus: false})
    }

    render() {
        if (this.state.loginStatus) {
            return <Home onLogOut={this.changeLogoutStatus}/>
        }
        return (
            <div style={{textAlign: "center"}}>
                <div>
                    <h1>Click the button below to Login</h1>
                    <button onClick={this.changeLoginStatus}> Click to login</button>
                </div>
            </div>
        );
    }

}

export default Login_Logout