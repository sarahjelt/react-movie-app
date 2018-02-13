import React from 'react';

export const ShelfMap = props => {
    if (props.shelf.length === 0) {
        return <p>There is nothing on this shelf!</p>
    } else {
        return props.shelf.map((shelfItem, index) => (
            <div style={Style.itemContainer} key={shelfItem._id} id={shelfItem._id}>
                <img style={Style.img} src={shelfItem.item.img} alt={shelfItem.item.title} />
                <div style={{visibility: shelfItem.watched ? 'visible' : 'hidden'}} className="chips"><i style={Style.icon} className="material-icons">check_circle</i></div>
                <p style={Style.itemTitle}>{shelfItem.item.title}</p>
            </div>
        ))
    }
}

const Style = {
    itemContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
        marginRight: '10px',
        marginLeft: '10px',
        position: 'relative'
    },
    itemTitle: {
        fontSize: '16px',
        marginTop: '-50px',
        textAlign: 'center'
    },
    img: {
        width: '100px',
    },
    icon: {
        color: '#80deea',
        position: 'absolute',
        top: '-16px',
        right: '-14px',
        fontSize: '45px'
    }
}