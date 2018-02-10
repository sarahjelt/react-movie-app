import React from 'react';
import {LoginForm} from '../../components/LoginForm'
import {PageInfoTitle} from '../../components/PageInfoTitle'
import API from '../../utils/API'

export default class Login extends React.Component {
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
            .then(res => console.log(res))
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