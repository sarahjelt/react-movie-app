import React from 'react';

export const FriendCard = (props) => (
        <div className="grid-item">
            <div className="card-panel" style={Style.cardContainer}>
                <div className="card-content" style={Style.cardContentContainer}>
                    <a href={hrefDeterminer(props.id)}><img className='circle responsive-img' src={props.img} style={Style.img} alt={props.name} /></a>
                    <span className="card-title" style={Style.username}>{props.name}</span>
                    <div style={Style.iconRow}>
                        <a onClick={() => props.handleAddFriendButtonPress(props.id)} style={Style.icon} className="btn-floating waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>
                </div>
            </div>
        </div>
)

const hrefDeterminer = (id) => {
    return `/user/${id}`
}

const Style = {
    cardContainer: {
        width: '100%',
        maxWidth: '250px'
    },
    img: {
        position: 'relative',
        minWidth: '160px',
        maxWidth: '200px',
        height: 'auto',
        borderRadius: '150px',
        objectFit: 'cover'
    },
    cardContentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    username: {
        fontSize: '18px',
        marginTop: '15px',
        marginBottom: '15px',
    },
    iconRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    icon: {
        marginLeft: '10px',
        marginRight: '10px,'
    }
}