import React, { Component } from 'react';

export const ReviewModal = (props) => (
    <div id='reviewModal' className={props.reviewBool === true ? 'modal open' : 'modal'}>
        <div className="card">
            <div className="card-content">
              <span className="card-title">New Review</span>
                <div onSubmit={(event) => props.handleReviewSubmit(event)}>
                    <label>
                        <input placeholder='Name your review' name='reviewName' value={props.reviewName} onChange={(event) => props.handleEventChange(event)} />
                        <textarea placeholder='Please write review here' name='reviewValue' value={props.reviewValue} onChange={(event) => props.handleEventChange(event)} />
                    </label>
                    <a className='waves-effect waves-light btn cyan lighten-1' value="Add List" type="submit">Submit</a>
                </div>
              </div>
            </div>
        </div>

    // <div id='reviewModal' className={props.reviewBool === true ? 'modal open' : 'modal'}>
    //     <div className="row">
    //         <div className="col s12 m3">
    //             <div className="card-panel">
    //                 <span>Add a Review</span>
    //                 <form onSubmit={(event) => props.handleReviewSubmit(event)}>
    //                     <label>Review:
    //                         <textarea placeholder='Name your review' name='reviewName' value={props.reviewName} onChange={(event) => props.handleEventChange(event)}/>
    //                         <textarea placeholder='Please write review here' name='reviewValue' value={props.reviewValue} onChange={(event) => props.handleEventChange(event)}/>
    //                     </label>
    //                     <input type="submit" value="Submit" />
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    // </div>
) 