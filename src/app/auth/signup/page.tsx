import { Center, Container, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import Components from '@/components'
import React from 'react'

const SignupPage = () => {
  return (
     <Container maxW="100%" height="100vh">
        <Center w="100%" h="100%">
          <Tabs isFitted variant='enclosed'>
            <TabList mb='1em'>
              <Tab>Patients Signup</Tab>
              <Tab>Doctor Signup</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Components.Forms.SignupForm role='USER' />
              </TabPanel>
              <TabPanel>
                <Components.Forms.SignupForm role='DENTIST' />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Center>
    </Container>
  )
}

export default SignupPage