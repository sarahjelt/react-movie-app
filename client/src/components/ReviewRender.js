import React from 'react';

export const ReviewRender = (props) => (
    <ul>
      <li>
        <p>{props.mediaItem.title}<span>{props.headline}</span></p>
        <p>{props.review}</p>
      </li>
    </ul>
)