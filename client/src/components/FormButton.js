import React from 'react';

export const FormButton = (props) => (
    <a
        id={props.buttonName}
        style={Style.container}
        onClick={(e) => props.handleButtonPress(e, props.buttonName)}
        className="waves-effect waves-light btn">
            {props.buttonText}
    </a>
)

const Style = {
    container: {
        backgroundColor: '#46acc1',
    }
}