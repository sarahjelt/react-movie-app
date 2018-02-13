import React from 'react';

export const ReviewExpandedModal = (props) => (
    <div
        id='expandedReviewModal'
         className={props.expandedReviewModalVisible ? 'modal open' : 'modal'}
    >
        <div className="card" style={Style.container}>
            <div style={Style.modalContent}>
                <p style={Style.title}>{props.expandedReviewTitle}</p>
                <p style={Style.body}>{props.expandedReviewBody}</p>
            </div>
        </div>
    </div>
)

const Style = {
    container: {
        marginTop: '0px',
        marginBottom: '1px',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '5%',
        paddingRight: '5%',
        overFlow: 'scroll'
    },
    title: {
        fontSize: '20px',
    },
    body: {
        textAlign: 'left'
    },
    modalContent: {
        display: 'flex',
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start'
    },
    button: {
        marginTop: '30px',
        marginBottom: '55px'
    }
}
