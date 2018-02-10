import React from 'react';
import {Input} from './Input'
import {FormButton} from './FormButton'

export const LoginForm = (props) => {
    return (
        <form style={Style.container}>
            <Input
                inputType='text'
                inputName='loginEmail'
                inputLabel='email'
                placeholder='email'
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
        width: '60%',
        marginRight: '20%',
        marginLeft: '20%',
        padding: '8%',
        border: '2px solid black',
        marginBottom: '8%'
    }
}