import React from 'react';

export const UserHeader = (props) => (
    <div className='userHeader' style={Style.container}>
        {props.headerItems.map((item, key) =>
            <img style={Style.img} src={item} key={item} alt='poster'/>
        )}
    </div>
)

const Style = {
    container: {
        marginBottom: '30px',
        textAlign: 'center',
        height: '350px',
        overflow: 'hidden',
        objectFit: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 'inherit'
    }
}