import React from 'react';

function createMarkup(props) {
    let innerString = props.body.replace(/\n/g, "</p><br /><p>");
  return {__html: innerString};
}

export const ListRender = (props) => (
    <ul>
        <li>
            <p style={Style.listTitle}>{props.title}</p>
            <div style={Style.lineHeight} dangerouslySetInnerHTML={createMarkup(props)} />
        </li>
    </ul>
)

const Style = {
    listTitle: {
        fontSize: '22px',
        marginBottom: '5px'
    },
    lineHeight: {
        lineHeight: 0.75,
        marginBottom: '25px'
    }
}