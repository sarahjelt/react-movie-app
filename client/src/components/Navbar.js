import React from 'react';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import './Navbar.css';

export const Navbar = () => (
  <nav>
    <div className='nav-wrapper cyan darken-1'>
      <a href='/home' className='brand-logo center'>Movies and TV!</a>
      <ul id='nav-mobile' className='left hide-on-small-only'>
          {
            (isLoggedIn() ) ? <Link to='/user'>Profile</Link> : ''
          }
        <li><Link to='/friends'>Friends</Link></li>
        <li><Link to='/lists'>Lists</Link></li>
        <li><Link to='/shelves'>Shelves</Link></li>
          {
            (isLoggedIn()) ? ( <li className="purple log" style={Style.log} onClick={() => logout()}>Log out </li> ) : ( <li className="log" style={Style.log} onClick={() => login()}>Log In</li> )
          }
      </ul>
      <form action='#' className='input-field col s4 right' style={Style.container}>
        <i className='material-icons prefix'>search</i>
        <input placeholder='Search...' id='Search' type='text' />
      </form>
    </div>
  </nav>
)

const Style = {
  container: {
    marginRight: 15
  },
  log: {
    cursor: 'pointer'
  }
}