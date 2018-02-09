import React from 'react';
import {ReviewModal} from './ReviewModal';

export const UserModules = (props) => (
  <div>
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
          </div>
        </div>
      </div>
      <div className='col s4'>
        <div className='card teal'>
          <div className='card-content'>
            <span className='card-title' style={Style.titles}>Reviews</span>
            <input href='#reviewModal' className='modal-trigger' type="button" onClick={() => props.reviewModalTrigger()} />
          </div>
        </div>
      </div>
    </div>
    <ReviewModal value={props.value}
                 reviewBool={props.reviewBool}
                 handleReviewSubmit={props.handleReviewSubmit}
                 handleReviewChange={props.handleReviewChange}/>
  </div>
)

const Style = {
  titles: {
      textAlign: "center",
      color: "white"
  }


}