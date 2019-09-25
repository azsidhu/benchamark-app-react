import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 10px;
`

const TwConnect = ({ history }) => {
  return (
    <div className='container'>
      <InnerContainer className='col-sm-3 offset-sm-4'>
        <Button
          type='submit'
          className='btn btn-primary btn-md'
          marginLeft='10px'
        >
          Twitter connect
        </Button>
      </InnerContainer>
    </div>
  )
}

export default TwConnect
