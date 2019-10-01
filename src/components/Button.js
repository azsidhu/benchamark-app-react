import styled from 'styled-components'
import { HoverStyle } from '../config/commonStyles'

const Button = styled.button`
  display: block;
  width: 100%;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.buttonBackground};
  padding: ${props => `${props.paddingVerticle} ${props.paddingHorizontal}`};
  margin-left: ${props => props.marginLeft};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  font-size: 0.875rem;
  line-height: 1.8;
  border: 0rem;
  border-radius: 0.2rem;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  transition: 0.1s all ease-out;
  &:hover {
    ${HoverStyle}
  }
  &:focus {
    ${HoverStyle}
  }
`
Button.defaultProps = {
  paddingHorizontal: '0.25rem',
  paddingVerticle: '0.25rem'
}

export default Button
