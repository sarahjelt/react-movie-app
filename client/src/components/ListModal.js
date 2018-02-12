import React from 'react';

export const ListModal = (props) => (
    <div id='listModal' className={props.listBool === true ? 'modal open' : 'modal'}>
        <div className="card">
            <div className="card-content">
              <span className="card-title">New List</span>
                <div>
                    <label>
                        <input placeholder='Name your list' name='listName' value={props.listName} onChange={(event) => props.handleEventChange(event)}/>
                        <textarea placeholder='Please write list here' name='listValue' value={props.listValue} onChange={(event) => props.handleEventChange(event)}/>
                    </label>
                    <a
                        className='waves-effect waves-light btn cyan lighten-1'
                        value="Add List"
                        type="submit"
                        onClick={(event) => props.handleListSubmit(event)}
                    >
                        Submit
                    </a>
                </div>
            </div>
        </div>
    </div>

    //<div id='listModal' className={props.listBool === true ? 'modal open' : 'modal'}>
    //<div className="row">
    //    <div className="col s12 m5">
    //        <div className="card-panel">
    //            <span>Add a list</span>
    //            <form onSubmit={(event) => props.handleListSubmit(event)}>
    //                <label>List:
    //                    <textarea placeholder='Name your list' name='listName' value={props.listName} onChange={(event) => props.handleEventChange(event)}/>
    //                    <textarea placeholder='Please write list here' name='listValue' value={props.listValue} onChange={(event) => props.handleEventChange(event)}/>
    //                </label>
    //                <input type="submit" value="Submit" />
    //            </form>
    //        </div>
    //    </div>
    //</div>
//</div>
)