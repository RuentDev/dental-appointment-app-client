import { Center, Container } from '@chakra-ui/react'
import React from 'react'
import Components from '@/components'

const BookingPage = () => {
  return (
    <Container maxW="100%" height="100vh">
      <Center width="100%" height="100%">
        <Components.Forms.BookingForm />
      </Center>
    </Container>
  )
}

export default BookingPage