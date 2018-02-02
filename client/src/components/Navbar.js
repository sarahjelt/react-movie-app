import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <nav>
    <div className='nav-wrapper'>
      <Link to='/' className='brand-logo'>Movies and TV!</Link>
      <ul id='nav-mobile' className='left hide-on-sm-and-down'>
        <li><Link to='/friends'>Friends</Link></li>
        <li><Link to='/lists'>Lists</Link></li>
        <li><Link to='/shelves'>Shelves</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </div>
  </nav>
)