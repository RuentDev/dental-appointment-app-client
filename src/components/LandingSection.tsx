"use client"
import { Container, Text, Flex, Stack, Input, Select, Button, Image } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const LandingSection = () => {
  const router = useRouter()
  return (
    <Container 
    maxW="100%" 
    maxH="100vh" 
    height="100vh" 
    border={0} 
    padding={0} 
    margin={0} 
    backgroundImage="landing-section-bg-img.jpg"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    backgroundPosition={{
      base: "bottom center",
      md: "bottom center"
    }}
    position="relative"
  >
   
  </Container>  
  )
}

export default LandingSection