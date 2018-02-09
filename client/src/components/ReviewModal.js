import React, { Component } from 'react';

export const ReviewModal = (props) => (
    <div id='reviewModal' className={props.reviewBool === true ? 'modal open' : 'modal'}>
        <div className="row">
            <div className="col s12 m5">
                <div className="card-panel">
                    <span>Add a Review</span>
                    <form onSubmit={(event) => props.handleReviewSubmit(event)}>
                        <label>Review:
                            <textarea name='reviewValue' value={props.value} onChange={(event) => props.handleReviewChange(event)}/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    </div>
) 