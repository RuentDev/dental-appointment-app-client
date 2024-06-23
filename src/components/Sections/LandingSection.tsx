"use client"
import { Container } from '@chakra-ui/react'
import React from 'react'

const LandingSection = () => {
  return (
    <Container 
      maxW="100%" 
      height={{
        base: "50vh",
        lg: "85vh"
      }} 
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
    />
  )
}

export default LandingSection