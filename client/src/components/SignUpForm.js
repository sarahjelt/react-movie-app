import React from 'react';
import {Input} from './Input'
import {FormButton} from './FormButton'
import {PageInfoTitle} from "./PageInfoTitle";

export const SignUpForm = (props) => {
    return (
        <div>
            <PageInfoTitle
                title='SIGN UP'
                subtitle='Sign up to connect with your friends and see what everyone is watching!'
            />
            <form style={Style.container}>
                <Input
                    inputType='text'
                    inputName='signUpFirstName'
                    inputLabel='First Name'
                    placeholder='first name'
                    handleInputChange={props.handleInputChange}
                />
                <Input
                    inputType='text'
                    inputName='signUpLastName'
                    inputLabel='Last Name'
                    placeholder='last name'
                    handleInputChange={props.handleInputChange}
                />
                <Input
                    inputType='text'
                    inputName='signUpUsername'
                    inputLabel='Username'
                    placeholder='username'
                    handleInputChange={props.handleInputChange}
                />
                <Input
                    inputType='email'
                    inputName='signUpEmail'
                    inputLabel='Email'
                    placeholder='email'
                    handleInputChange={props.handleInputChange}
                />
                <Input
                    inputType='password'
                    inputName='signUpPassword'
                    inputLabel='Password'
                    placeholder='password'
                    handleInputChange={props.handleInputChange}
                />
                <FormButton
                    buttonName='signUpButton'
                    buttonText='Sign Up'
                    handleButtonPress={props.handleButtonPress}
                />
            </form>
        </div>
    )
}

const Style = {
    container: {
        width: '60%',
        marginRight: '20%',
        marginLeft: '20%',
        padding: '8%',
        border: '2px solid black',
        marginBottom: '8%'
    }
}