import React from 'react';
import { Link } from 'react-router-dom';
import {LoginForm} from '../../components/LoginForm'
import {PageInfoTitle} from '../../components/PageInfoTitle'
import API from '../../utils/API'
import AuthService from '../../components/modules/AuthService';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.Auth = new AuthService();
    }

    state = {
        loginEmail: '',
        loginPassword: '',
    }

    handleInputChange = (event, inputName) => {
        this.setState({
            [inputName]: event.target.value
        })
    }

    handleButtonPress = (value, buttonName) => {
        console.log(['you logged in as', this.state.loginEmail, this.state.loginPassword])

        let userData = {
            email: this.state.loginEmail,
            password: this.state.loginPassword
        }

        API.authenticateUser(userData)
            .then(res => {
                this.Auth.setToken(res.data.token);
                window.location.assign("/user");
            }).catch();                
    }



    render() {
        return (
            <div>
                <PageInfoTitle
                    title='LOGIN'
                    subtitle='Welcome back! See what your friends have been watching.'
                />
                <LoginForm
                    handleInputChange={this.handleInputChange}
                    handleButtonPress={this.handleButtonPress}
                />
            </div>
        )
    }
}