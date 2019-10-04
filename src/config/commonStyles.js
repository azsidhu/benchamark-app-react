import styled, { css } from 'styled-components'
import { Container as bootContainer, Col } from 'react-bootstrap'
import { Input } from '../components/Input/index'

export const HoverStyle = css`
  background-color: ${props => props.theme.buttonHover};
`
export const InnerContainer = styled(Col)`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`
export const Container = styled(bootContainer)``
export const FormInput = styled(Input)``
