import { Box, Container, Flex, HStack, Text, Image, VStack, Stack } from '@chakra-ui/react'
import React from 'react'
import Components from '@/components'
export default function AppointmentsPage() {

  return (
    <Container maxW="100%" h="100%" border={0} padding={10}>
      <Components.Tables.AppointmentTable props={{ h: "full" }}/>
    </Container>
  )
}