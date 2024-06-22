"use client"
import { Container, Flex, Stack, Text, Image, HStack, Icon, VStack } from '@chakra-ui/react'
import { IoBagAddOutline } from "react-icons/io5";
import React from 'react'

const AboutSection = () => {
  return (
    <Container 
      p={20} 
      border={0}
      maxW="100%" 
      height="auto" 
      overflow="hidden"
    >
      <Flex 
        w="100%" 
        h="100%" 
        gap={20} 
        flexDirection={{
          base: 'column', 
          lg: "row"
        }} 
        alignItems={{
          base: "center", 
          lg: "space-between"
        }}
        justifyContent={{
          base: "start", 
          lg: "space-evenly"
        }}
      >
        <Stack w="100%" h="auto">
          <Text 
            as="strong"
            fontSize={{
              base: "2xl",
              md : "6xl"
            }}
            textAlign={{
              base: "center",
              md: "start",
            }}
          >
            Welcome to Dentria <br /> Dental Clinic
          </Text>
          <Text
            textAlign={{
              base: "center",
              md: "start"
            }}
          >
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque doloremque sit libero quas tempore fugiat.
          </Text>
          <Flex flexDirection="column">
            <Flex gap={2} alignItems="center">
              <IoBagAddOutline color='#18afd3'/>
              <Text align="start" as="strong" fontSize={{md: "2xl"}}>Why We Stand Out?</Text>
            </Flex>
            <Text as="p" ml={6} color="#657E96">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia modi, numquam velit, beatae facere cupiditate ratione quibusdam voluptas, cumque consectetur amet similique accusamus iste magni.</Text>
          </Flex>
          <Flex flexDirection="column">
            <Flex gap={2} alignItems="center">
              <IoBagAddOutline color='#18afd3'/>
              <Text align="start" as="strong" fontSize={{md: "2xl"}}>Get your services right!</Text>
            </Flex>
            <Text as="p" ml={6} color="#657E96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa delectus accusantium consequuntur vitae dolores minima mollitia ex eveniet quam?</Text>
          </Flex>
        </Stack>
        <Image
          alt='about-image'
          src="/about-image.png"
          w={{lg: "50%"}}
          maxW={{lg: "50%"}}
        />
      </Flex>
    </Container>
  )
}

export default AboutSection