import { Center, Container } from '@chakra-ui/react'
import Components from '@/components'
import React from 'react'

const SignupPage = () => {
  return (
     <Container maxW="100%" height="100vh">
      <Center w="100%" h="100%">
        <Components.Forms.SignupForm />
      </Center>
    </Container>
  )
}

export default SignupPage