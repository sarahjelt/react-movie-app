import React from 'react';

export const ReviewRender = (props) => {
  if (props.recommendations.length === 0) {
    return <p>No Reviews Yet!</p>
  } else {
    return props.recommendations.map((result, index) => (
      <ul key={index}>
        <li style={Style.reviewTitle}>{result.headline}</li>
        <li>{result.body}</li>
      </ul>
    ))
  }
}

const Style = {
    reviewTitle: {
        fontSize: '22px',
        marginBottom: '5px',
    }
}