import React from 'react';
import {SignUpForm} from '../../components/SignUpForm'
import API from "../../utils/API";
import AuthService from '../../components/modules/AuthService';
import decode from 'jwt-decode';

export default class SignUp extends React.Component {
    state = {
        signUpName: '',
        signUpImg: '',
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
            name: this.state.signUpName,
            img: this.state.signUpImg
        }

        API.createNewUser(userData)
            .then(res => console.log(res))
            window.location.assign("/login");
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