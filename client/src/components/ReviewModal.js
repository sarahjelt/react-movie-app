import React, { Component } from 'react';

export const ReviewModal = (props) => (
    <div id='reviewModal' className={props.reviewBool === true ? 'modal open' : 'modal'}>
        <div className="card">
             <div className="card-content">
               <span className="card-title">New Review</span>
                <div>
                     <label>
                         <input placeholder='Name your review' name='reviewName' value={props.reviewName} onChange={(event) => props.handleEventChange(event)} />
                         <textarea placeholder='Please write review here' name='reviewValue' value={props.reviewValue} onChange={(event) => props.handleEventChange(event)} />
                     </label>
                     <a onClick={(event) => props.handleReviewSubmit(event)} className='modal-close waves-effect waves-light btn cyan lighten-1' value="Add List" type="submit">Submit</a>
                </div>
              </div>
            </div>
        </div>

) 