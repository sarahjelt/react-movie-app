import React, { Component } from 'react';

class Media extends Component {
  // state = {

  // };

  // componentDidMount() {

  // };

  render() {
    return (
      // <div style={Style.container} className='container'>
      //   <div className='row'>
      //     <div className='mediaImage col s4'>
      //       <img style={Style.img} src='https://www.hollywoodreporter.com/sites/default/files/2011/03/got_-_official_poster.jpg' />
      //     </div>
      //     <div className='info col s8'></div>
      //   </div>
      // </div>
      <div className='container'>
        <div class="col s12 m8">
          {/*<h2 class="header">Horizontal Card</h2>*/}
          <div style={Style.container} class="card horizontal">
            <div class="card-image">
              <img style={Style.img} src="https://www.hollywoodreporter.com/sites/default/files/2011/03/got_-_official_poster.jpg" />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const Style = {
  container: {
    height: '80vh',
    marginTop: '5vh'
  },
  img: {
    height: '80vh'
  }
}

export default Media;