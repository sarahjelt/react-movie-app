import React, { Component } from 'react';

export const Media = (props) => (
      // <div style={Style.container} className='container'>
      //   <div className='row'>
      //     <div className='mediaImage col s4'>
      //       <img style={Style.img} src='https://www.hollywoodreporter.com/sites/default/files/2011/03/got_-_official_poster.jpg' />
      //     </div>
      //     <div className='info col s8'></div>
      //   </div>
      // </div>
          //<h2 class="header">Horizontal Card</h2>

    <div id={divIdDeterminer(props.indexOfResultItem)} className={props.indexOfOpenModal === props.indexOfResultItem ? 'modal open' : 'modal'}>
        <div className="card horizontal">
            <div className="card-image">
              <img src={props.posterPath} />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
        </div>
    </div>
  )

const divIdDeterminer = (indexOfResultItem) => {
    return `modal${indexOfResultItem}`
}

// const Style = {
//   container: {
//     height: '80vh'
//   },
//   img: {
//     height: '80vh'
//   }
// }

export default Media;