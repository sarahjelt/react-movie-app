import React from 'react';

export const UserModules = (props) => (
    <div className='row' style={Style.container}>
      <div className='col s4'>
        <div className='card blue'>
          <div className='card-content'>
            <span className='card-title' style={Style.titles}>Lists</span>
          </div>
        </div>
      </div>
      <div className='col s4'>
        <div className='card lime'>
          <div className='card-content'>
            <span className='card-title' style={Style.titles}>Shelf</span>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='col s4'>
        <div className='card teal'>
          <div className='card-content'>
            <span className='card-title' style={Style.titles}>Reviews</span>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
)

const Style = {
  titles: {
      textAlign: "center",
      color: "white"
  }


}