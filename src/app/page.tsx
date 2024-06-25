import React from 'react'
import Components from '@/components'
import { Stack } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Stack w="100%" gap={0}>
      <Components.Sections.LandingSection />
      <Components.Sections.MakeAppointmentSection />
      <Components.Sections.AboutSection />
      <Components.Sections.OrthodonticSection />
      <Components.Sections.ProcessSection/>
      <Components.Sections.AdvertiseSection/>
      <Components.Sections.OrthodonticSection />
      <Components.Sections.BlogSection />
      <Components.Sections.ContactUsSection />
    </Stack>
  )
}

export default HomePage