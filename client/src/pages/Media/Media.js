import React from 'react';

export const Media = (props) => (
    <div id={divIdDeterminer(props.indexOfResultItem)} className={props.indexOfOpenModal === props.indexOfResultItem ? 'modal open' : 'modal'}>
        <div className="card horizontal">
            <div className="card-image">
              <img src={props.posterPath} />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4>{props.title}</h4>
                <p>{props.date}</p>
                <p>{props.overview}</p>
              </div>
            </div>
        </div>
    </div>
  )

const divIdDeterminer = (indexOfResultItem) => {
    return `modal${indexOfResultItem}`
}

export default Media;