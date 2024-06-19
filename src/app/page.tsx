import React from 'react'
import { Container } from '@chakra-ui/react'
import Components from '@/components'
const HomePage = () => {
  return (
  <Container maxW="100%" maxH="100vh" height="100vh" border={0} padding={0} margin={0}>
    <Components.Navbar />
  </Container>  
  )
}

export default HomePage