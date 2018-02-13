import React from 'react';

export const ListModal = (props) => (
    <div id='listModal' className={props.listBool === true ? 'modal open' : 'modal'}>
        <div className="card">
            <div className="card-content">
              <span className="card-title">New List</span>
                <div>
                    <div style={Style.formContainer}>
                        <label style={Style.label} htmlFor='listName'>NAME YOUR LIST</label>
                        <input 
                            placeholder='Name your list' 
                            name='listName' 
                            value={props.listName} 
                            onChange={(event) => props.handleEventChange(event)}
                        />
                        <label style={Style.label} htmlFor='listValue'>DECLARE YOUR LIST HERE</label>
                        <textarea
                            style={Style.textarea}
                            placeholder='Please write list here' 
                            name='listValue' 
                            value={props.listValue} 
                            onChange={(event) => props.handleEventChange(event)}
                        />
                    </div>
                    <a style={Style.button} onClick={(event) => props.handleListSubmit(event)} className='modal-close waves-effect waves-light btn cyan lighten-1' value="Add List" type="submit">Submit</a>
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