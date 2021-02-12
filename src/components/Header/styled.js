import styled from 'styled-components'
import { Navbar, Nav } from 'react-bootstrap'
import { Image } from '../../components/Image/index'

export const HeaderImage = styled(Image)``

export const NavListItem = styled.li`
  margin-left: 4rem;
  padding-bottom: 0.5em;
`

export const LogoutText = styled.h5`
  color: white;
  cursor: pointer;
  justify-content: flex-end;
  padding-right: 1rem;
  &:hover {
    color: ${props => props.theme.activeLinkColor};
  }
`

export const LogoutDiv = styled.div`
  display: flex;
  flex-direction: row;
`

export const TopNav = styled(Navbar)`
  padding-bottom: 0.1em;
  background-color: ${props => props.theme.dark};
`

export const NavLogoContainer = styled(Navbar.Brand)``
export const NavListContainer = styled(Navbar.Collapse)``
export const NavList = styled(Nav)``
