import React from 'react';

export const ListRender = (props) => (
    <ul>
        <li>
            <h5>{props.title}</h5>
            <p>{props.body}</p>
        </li>
    </ul>
)