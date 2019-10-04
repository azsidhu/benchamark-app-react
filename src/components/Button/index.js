import styled from 'styled-components'

export const Button = styled.button`
  type: ${props => props.type || 'submit'};
  color: ${props => props.textColor || '#fff'};
  background-color: ${props => props.backgroundColor};
  border: ${props => props.border || 'none'};
  padding: ${props =>
    `${props.paddingVertical || '0.6rem'} ${props.paddingHorizontal ||
      '0.7rem'}`};
  padding-left: ${props => props.paddingLeft || '.7rem'};
  padding-right: ${props => props.paddingRight || '.7rem'};
  padding-top: ${props => props.paddingTop || '.6rem'};
  padding-bottom: ${props => props.paddingBottom || '.6rem'};
  text-align: ${props => props.textAlign || 'center'};
  text-decoration: ${props => props.textDecoration || 'none'};
  text-transform: ${props => props.textTransformation || 'capitalize'};
  letter-spacing: ${props => props.letterSpacing || '.01rem'};
  line-height: ${props => props.lineHeight || '1rem'};
  border-radius: ${props => props.borderRadius || '.2rem'};
  font-family: ${props => props.fontFamily || 'Arial'}
  font-size: ${props => props.fontSize || '1rem'};
  font-style: ${props => props.fontStyle || 'normal'};
  font-weight: ${props => props.fontWeight || 'normal'};
  opacity: ${props => (props.disabled ? '.6' : '1')};
  width: ${props => props.width || '100%'};
  &:hover {
    color: ${props => props.hoverColor || '#fff'};
    background-color: ${props => props.hoverBackground};
  }
  &:focus {
    color: ${props => props.hoverColor || '#fff'};
    background-color: ${props => props.hoverBackground};
  }
`
