import styled from 'styled-components'

export const Image = styled.img`
  display: ${props => props.display || 'block'};
  padding: ${props => props.padding || '0rem'};
  padding-left: ${props => props.paddingLeft || '.0rem'};
  padding-right: ${props => props.paddingRight || '.0rem'};
  padding-top: ${props => props.paddingTop || '.0rem'};
  padding-bottom: ${props => props.paddingBottom || '.0rem'};
  margin: ${props =>
    `${props.marginVertical || 'auto'} ${props.marginHorizontal || '0rem'}`};
  margin-left: ${props => props.marginLeft || '0rem'};
  margin-right: ${props => props.marginRight || '0rem'};
  margin-top: ${props => props.marginTop || 'auto'};
  margin-bottom: ${props => props.marginBottom || 'auto'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  max-width: ${props => props.maxWidth || '100%'};
  max-height: ${props => props.maxHeight || '100%'};
  border: ${props =>
    `${props.borderWidth || '0rem'} ${props.borderType ||
      'solid'} ${props.borderColor || '#aaa'}`};
  border-radius: ${props => props.borderRadius || '.2rem'};
  opacity: ${props => props.opacity || '1'};
  filter: ${props => props.filter || 'alpha(opacity=90)'};
  &:hover {
    -webkit-transform: ${props => `scaleX(${props.scaleX})` || 'scaleX(1)'};
    transform: ${props => `scaleX(${props.scaleX})` || 'scaleX(1)'};
  }
`
