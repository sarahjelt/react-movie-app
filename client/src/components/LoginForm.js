import React from 'react';
import {Input} from './Input'
import {FormButton} from './FormButton'

export const LoginForm = (props) => {
    return (
        <form style={Style.container}>
            <Input
                inputType='text'
                inputName='loginUsername'
                inputLabel='username'
                placeholder='username'
                handleInputChange={props.handleInputChange}
            />
            <Input
                inputType='password'
                inputName='loginPassword'
                inputLabel='password'
                placeholder='password'
                handleInputChange={props.handleInputChange}
            />
            <FormButton
                buttonName='loginButton'
                buttonText='Login'
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