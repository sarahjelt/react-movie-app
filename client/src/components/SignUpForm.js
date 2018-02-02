import React from 'react';
import {Input} from './Input'
import {FormButton} from './FormButton'

export const SignUpForm = (props) => {
    return (
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
    )
}

const Style = {
    container: {
        width: '50%',
        marginRight: '25%',
        marginLeft: '25%'
    }
}