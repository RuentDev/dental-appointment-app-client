import { Center, Container } from '@chakra-ui/react'
import React from 'react'
import Components from '@/components'
const LoginPage = () => {
  return (
    <Container maxW="100%" height="100vh">
      <Center w="100%" h="100%">
        <Components.Forms.LoginForm />
      </Center>
    </Container>
    
  )
}

export default LoginPage