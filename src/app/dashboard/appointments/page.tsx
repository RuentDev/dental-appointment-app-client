import { Container } from '@chakra-ui/react'
import React from 'react'
import Components from '@/components'
export default function AppointmentsPage() {
  return (
    <Container maxW="100%" h="100%" border={0} padding={5}>
      <Components.Tables.AppointmentTable />
    </Container>
  )
}