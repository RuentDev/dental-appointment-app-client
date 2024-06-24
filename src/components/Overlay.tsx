import { Container } from '@chakra-ui/react'
import React from 'react'

interface OverlayProps{}
const Overlay:React.FC<OverlayProps> = () => {
  return (
    <Container 
      maxW="100%" 
      h="100%" 
      pos="absolute" 
      transition="ease-in-out 200ms" 
      cursor="pointer" 
      _hover={{ 
        backgroundColor:"black", 
        opacity: 0.3
      }}  
    />
  )
}

export default Overlay