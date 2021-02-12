import React from 'react'
import { Button } from '../../../components/Button/index'
import { theme } from '../../../config/theme'
import { Container, InnerContainer } from '../../../config/commonStyles'

const FbConnect = () => {
  return (
    <Container>
      <InnerContainer sm={{ span: 3, offset: 4 }}>
        <Button
          backgroundColor={theme.buttonBackground}
          hoverBackground={theme.buttonHover}
        >
          Facebook connect
        </Button>
      </InnerContainer>
    </Container>
  )
}

export default FbConnect
