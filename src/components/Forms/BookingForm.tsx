"use client"
import { Box, Button, Center, Container, Flex, Grid, GridItem, HStack, Spinner, Stack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, Stepper, StepSeparator, StepStatus, StepTitle, Text, useSteps } from '@chakra-ui/react'
import React, { useEffect } from 'react' 
import Inputs from '../Inputs'
import { useRouter } from 'next/navigation'


const steps = [
  { title: 'Select Date', description: '' },
  { title: 'Select Service', description: '' },
  { title: 'Personal Info', description: '' },
  { title: 'Auth', description: '' },
]


const BookingForm = () => {

  const router = useRouter()

  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: steps.length,
  })


  useEffect(() => {
    // Check if auth step and redirect if no session
    if(activeStep === 3){  
      setTimeout(() => {
        router.push("/auth/signin")
      }, 2000)
    }
  }, [activeStep])

  return (
    <Container pos="absolute" bottom={10} h="70vh" maxWidth="90%" p={0} border={0}> 
        { <Flex width="100%" height="100%" borderRadius={30} overflow="hidden">
            <Grid 
              w="65%"
              h="100%"
              gap={5}
              templateColumns="repeat(2, 1fr)"
              templateRows="repeat(6, 1fr)"
              bg="white"
              padding={10}
            >
              <GridItem boxSize="100%" colSpan={2} rowSpan={1}>
                <Center boxSize="100%">
                  <Stepper index={activeStep} w="100%">
                    {steps.map((step, index) => (
                      <Step key={index}>
                        <StepIndicator>
                          <StepStatus
                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepNumber />}
                          />
                        </StepIndicator>

                        <Box flexShrink='0'>
                          <StepTitle>{step.title}</StepTitle>
                          <StepDescription>{step.description}</StepDescription>
                        </Box>

                        <StepSeparator />
                      </Step>
                    ))}
                  </Stepper>
                </Center>
              </GridItem>

              <GridItem boxSize="100%" colSpan={2} rowSpan={4}>
                <Center boxSize="100%" alignItems="start">
                  {activeStep === 0 &&(<Inputs.CalendarInput excludedDays={[]} />)}
                  {activeStep === 1 && (<Inputs.ServicesInput />)}
                  {activeStep === 2 && (<Inputs.PersonalDetailsInput />)}
                  {activeStep === 3 && (<Flex flexDirection="column" alignItems="center" gap={5}><Text as="h2" align="center" >Authenticating</Text> <Spinner size="xl"/></Flex>)}
                </Center>
              </GridItem>

              <GridItem boxSize="100%" colSpan={2} rowSpan={1}>
                <HStack boxSize="100%" justifyContent={activeStep ? "space-between" : "end"} >
                  {activeStep > 0 && (<Button onClick={goToPrevious}>Previous</Button>)}
                  <Button onClick={goToNext}>Next</Button>
                </HStack>
              </GridItem>
            </Grid>  
            <Stack w="35%" bg="url('/img/booking-img.png') no-repeat center center" bgSize="cover"></Stack>
        </Flex> }
    </Container>
  )
}

export default BookingForm  