import React from 'react'

export const PageInfoTitle = (props) => (
    <div style={Style.container}>
        <p style={Style.title}>{props.title}</p>
        <p style={Style.subTitle}>{props.subtitle}</p>
    </div>
)

const Style = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        fontSize: '40px',
        letterSpacing: '8px',
        marginTop: '8%',
        lineHeight: '1',
    },
    subTitle: {
        fontSize: '18px',
        letterSpacing: '1px',
        marginBottom: '8%',
        marginTop: '-15px',
    }
}