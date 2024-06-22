import { Container } from '@chakra-ui/react'
import React from 'react'

const Overlay = () => {
  return (
    <Container maxW="100%" h="100%" pos="absolute" transition="ease-in-out 200ms" cursor="pointer" _hover={{ backgroundColor:"teal.200", opacity: 0.3}}  />
  )
}

export default Overlay