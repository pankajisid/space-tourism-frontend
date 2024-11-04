/* eslint-disable react/prop-types */
import React from 'react';
import { assets } from '../assets/assets.js';
import "./navbar.css";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = () => {

  return (
    <>
      <nav className='navbar'>
        <img src={assets.logo} alt="" />
        <ul className="navbar_list">
          <CustomLink to="/" className="navbar_listItem"><span>00</span> HOME</CustomLink>
          <CustomLink to="/destination" className="navbar_listItem"><span>01</span> DESTINATION</CustomLink>
          <CustomLink to="/crew" className="navbar_listItem"><span>03</span> CREW</CustomLink>
          <CustomLink to="/technology" className="navbar_listItem"><span>03</span> TECHNOLOGY</CustomLink>
        </ul>
        <img className='hamburger' src={assets.hamburger} alt="" />
      </nav>
    </>
  )
}

export default Navbar

const CustomLink = ({to,children, ...props}) => {
  
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path : resolvedPath.pathname, end: true})

  return (
    <li className={`${isActive ? "active" : ""} ${props.className || ""}`}>
      <Link to={to}>{children}</Link>
    </li>
  )
}