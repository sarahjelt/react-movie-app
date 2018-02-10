import React from 'react';

export const ListRender = (props) => (
    <ul>
        <li key={props.id}>
            <p>{props.title}</p>
            <p>{props.body}</p>
        </li>
    </ul>
)