import React from 'react';
import {LoginForm} from '../../components/LoginForm'
import {PageInfoTitle} from '../../components/PageInfoTitle'
import API from '../../utils/API'

export default class Login extends React.Component {
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
        API.createNewUser()
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