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
            (isLoggedIn() ) ? <Link to='/user'>Profile</Link> : ''
          }
        <li><Link to='/friends'>Friends</Link></li>
        <li><Link to='/lists'>Lists</Link></li>
        <li><Link to='/shelves'>Shelves</Link></li>
          {
            (isLoggedIn()) ? ( <li className="purple log" style={Style.log} onClick={() => logout()}>Log out </li> ) : ( <li className="log" style={Style.log} onClick={() => login()}>Log In</li> )
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
  },
  log: {
    cursor: 'pointer'
  }
}