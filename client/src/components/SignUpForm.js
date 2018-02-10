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
                    inputName='signUpName'
                    inputLabel='Name'
                    placeholder='name'
                    handleInputChange={props.handleInputChange}
                />
                <Input
                    inputType='url'
                    inputName='signUpImg'
                    inputLabel='Image Url'
                    placeholder='url'
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