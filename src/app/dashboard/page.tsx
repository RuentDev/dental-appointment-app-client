import { Container, Flex, Stack, Text, Image } from '@chakra-ui/react'
import Components from '@/components'
import React from 'react'


const DashboardPage = () => {
  return (
    <Container maxW="100%" h="100%" border={0} padding={10}>
      <Flex h="full" w="full" flexDir="column" gap={5}>
          <Stack justifyContent="start" gap={1} p={5} h="20%">
          <Text fontSize="3xl">Good Morning Ruentgen!</Text>
          <Text fontSize="large">How are you feeling today?</Text>
        </Stack>
        <Container maxW="full" h="30%" p={5} bg='#18AFD3'>
          <Flex gap={1} w="100%" h="100%">
              <Container maxW="60%" h="full" border={0} p={5}>
                <Flex h="full" flexDirection="column" justifyContent="center" gap={5}>
                  <Text as="strong" fontSize="5xl" lineHeight='1.2' color="white">Find the best dentist width<br/>Dentria Dental Care</Text>
                  <Text as="p" color="white" fontSize="xl">Make an appointment you get you dental services you need</Text>
                </Flex>
              </Container>
              <Container maxW="40%" h="full" border={0} pos="relative">
                <Image 
                  src={'/img/doctor.png'} 
                  alt={'doctor'}
                  pos="absolute"
                  bottom={-5}
                  w="60%"
                />
              </Container>
          </Flex>
        </Container>
        <Components.Tables.AppointmentTable props={{h: "50%"}}/>
      </Flex>
    </Container>
  )
}

export default DashboardPage