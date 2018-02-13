import React from 'react';

export const ReviewModal = (props) => (
    <div id='reviewModal' className={props.reviewBool === true ? 'modal open' : 'modal'}>
        <div className="card">
             <div className="card-content">
               <span className="card-title">New Review</span>
                <div>
                     <div style={Style.formContainer}>
                         <label style={Style.label} htmlFor="reviewName">HEADLINE</label>
                         <input placeholder='Name your review' name='reviewName' value={props.reviewName} onChange={(event) => props.handleEventChange(event)} />
                         <label style={Style.label} htmlFor="reviewValue">SAY IT</label>
                         <textarea style={Style.textarea} placeholder='Please write review here' name='reviewValue' value={props.reviewValue} onChange={(event) => props.handleEventChange(event)} />
                     </div>
                     <a style={Style.button} onClick={(event) => props.handleReviewSubmit(event)} className='modal-close waves-effect waves-light btn cyan lighten-1' value="Add List" type="submit">Submit</a>
                </div>
              </div>
            </div>
        </div>

)

const Style = {
    textarea: {
        maxHeight: '300px',
        resize: 'vertical',
        minHeight: '100px',
        border: '1px solid black'
    },
    label: {
        fontSize: '16px',
        paddingBottom: '5px',
        letterSpacing: '1px'
    },
    formContainer: {
        marginTop: '25px',
    },
    button: {
        marginBottom: '25px',
        marginTop: '25px'
    }
}