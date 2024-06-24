import { VStack } from '@chakra-ui/react'
import React from 'react'
import Components from '@/components'

const BookingPage = async () => {
  return (
    <VStack w="100%" position="relative">
      <Components.Sections.LandingSection />
      <Components.Forms.BookingForm />
    </VStack>
  )
}

export default BookingPage