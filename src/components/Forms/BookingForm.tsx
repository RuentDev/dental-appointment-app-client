"use client"
import { Box, Button, Center, Container, Flex, Grid, GridItem, HStack, Spinner, Stack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, Stepper, StepSeparator, StepStatus, StepTitle, Text, useSteps } from '@chakra-ui/react'
import React from 'react' 
import Inputs from '../Inputs'
import { useRouter } from 'next/navigation'
import Cards from '../Cards'
import { Formik, FormikProps } from 'formik'
import { createNewAppointment } from '@/app/actions'

const steps = [
  { title: 'Select Date', description: '' },
  { title: 'Select Time', description: '' },
  { title: 'Select Service', description: '' },
  { title: 'Personal Info', description: '' }
]


interface BookingFormProps{
  showSideImage?: boolean
}

type Values = {
  startDate: string;
  endDate: string;
  doctorId: string;
  description: string;

};

const BookingForm:React.FC<BookingFormProps> = ({showSideImage}) => {

  const router = useRouter()

  const { activeStep, goToNext, goToPrevious, setActiveStep} = useSteps({
    index: 0,
    count: steps.length,
  })

  const handleNextBtnClick = (e: any) => {
    goToNext()
  }

  const handleOnFormSubmit = (values: Values) => {
    console.log("click")
    console.log(values)

    // createNewAppointment
    goToNext()
  }

  const handleSelectDate = (args: any) => {
    console.log(args)
  }
  

  return (
    <Formik
      initialValues={{ 
        startDate: "",
        endDate: "", 
        doctorId: "",
        description: "",
      }}
      onSubmit={handleOnFormSubmit}
    >
      {(props: FormikProps<Values>) => (
          <form style={{width: "100%", height: "100%"}} onSubmit={props.handleSubmit}>
            <Container h="100%" maxW="full" p={10} border={0}> 
              <Stack>
                <Text as="strong" fontSize="2xl">Book Your Appointment</Text>
              </Stack>
              <Grid 
                w={{ lg: "full" }}
                h="100%"
                gap={5}
                templateColumns="repeat(2, 1fr)"
                templateRows="repeat(7, 1fr)"
                bg="white"
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
                  <Center boxSize="100%" alignItems="start" pos="relative">
                    {activeStep === 0 && ( <Inputs.CalendarInput /> )}
                    {activeStep === 1 && ( <Inputs.ServicesInput /> )}
                      
                    {activeStep === 3 && ( <Inputs.ServicesInput /> )}
                    {activeStep === 4 && ( <Inputs.PersonalDetailsInput /> )}
                  </Center>
                </GridItem>

                <GridItem boxSize="100%" colSpan={2} rowSpan={1}>
                  <HStack boxSize="100%" justifyContent={activeStep ? "space-between" : "end"} >
                    {activeStep > 0 && (<Button onClick={goToPrevious}>Previous</Button>)}
                    {activeStep === 2 && (<Button type='submit'>Book Now</Button>)}
                    {activeStep !== 2 && (<Button onClick={handleNextBtnClick}>Next</Button>)}
                  </HStack>
                </GridItem>
              </Grid> 
            </Container>
          </form>
      )}

    </Formik>
  )
}

export default BookingForm  