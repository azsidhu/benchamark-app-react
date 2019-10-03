import styled from 'styled-components'
import { Col, Form as bootForm } from 'react-bootstrap'

export const LoginColumn = styled(Col)`
  margin-top: 10%;
  border: 0.02rem ${props => props.theme.cardBorder} solid;
  border-radius: 0.1rem;
  padding: 5em 0em;
  background-color: ${props => props.theme.cardBackground};
`

export const SwitchModeDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  margin-top: 0.5rem;
`
export const SwitchModeLink = styled.p`
  padding-left: 0.2em;
  color: blue;
  cursor: pointer;
`
export const InputLable = styled.label``

export const RequiredLabel = styled(InputLable)`
  ::after {
    content: ' *';
    color: red;
  }
`

export const Form = styled(bootForm)`
  padding: 0em 1em;
`
export const FormGroup = styled(bootForm.Group)``
export const ButtonContainer = styled(Col)``
export const Paragraph = styled.p``
