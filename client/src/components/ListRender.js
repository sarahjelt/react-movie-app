import React from 'react';

export const ListRender = (props) => (
    <ul>
        <li>
            <p>{props.title}</p>
            <p>{props.body}</p>
        </li>
    </ul>
)