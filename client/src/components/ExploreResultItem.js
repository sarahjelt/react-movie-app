import React from 'react';

export const ExploreResultItem = (props) => (
    <div style={Style.container}>
        <i style={Style.icon} className="large material-icons">{iconDeterminer(props.mediaType)}</i>
        <div style={Style.innerContainer}>
            <p style={Style.itemTitle}>{props.title}</p>
            <p style={Style.itemDate}>{props.date}</p>
            <p style={Style.itemOverview}>{props.overview}</p>
        </div>
        <a
            style={Style.fabButton}
            className="btn-floating btn-large waves-effect waves-light red"
            onClick={() => props.handleAddButtonPress(props.title, props.date, props.overview, props.posterPath, props.mediaType)}
        >
            <i className="material-icons">add</i>
        </a>
    </div>
)

const iconDeterminer = (mediaType) => {
    return mediaType === "tv" ? 'live_tv' : 'local_movies';
}

const Style = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignContent: 'center',
        marginBottom: '35px',
        marginTop: '20px',
        borderTop: '2px solid black',
        paddingTop: '20px'
    },
    innerContainer: {
        display: 'flex',
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginLeft: '20px',
        marginRight: '20px',
    },
    itemTitle: {
        fontSize: '20px',
        marginTop: '0px',
        marginBottom: '0px',
    },
    itemDate: {
        fontSize: '16px',
        marginTop: '0px',
        marginBottom: '0px'
    },
    itemOverview: {
        fontSize: '14px',
        marginTop: '15px',
        marginBottom: '0px',
        color: '#676767',
    },
    icon: {
        marginTop: 0,
    },
    fabButton: {
        marginTop: '8px'
    }
}
