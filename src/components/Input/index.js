import styled from 'styled-components'

export const Input = styled.input`
display: ${props => props.display || 'block'};
type= ${props => props.type || 'text'};
placeholder=${props => props.placeholder || ''};
name=${props => props.name || ''};
font-size: ${props => props.fontSize || '1em'};
font-weight: ${props => props.fontWeight || '400'};
color:${props => props.textColor || '#000'};
background-color: ${props => props.backgroundColor || '#fff'};
width:${props => props.width || '100%'};
line-height: ${props => props.lineHeight || '1.5'};
margin: ${props =>
    `${props.marginVertical || 'auto'} ${props.marginHorizontal || '0rem'}`};
margin-left: ${props => props.marginLeft || '0rem'};
margin-right: ${props => props.marginRight || '0rem'};
margin-top: ${props => props.marginTop || 'auto'};
margin-bottom: ${props => props.marginBottom || 'auto'};
padding: ${props =>
    `${props.paddingVertical || '.5rem'} ${props.paddingHorizontal || '.8rem'}`};
padding-left: ${props => props.paddingLeft || '.8rem'};
padding-right: ${props => props.paddingRight || '.8rem'};
padding-top: ${props => props.paddingTop || '.5rem'};
padding-bottom: ${props => props.paddingBottom || '.5rem'};
border-radius: ${props => props.borderRadius || '0.2rem'};
border: ${props =>
    `${props.borderWidth || '.1rem'} ${props.borderType ||
    'solid'} ${props.borderColor || '#aaa'}`};
outline: ${props => props.outlineColor || '#000'};
`
