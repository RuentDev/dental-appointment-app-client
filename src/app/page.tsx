import React from 'react'
import Components from '@/components'
import { Spacer, Stack } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Stack w="100%" gap={0}>
      <Components.LandingSection />
      <Components.AppointmentSection />
      <Components.AboutSection />
      <Components.Orthodontic />
      <Components.BlogSection />
      <Components.ContactUsSection />
    </Stack>
  )
}

export default HomePage