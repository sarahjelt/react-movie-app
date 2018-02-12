import React from 'react';

export const ReviewRender = (props) => {
  if (!props.recommendations) {
    return <p>No Reviews Yet!</p>
  } else {
    return props.recommendations.map((result, index) => (
      <ul key={index}>
        <h5>{result.headline} — {result.movieTitle}</h5>
        <li>{result.body}</li>
      </ul>
    ))
  }
}