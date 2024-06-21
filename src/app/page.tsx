import React from 'react'
import { Box, Button, Container, Flex, Input, Select, Stack, Text } from '@chakra-ui/react'
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
    backgroundImage="landing-section-bg-img.jpg"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    backgroundPosition={{
      base: "center center",
      md: "bottom center"
    }}
    position="relative"
  >
   <Container 
      bottom={-10}
      top="50%"
      left="50%"
      maxW="90%"
      bg="#18AFD3"
      border="0"
      borderRadius={10}
      position="absolute" 
      transform="translate(-50%, 20%)"
      p={20}
    >
      <Flex gap={5}>
        <form>
          <Text as="strong" fontSize={64} color="#ffffff" lineHeight={1}>Schedule Your Dental <br/> Appointment Today</Text>
          <Stack gap={5} maxW={500} mt={10}>
            <Input 
              type='email'
              borderRadius={0}
              bg="#ffffff"
              placeholder='Your Email Adress'
              border={0}
              outline={0}
            />

            <Flex gap={5}>
              <Select bg="#ffffff" borderRadius={0} placeholder='Select Your Dentist'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
              <Input 
                size='md' 
                type='datetime-local' 
                bg="#ffffff"
                placeholder='Select Date and Time' 
              />
            </Flex>
            
            <Button>Book Now</Button>
          </Stack>
        </form>

        <Box>
          asd
        </Box>
      </Flex>
    </Container> 
  </Container>  
  )
}

export default HomePage