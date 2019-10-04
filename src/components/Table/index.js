import styled from 'styled-components'

export const Table = styled.table`
  width: ${props => props.width || '100%'};
  color: ${props => props.color || '#000'}
  background-color: ${props => props.backgroundColor || '#fff'};
  padding: ${props => props.padding || '.1rem'};
  margin: ${props =>
    `${props.marginVertical || '1rem'} ${props.marginHorizontal || 'auto'}`};
  margin-left: ${props => props.marginLeft || 'auto'};
  margin-right: ${props => props.marginRight || 'auto'};
  margin-top: ${props => props.marginTop || 'auto'};
  margin-bottom: ${props => props.marginBottom || '1rem'};
  border-collapse: ${props => props.borderCollapse || 'separate'};
  border-spacing: ${props => props.borderSpacing || '0em'};
  box-sizing: ${props => props.boxSizing || 'border-box'};
  font-size: ${props => props.fontSize || '1rem'};
  font-weight: ${props => props.fontWeight || '400'};
  line-height: ${props => props.lineHeigth || '3rem'};
  text-align: ${props => props.textAlign || 'left'};
  &&&{
      td{
        vertical-align: ${props => props.verticalAlignTd || 'top'};
        border-top: ${props =>
    `${props.borderWidth || '.1rem'} ${props.borderType ||
            'solid'} ${props.borderTColor || '#dee2e6'}`};
      }
  }
`
