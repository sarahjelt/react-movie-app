import React from 'react';
import './ConfirmationModal.css'

export const ConfirmationModal = (props) => (
    <div className='confirmationModal' style={{visibility: props.indexOfResultItem === props.indexOfActiveAddModal ? 'visible': 'hidden'}}>
        <div className="card-panel cyan lighten-4" style={Style.container}>
            <div style={Style.closeIconContainer}>
                <a style={Style.icon} className='waves waves-effect' onClick={() => props.handleConfirmationModalClose()}><i className="material-icons">clear</i></a>
            </div>
            <div style={Style.modalContent}>
                <p style={Style.text}>Add {props.title} to your shelf?</p>
                <form>
                    <p>
                        <input
                            name="watchedIt"
                            type="radio"
                            className='red'
                            value={true}
                            id="watchedIt"
                            checked={props.radioToggleValue === true}
                            onChange={(e) => props.handleRadioToggle(e)}
                        />
                        <label htmlFor="watchedIt">Watched it!</label>
                    </p>
                    <p>
                        <input
                            name="needToWatchIt"
                            type="radio"
                            className='red'
                            id="needToWatchIt"
                            value={false}
                            checked={props.radioToggleValue === false}
                            onChange={(e) => props.handleRadioToggle(e)}
                        />
                        <label htmlFor="needToWatchIt">Need to watch it!</label>
                    </p>
                    <a
                        style={Style.button}
                        className="waves-effect waves-light btn red"
                        onClick={() => props.handleShelfItemSubmit(props.title, props.date, props.overview, props.posterPath, props.mediaType)}
                    >
                        Add it to my shelf
                    </a>
                </form>
             </div>
        </div>
    </div>
)

const Style = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '18%',
        left: '25%',
        right: '25%',
        bottom: '30%',
        zIndex: 2000,
        padding: '20px'
    },
    text: {
        fontSize: '20px',
    },
    icon: {
        color: '#3e3e3e'
    },
    closeIconContainer: {
        display: 'flex',
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
        marginTop: '-20px',
    },
    modalContent: {
        display: 'flex',
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center'
    },
    button: {
        marginTop: '30px',
    }
}