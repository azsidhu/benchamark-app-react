import styled, { css } from 'styled-components'

const HoverSyles = css`
  background-color: #0062cc;
  color: White;
  text-decoration: none;
`
const AnchorButton = styled.a`
  background-color: #007bff;
  border-radius: 5px;
  color: white;
  padding: 0.5em;
  text-decoration: none;

  &:hover {
    ${HoverSyles}
  }

  &:focus {
    ${HoverSyles}
  }
`

export default AnchorButton
