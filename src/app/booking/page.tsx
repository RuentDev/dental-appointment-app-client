import { Center, Container, Stack } from '@chakra-ui/react'
import React from 'react'
import Components from '@/components'

const BookingPage = () => {
  return (
    <Stack w="100%" gap="300px">
      <Components.LandingSection />
      {/* <Center width="100%" height="100%">
        <Components.Forms.BookingForm />
      </Center> */}
    </Stack>
  )
}

export default BookingPage