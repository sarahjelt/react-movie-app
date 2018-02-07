import React from 'react';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import './Navbar.css';

export const Navbar = (props) => (
  <nav>
    <div className='nav-wrapper cyan darken-1'>
      <a href='/home' className='brand-logo center'>Movies and TV!</a>
      <ul id='nav-mobile' className='left hide-on-small-only'>
          {
            (isLoggedIn() ) ? <li><a href='/user'>Profile</a></li> : ''
          }
          {
            (isLoggedIn() ) ? <li className='friends-page'><Link to='/friends'>Friends</Link></li> : ''
          }
          {
            (isLoggedIn()) ? ( 
              <li className="log" onClick={() => logout()}><Link to='#'>Log Out
              </Link></li> ) : 
            ( 
              <li id='login-button' className="log" onClick={() => login()}><Link to='#'>Log In
              </Link></li> )
          }
      </ul>
      <form action={formActionDeterminer(props.searchValue)} className='input-field col s4 right' style={Style.container}>
        <i className='material-icons prefix'>search</i>
        <input
            placeholder='Search...'
            id='Search'
            type='text'
            value={props.searchValue}
            onChange={(event) => props.handleInputChange(event)}
        />
      </form>
    </div>
  </nav>
)

const formActionDeterminer = (searchValue) => {
  return `/explore/${searchValue}`
}

const Style = {
  container: {
    marginRight: 15
  }
}