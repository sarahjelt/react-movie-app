import React from 'react';
import {SignUpForm} from '../../components/SignUpForm'

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        signUpFirstName: '',
        signUpLastName: '',
        signUpUsername: '',
        signUpEmail: '',
        signUpPassword: ''
    }

    handleInputChange = (event, inputName) => {
        this.setState({
            [inputName]: event.target.value
        })
    }

    handleButtonPress = (value, buttonName) => {
        console.log(['you logged in as', this.state.signUpFirstName, this.state.signUpLastName, this.state.signUpUsername, this.state.signUpEmail, this.state.signUpPassword])
        // call method here to register the user
    }

    render() {
        return (
            <SignUpForm
                handleInputChange={this.handleInputChange}
                handleButtonPress={this.handleButtonPress}
            />
        )
    }
}