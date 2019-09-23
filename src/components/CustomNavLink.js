import React from 'react'
import { Route, NavLink, withRouter } from 'react-router-dom'
import { Colors } from '../config/colors'
import styled from 'styled-components'

const NavItem = styled(NavLink)`
  cursor: pointer;
`
const CustomNavLink = ({ to, location, text }) => {
  return (
    <Route
      path={to}
      children={() => (
        <NavItem
          replace={to === location.pathname}
          to={to}
          className='nav-link'
          activeStyle={activeStyles}
        >
          {text}
        </NavItem>
      )}
    />
  )
}

const activeStyles = {
  fontWeight: 'bold',
  color: Colors.activeLinkColor
}

export default withRouter(CustomNavLink)
