import React from 'react'
import { Box, Button, Container, Flex, Stack, Text } from '@chakra-ui/react'
import Components from '@/components'

const HomePage = () => {
  return (
  <Container 
    maxW="100%" 
    maxH="100vh" 
    height="100vh" 
    border={0} 
    padding={0} 
    margin={0} 
    backgroundImage="landing-section-bg-image.png"
    backgroundRepeat="no-repeat"
    backgroundSize={{base: "contain", md: "cover"}}
    backgroundPosition="center center"
  >
    <Components.Navbar />
    <Container maxW="100%" h="80%" padding={{base: 5, md: 20}} border={0}>
      <Stack>
        <Text as="p" fontStyle="italic" color="#E9490A">Changing lives One Smile at a Time</Text>
        <Text as="strong" fontSize={50} lineHeight={1}>Dental Services for the <br/> Entire family</Text>
        <Text as="p" mt={5}>Our specialists are highly compassionate and professional in <br /> dealing with dental health. They are experienced in dentistry</Text>
        <Button mt={5}>
          Get To Know Us
        </Button>
      </Stack>
    </Container>

    {/* <Container maxW="100%" h="100%" padding={20} border={0} position="relative">
      <Flex alignItems="center" justifyContent="center">
        <Container>
         <Flex flexWrap="wrap" alignItems="start" p={10}> 
            <Components.Calendar />
         </Flex>
        </Container>
      </Flex>
    </Container> */}
  </Container>  
  )
}

export default HomePage