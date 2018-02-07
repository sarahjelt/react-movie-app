import React from 'react';
import './Input.css';

export const Input = (props) => (
    <div className="input-field" style={Style.container}>
        <input
            id={props.inputName}
            type={props.inputType}
            className="validate"
            placeholder={props.placeholder}
            onChange={(e) => props.handleInputChange(e, props.inputName)}
        />
        <label htmlFor={props.inputName}>{props.inputLabel}</label>
    </div>
)

const Style = {
    container: {
        width: '100%',
    }
}

