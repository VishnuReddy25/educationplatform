import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import '../assets/CSS/Navbar.css'; // Import custom CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
       <NavLink to="/home" className='title'> VidyaVerse</NavLink>
      <ul>
        <li>
          <NavLink to='/services' activeClassName='active'>Services</NavLink>
        </li>
        <li>
          <NavLink to='/aboutus' activeClassName='active'> AboutUs</NavLink>
        </li>
        <li>
          <NavLink to='/contactus' activeClassName='active'>ContactUs</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
