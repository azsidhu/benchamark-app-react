import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import '../styles/Header.css';
import Colors from '../config/colors';

const CustomNavLink = ({ to, location, text }) => {
  //console.log('location: ', location)
  return (
    <Route path={to} children={({ match }) => (
      <NavLink replace={to === location.pathname} to={to} className="nav-link navItemText" activeStyle={activeStyles}>{text}</NavLink>
    )} />
  )
}

const activeStyles = {
  fontWeight: "bold",
  color: Colors.activeLinkColor
}

export default withRouter(CustomNavLink)