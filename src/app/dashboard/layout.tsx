import { Container } from '@chakra-ui/react'
import React from 'react'

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <Container 
      maxW="100%" 
      maxH="100vh" 
      h="100vh"
      border={0}
    >
      {children}
    </Container>
  )
}

export default DashboardLayout