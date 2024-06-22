import React from 'react'
import Components from '@/components'
import { Spacer, Stack } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Stack w="100%" gap="300px">
      <Components.LandingSection />
      <Components.AboutSection />
      {/* <Components.Orthodontic /> */}
      <Components.BlogSection />
      <Components.ContactUsSection />
    </Stack>
  )
}

export default HomePage