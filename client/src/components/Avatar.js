import React from 'react';

export const Avatar = (props) => (
    <div style={Style.container}>
        <img src={props.userImage} alt='user avatar' className='circle' style={Style.image} />
    </div>
)

const Style = {
    container: {
        textAlign: 'center',
        position: 'absolute',
        top: '300px',
        left: 'calc(50% - 140px)',
        clear: 'both'
    },
    image: {
        verticalAlign: 'middle',
        width: 280,
        height: 280,
        border: '10px solid white'
    }
}