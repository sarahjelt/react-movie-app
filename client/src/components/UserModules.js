import React from 'react';
import {ReviewModal} from './ReviewModal';
import {ListModal} from './ListModal';
import { ListRender } from './ListRender';

export const UserModules = (props) => (
  <div>
    <div className='row' style={Style.container}>
      <div className='col s4'>
        <div className='card blue'>
          <div className='card-content'>
            <span className='card-title' style={Style.titles}>Lists</span>
         
            <input href='#listModal' className='modal-trigger' type="button" onClick={() => props.listModalTrigger()} />
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
    <ReviewModal reviewValue={props.reviewValue}
                 reviewName={props.reviewName}
                 reviewBool={props.reviewBool}
                 handleReviewSubmit={props.handleReviewSubmit}
                 handleEventChange={props.handleEventChange}/>

    <ListModal listValue={props.listValue}
               listName={props.listName}
               listBool={props.listBool}
               handleListSubmit={props.handleListSubmit}
               handleEventChange={props.handleEventChange}/>
  </div>
)

const Style = {
  titles: {
      textAlign: "center",
      color: "white"
  }


}