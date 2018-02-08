import React from 'react';

export const Modal = (props) => (
<div id={"modal" + props.id} className="modal">
        <div className="card horizontal">
            <div className="card-image">
              <img src={props.posterPath} />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4>{props.title}</h4>
                <p>{props.overview}</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
        </div>
    </div>
    )

