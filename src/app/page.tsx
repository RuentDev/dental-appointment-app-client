import React from 'react'
import Components from '@/components'
import { Spacer, Stack } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Stack w="100%">
      <Components.LandingSection />
      <Components.AppointmentSection />
      <Components.AboutSection />
      <Components.OrthodonticSection />
      <Components.ProcessSection/>
      <Components.AdvertiseSection/>
      <Components.BlogSection />
      <Components.ContactUsSection />
    </Stack>
  )
}

export default HomePage