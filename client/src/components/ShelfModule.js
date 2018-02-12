import React from 'react';

export const ShelfModule = props => (
    <div className='col s4'>
        <div className='card red lighten-1' style={Style.module}>
            <div className='card-content'>
                <p className='card-title' style={Style.title}>SHELF</p>
                <div style={Style.moduleContainer}>
                    {props.shelf.map((shelfItem, index) => (
                        <div style={Style.itemContainer} key={shelfItem._id} id={shelfItem._id}>
                            <img style={Style.img} src={shelfItem.item.img} alt={shelfItem.item.title} />
                            <div style={{visibility: shelfItem.watched ? 'visible' : 'hidden'}} className="chips"><i style={Style.icon} className="material-icons">check_circle</i></div>
                            <p style={Style.itemTitle}>{shelfItem.item.title}</p>
                        </div>
                    ))}
                    </div>
            </div>
        </div>
    </div>
)

const Style = {
    moduleContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        height: '100%',
    },
    module: {
        minHeight: '100vh'
    },
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
    title: {
        textAlign: "center",
        color: "white",
        marginBottom: '20px',
        letterSpacing: '4px'
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