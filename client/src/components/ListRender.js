import React from 'react';

export const ListRender = (props) => {
    if (props.lists.length === 0) {
      return <p>No Lists Yet!</p>
    } else {
      return props.lists.map((results, index) => (
        <ul key={index}>
          <li>
            <p style={Style.listTitle}>{results.title}</p>
            <p>{results.body}</p>
          </li>
        </ul>
      ))
    
    }
}

const Style = {
    listTitle: {
        fontSize: '22px',
        marginBottom: '5px',
    }
}