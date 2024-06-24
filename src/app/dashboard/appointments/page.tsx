import { Box, Container, Flex, HStack, Text, Image, VStack, Stack } from '@chakra-ui/react'
import React from 'react'
import Components from '@/components'
export default function AppointmentsPage() {
  return (
    <Container maxW="100%" h="100%" border={0} padding={5}>
      <Stack justifyContent="start" gap={1} p={10} h="20%">
        <Text fontSize="3xl">Good Morning Ruentgen!</Text>
        <Text fontSize="large">How are you feeling today?</Text>
      </Stack>
      <Container maxW="full" h="30%" p={5} bg='#18AFD3'>
        <Flex gap={1} w="100%" h="100%">
            <Container maxW="60%" h="full" border={0} p={5}>
              <Flex h="full" flexDirection="column" justifyContent="center" gap={5}>
                <Text as="strong" fontSize="4xl" lineHeight='1.2' color="white">Find the best dentist width<br/>Dentria Dental Care</Text>
                <Text as="p" color="white" fontSize="xl">Make an appointment you get you dental services you need</Text>
              </Flex>
            </Container>
            <Container maxW="40%" h="full" border={0} pos="relative">
              <Image 
                src={'/img/doctor.png'} 
                alt={'doctor'}
                pos="absolute"
                bottom={-5}
                w="80%"
                right={0}     
              />
            </Container>
        </Flex>
      </Container>
      {/* <Components.Tables.AppointmentTable /> */}
    </Container>
  )
}