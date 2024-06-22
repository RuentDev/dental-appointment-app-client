"use client"
import { Box, Button, Container, Flex, HStack, Stack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, Stepper, StepSeparator, StepStatus, StepTitle, useSteps } from '@chakra-ui/react'
import React from 'react' 
import Inputs from '../Inputs'


const steps = [
  { title: 'Select Date', description: '' },
  { title: 'Select Service', description: '' },
  { title: 'Select Doctor', description: '' },
  { title: 'Done', description: '' },
]


const BookingForm = () => {

  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: steps.length,
  })

  
  console.log(activeStep)

  return (
    <Container bg="white" maxW="90%" h="70%" position="absolute" top={200} padding={10} border={0} borderRadius={7}> 
      <Flex h="100%">
          <Stack w="50%" h="100%" gap={10} alignItems="center" justifyContent="space-between">
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

            {activeStep === 1 ? (<Inputs.CalendarInput />) : null}


            <HStack w="100%" justifyContent="space-between" >
              <Button onClick={goToPrevious}>Previous</Button>
              <Button onClick={goToNext}>Next</Button>
            </HStack>
          </Stack>  
          <Stack>
          
          </Stack>
      </Flex>
    </Container>
  )
}

export default BookingForm  