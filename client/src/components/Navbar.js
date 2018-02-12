import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from './modules/AuthService';
import API from '../utils/API'
import './Navbar.css';

export class Navbar extends React.Component {

  constructor(props) {
      super(props);
      this.Auth = new AuthService();
  }

  render() {
    return(
      <nav>
        <div className='nav-wrapper cyan darken-1'>
          <a href='/home' className='brand-logo center'>Lit Bayou</a>
          <ul id='nav-mobile' className='left hide-on-small-only'>
              {
                (this.Auth.loggedIn() ) ? <li className='profile-page'><a href='/user'>Profile</a></li> : ''
              }
              {
                (this.Auth.loggedIn() ) ? <li className='friends-page'><a href='/friends'>Friends</a></li> : ''
              }
              {
                (this.Auth.loggedIn() ) ? (
                  <li className="log" 
                    onClick={() => this.Auth.logout()}>
                      <a href='#'>Log Out
                      </a>
                  </li> 
                ) : (
                  <li id='login-button' 
                    className="log">
                      <a href='/login'>Log In
                      </a>
                  </li>
                )
              }
          </ul>
          <form action={formActionDeterminer(this.props.searchValue)} className='input-field col s4 right' style={Style.container}>
            <i className='material-icons prefix'>search</i>
            <input
                placeholder='Search...'
                id='Search'
                type='text'
                value={this.props.searchValue}
                onChange={(event) => this.props.handleInputChange(event)}
            />
          </form>
        </div>
      </nav>
  )}
}

const formActionDeterminer = (searchValue) => {
  return `/explore/${searchValue}`
}

const Style = {
  container: {
    marginRight: 15
  }
}