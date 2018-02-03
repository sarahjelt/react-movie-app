import React from 'react';

export const UserModules = (props) => (
    <div className='userModules row' style={Style.container}>
        <div className='col s4'>
            <div style={Style.modules}>
                <h5>Lists</h5>
            </div>
        </div>
        <div className='col s4'>
            <div style={Style.modules}>
                <h5>Shelves</h5>
            </div>
        </div>
        <div className='col s4'>
            <div style={Style.modules}>
                <h5>Reviews</h5>
            </div>
        </div>
    </div>
)

const Style = {
    container: {
        marginTop: 90,
        marginBottom: '30px',
        textAlign: 'center',
        height: '400px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modules: {
        textAlign: 'left',
        paddingLeft: 15,
        border: '1px solid black',
        width: '85%',
        height: '400px'
    }
}