import React from 'react';

export const Carousel = (props) => (
    <div className='homeCarousel'>
        {props.carouselItems.map((item, key) =>
            <img style={Style.img} src={item} key={item} alt='movie poster'/>
        )}
    </div>
)

const Style = {
    container: {
        marginTop: '30px',
        marginBottom: '30px'
    },
    img: {
        height: '300px',
        marginRight: '5px',
        marginLeft: '5px',
        position: 'absolute',
        top: '50%'
    }
}