import React from 'react'
import Components from '@/components'
import { Stack } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Stack w="100%">
      <Components.LandingSection />
      <Components.Orthodontic />
    </Stack>
  )
}

export default HomePage