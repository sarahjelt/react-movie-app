import React from 'react';

export const UserModules = (props) => (
    <div className='userModules row' style={Style.container}>
        <div className='col s4' style={Style.modules}>
            <h4>Lists</h4>
        </div>
        <div className='col s4' style={Style.modules}>
            <h4>Shelves</h4>
        </div>
        <div className='col s4' style={Style.modules}>
            <h4>Reviews</h4>
        </div>
    </div>
)

const Style = {
    container: {
        marginBottom: '30px',
        textAlign: 'center',
        height: '350px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modules: {
        border: '1px solid black'
    }
}