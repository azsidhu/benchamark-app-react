import React from 'react'
import CustomNavLink from '../CustomNavLink'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/AuthActions'
import {
  HeaderImage,
  NavListItem,
  LogoutText,
  LogoutDiv,
  TopNav
} from './styled'

const Header = ({ logoutUser }) => {
  let toLinks = ['/fbconnect', '/igconnect', '/twconnect']
  let linkText = ['Facebook', 'Instagram', 'Twitter']
  const handleLogoutBtnClick = () => {
    logoutUser()
  }
  const renderNavItem = () => {
    return toLinks.map((link, index) => {
      return (
        <NavListItem className='nav-item' key={index}>
          <CustomNavLink to={link} text={linkText[index]} />
        </NavListItem>
      )
    })
  }
  return (
    <TopNav className='navbar navbar-expand-lg navbar-dark bg-dark topNav'>
      <p className='navbar-brand'>
        <HeaderImage
          src='https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg'
          className='d-inline-block align-top'
          alt=''
        />
      </p>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav'>{renderNavItem()}</ul>
      </div>
      <LogoutDiv>
        <LogoutText className='nav-link' onClick={handleLogoutBtnClick}>
          Logout
        </LogoutText>
      </LogoutDiv>
    </TopNav>
  )
}

export default connect(
  null,
  { logoutUser }
)(Header)
