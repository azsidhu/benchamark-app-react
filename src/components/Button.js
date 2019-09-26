import styled, { css } from 'styled-components'

const HoverStyle = css`
  background-color: #0069d9;
`
const Button = styled.button`
  display: block;
  width: 100%;
  color: #fff;
  background-color: #007bff;
  padding: 0.25rem 0.5rem;
  padding: ${props =>
    props.paddingHorizontal
      ? `0.25rem ${props.paddingHorizontal}`
      : '0.25rem 0.5rem'};
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

export default Button
