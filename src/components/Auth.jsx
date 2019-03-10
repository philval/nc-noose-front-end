import React, {Component } from 'react';

// holds state
// inspects local storage to see if its empty or populated
// passes state to components that need isLoggedIn to enable/disable features

class Auth extends Component {

state = {
    isLoggedIn: false,
    userName: "",
    }

componentDidMount = () => {
    // console.log(this.state);
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (isLoggedIn === null || "false") {
        this.setState({isLoggedIn: false})
    }
    if (isLoggedIn === "true") {
        this.setState({isLoggedIn: true})
    }
}

handleLogin = (event) => {
    event.preventDefault()
    const userName = event.target.value;
    if ( userName === "grumpy19" ) {
        this.setState ({isLoggedIn: true, userName: userName})
        localStorage.setItem("isLoggedIn", "true")
    }
}

handleLogout = (event) => {
    this.setState({isLoggedIn: false, userName: ""})
    localStorage.setItem("isLoggedIn", "false")
}

    render () {
        return (
            null
        )
    }
}


export default Auth

// const { isLoggedIn, userName } = this.state
// return <Auth handleLogin={this.handleLogin} handleLogout={this.handleLogout}/>
