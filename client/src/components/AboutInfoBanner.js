import React from 'react';
import {SmallButton} from "./SmallButton";
import {Link} from 'react-router-dom'
// import { login, logout, isLoggedIn } from '../utils/AuthService';

export const AboutInfoBanner = (props) => (
    <div style={Style.container}>
        <p style={Style.title}>Movies and TV!</p>
        <p style={Style.subtitle}>Connect with your friends to see what everyone's watching. Review, add, and track what's on your next watch list!</p>
        <div style={Style.buttonContainer}>
            <div>
                {/*<Link to="/login" >*/}
                <SmallButton
                    style={Style.buttonContainerItem}
                    title='login'
                    iconName='local_movies'
                    href='/login'
                />
                {/*</Link>*/}
            </div>
            <p style={Style.buttonContainerItem}> - OR - </p>
            <div>
                {/*<Link to="/signup" >*/}
                    <SmallButton
                        style={Style.buttonContainerItem}
                        title='sign up'
                        iconName='movie_filter'
                        href='/signup'
                    />
                {/*</Link>*/}
            </div>
        </div>
    </div>
)

const Style = {
    container: {
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        textAlign: 'center',
    },
    title: {
        fontSize: '40px',
    },
    subtitle: {
        fontSize: '30px',
    },
    buttonContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    buttonContainerItem: {
        marginLeft: '3%',
        marginRight: '3%',
    }
}
