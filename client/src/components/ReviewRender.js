import React from 'react';

export const ReviewRender = (props) => {
  if (!props.recommendations) {
    return <p>No Reviews Yet!</p>
  } else {
    return props.recommendations.map((result, index) => (
      <ul key={index}>
        <a className='modal-trigger' href='#expandedReviewModal' onClick={() => props.openExpandedReviewModal(result.headline, result.body)}><li style={Style.reviewTitle}>{result.headline}</li></a>
        <li>{result.body}</li>
      </ul>
    ))
  }
}

const Style = {
    reviewTitle: {
        fontSize: '22px',
        marginBottom: '5px',
        textDecoration: 'none',
        color: 'black'
    }
}