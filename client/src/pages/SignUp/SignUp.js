import React from 'react';
import {SignUpForm} from '../../components/SignUpForm'
import API from "../../utils/API";

export default class SignUp extends React.Component {
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
        console.log(['you logged in as', this.state.signUpEmail, this.state.signUpPassword])

        let userData = {
            email: this.state.signUpEmail,
            password: this.state.signUpPassword,
            name: this.state.signUpFirstName
        }

        API.createNewUser(userData)
            .then(res => console.log(res))
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