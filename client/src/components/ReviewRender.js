import React from 'react';
import Truncate from 'react-truncate'

export const ReviewRender = (props) => {
  if (props.recommendations.length === 0) {
    return <p>No Reviews Yet!</p>
  } else {
    return props.recommendations.map((result, index) => (
      <ul key={index} style={Style.reviewBody}>
        <a className='modal-trigger' href='#expandedReviewModal' onClick={() => props.openExpandedReviewModal(result.headline, result.body)}><li style={Style.reviewTitle}>{result.headline}</li></a>
          <Truncate lines={4} ellipsis={<span>...</span>}>
              {result.body}
          </Truncate>
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
    },
    reviewBody: {
        marginBottom: '25px'
    }
}