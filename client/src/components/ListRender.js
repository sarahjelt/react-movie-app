import React from 'react';

export const ListRender = (props) => (
    <ul>
        <li>
            <p style={Style.listTitle}>{props.title}</p>
            <p>{props.body}</p>
        </li>
    </ul>
)

const Style = {
    listTitle: {
        fontSize: '22px',
        marginBottom: '5px',
    }
}