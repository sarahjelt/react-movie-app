import React from 'react';
import {LoginForm} from '../../components/LoginForm'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        loginUsername: '',
        loginPassword: '',
    }

    handleInputChange = (event, inputName) => {
        this.setState({
            [inputName]: event.target.value
        })
    }

    handleButtonPress = (value, buttonName) => {
        console.log(['you logged in as', this.state.loginUsername, this.state.loginPassword])
        // call method here to login the user
    }

    render() {
        return (
            <LoginForm
                handleInputChange={this.handleInputChange}
                handleButtonPress={this.handleButtonPress}
            />
        )
    }
}