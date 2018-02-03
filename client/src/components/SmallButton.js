import React from 'react';

export const SmallButton = (props) => (
    <a
        className="waves-effect waves-light btn"
        style={Style.container}
        href={props.href}
    >
        <i className="material-icons left">{props.iconName}</i>
            {props.title}
    </a>
)

const Style = {
    container: {
        backgroundColor: '#46acc1',
    }
}
