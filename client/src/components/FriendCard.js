import React from 'react';

export const FriendCard = (props) => (
        <div className="grid-item">
            <div className="card-panel" style={Style.cardContainer}>
                <div className="card-content" style={Style.cardContentContainer}>
                    <img src={props.img} style={Style.img} alt={props.username} />
                    <span className="card-title" style={Style.username}>{props.username}</span>
                    <div style={Style.iconRow}>
                        <a style={Style.icon} className="btn-floating waves-effect waves-light red"><i className="material-icons">add</i></a>
                        <a style={Style.icon} className="btn-floating waves-effect waves-light red"><i className="material-icons">favorite</i></a>
                    </div>
                </div>
            </div>
        </div>
)

const Style = {
    cardContainer: {
        maxWidth: '100%',
    },
    img: {
        position: 'relative',
        width: '160px',
        borderRadius: '80px',
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