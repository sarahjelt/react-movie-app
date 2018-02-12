import React from 'react';
import {ReviewModal} from './ReviewModal';
import {ListModal} from './ListModal';
import { ListRender } from './ListRender';
import {ShelfModule} from './ShelfModule'
import { ReviewRender } from './ReviewRender';

export const UserModules = (props) => (
  <div>
    <div className='row' style={Style.container}>
      <div className='col s4'>
        <div className='card red lighten-1'>
          <div className='card-content'>
            <span className='card-title' style={Style.titles}>Lists</span>
            {props.lists.map((result, index) => (
              <ListRender
                key={index}
                title={result.title}
                body={result.body}
              />
            ))}
            <a value='Add list' 
              href='#listModal' 
              className='btn-floating btn-medium waves-effect waves-light cyan lighten-3 modal-trigger' 
              type="button"
              onClick={() => props.listModalTrigger()}>
                <i className='material-icons'>add</i>
            </a>
          </div>
        </div>
      </div>

      <ShelfModule
        shelf={props.shelf}
      />

      <div className='col s4'>
        <div className='card red lighten-1'>
          <div className='card-content'>
            <span className='card-title' style={Style.titles}>Reviews</span>
           
          <ReviewRender
              recommendations={props.recommendations}
            />       
            <a 
              href='#reviewModal' 
              className='btn-floating btn-medium waves-effect waves-light cyan lighten-3 modal-trigger' 
              type="button" 
              onClick={() => props.reviewModalTrigger()}>
                <i className='material-icons'>add</i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <ReviewModal
        reviewValue={props.reviewValue}
        reviewName={props.reviewName}
        reviewBool={props.reviewBool}
        reviewMovie={props.reviewMovie}
        handleReviewSubmit={props.handleReviewSubmit}
        handleEventChange={props.handleEventChange}
    />

    <ListModal
        listValue={props.listValue}
        listName={props.listName}
        listBool={props.listBool}
        handleListSubmit={props.handleListSubmit}
        handleEventChange={props.handleEventChange}
    />

  </div>
)


const Style = {
  titles: {
      textAlign: "center",
      color: "white"
  }
}