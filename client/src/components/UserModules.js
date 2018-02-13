import React from 'react';
import { ReviewModal } from './ReviewModal';
import { ListModal } from './ListModal';
import { ListRender } from './ListRender';
import { ShelfModule } from './ShelfModule'
import { ReviewRender } from './ReviewRender';

export const UserModules = (props) => (
  <div>

    <div className='row' style={Style.container}>
      <ShelfModule
        shelf={props.shelf}
      />

      <div className = 'col s6'>
      <div>
        <div className='card red lighten-1'  style={Style.listbox}>
          <div className='card-content'>
            <span className='card-title' style={Style.titles}>LISTS</span>
            <ListRender
              lists={props.lists}
            />
              {renderAddListButton(props.isOwnProfile, props.listModalTrigger)}
          </div>
        </div>
      </div>

      <div>
        <div className='card red lighten-1' style={Style.modules}>
          <div className='card-content'>
            <span className='card-title' style={Style.titles}>REVIEWS</span>
            <ReviewRender
              recommendations={props.recommendations}
            />
              {renderAddReviewButton(props.isOwnProfile, props.reviewModalTrigger)}
          </div>
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

const renderAddReviewButton = (isOwnProfile, reviewModalTrigger) => {
    if (!isOwnProfile) {
        return null
    } else {
        return (
            <a
                href='#reviewModal'
                className='btn-floating btn-medium waves-effect waves-light cyan lighten-3 modal-trigger'
                type="button"
                onClick={() => reviewModalTrigger()}>
                <i className='material-icons'>add</i>
            </a>
        )
    }
}

const renderAddListButton = (isOwnProfile, listModalTrigger) => {
    if (!isOwnProfile) {
        return null
    } else {
        return (
            <a value='Add list'
               href='#listModal'
               className='btn-floating btn-medium waves-effect waves-light cyan lighten-3 modal-trigger'
               type="button"
               onClick={() => listModalTrigger()}>
                <i className='material-icons'>add</i>
            </a>
        )
    }
}

const Style = {
  titles: {
      textAlign: "center",
      color: "white",
      marginBottom: '20px',
      letterSpacing: '4px'
  },
  listbox: {
      minHeight:'50vh',
      marginBottom: '10px'
  },
  modules: {
      minHeight: '50vh'
  }
}