import React from 'react';
import { ShelfMap } from './ShelfMap';

export const ShelfModule = props => (
    <div className='col s6'>
        <div className='card red lighten-1' style={Style.module}>
            <div className='card-content'>
                <p className='card-title' style={Style.title}>SHELF</p>
                <div style={Style.moduleContainer}>
                    <ShelfMap shelf={props.shelf}/>   
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
    title: {
        textAlign: "center",
        color: "white",
        marginBottom: '20px',
        letterSpacing: '4px'
    }
}