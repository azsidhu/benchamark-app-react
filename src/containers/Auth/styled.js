import styled from 'styled-components'

const LoginRow = styled.div`
  margin-top: 10%;
`

const LoginColumn = styled.div`
  border: 1px #78909c solid;
  border-radius: 2px;
  padding: 80px 40px;
  background-color: #fff;
`

const SwitchModeDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 10px;
`
const SwitchModeLink = styled.p`
  padding-left: 3px;
  color: blue;
  cursor: pointer;
`

const RequiredLabel = styled.label`
  ::after {
    content: ' *';
    color: red;
  }
`

export { LoginRow, LoginColumn, SwitchModeDiv, SwitchModeLink, RequiredLabel }
