import React from 'react';

export const ShelfModule = props => (
    <div className='col s4'>
        <div className='card red lighten-1'>
            <div className='card-content'>
                <p className='card-title' style={Style.title}>SHELF</p>
                <div style={Style.moduleContainer}>
                    {props.shelf.map((item, index) => (
                        <div style={Style.itemContainer} key={item._id} id={item._id}>
                            <img style={Style.img} src={item.img} alt={item.title} />
                            <p style={Style.itemTitle}>{item.title}</p>
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
    itemContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
        marginRight: '10px',
        marginLeft: '10px'
    },
    itemTitle: {
        fontSize: '16px',
        marginTop: '5px',
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
    }
}