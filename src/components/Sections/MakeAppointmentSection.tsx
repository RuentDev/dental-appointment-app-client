"use client"
import { Container, Flex, Stack, Input, Select, Button, Text, Image, Center } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const MakeAppointmentSection = () => {
  const router = useRouter()
  return (
    <Center w="100%" h="30vh" position="relative" >
      <Container 
        maxW="90%"
        bg="#18AFD3"
        border={0}
        borderRadius={0}
        position="absolute" 
        top="-70%"
        p={{
          base: 5,
          lg: 20,
        }}
        boxShadow="2xl"
      >
        <Flex 
          gap={5} 
          justifyContent="space-between"
          flexDirection={{
            base: "row",
            sm: "column-reverse",
            md: "row",
          }}
          position="relative"
        >
          <Container maxW="100%" p={0} border={0}>
            <form>
              <Text 
                as="strong" 
                fontSize={{
                  base: "1.35rem",
                  sm: "2rem",
                  md: "2.6rem",
                  lg: "4.5rem",
                }} 
                color="#ffffff" 
                lineHeight={1}
              >
                Schedule Your Dental <br/> Appointment Today
              </Text>
              <Stack gap={5} maxW={500} mt={10}>
                <Input 
                  type='email'
                  border={0}
                  outline={0}
                  bg="#ffffff"
                  color="#024B6C"
                  borderRadius={0}
                  w={{
                    base: "100%",
                    sm: "70%",
                  }}
                  placeholder='Your Email Adress'
                />

                <Flex
                  gap={4}
                  flexDirection={{
                    base: "column",
                    sm: "row"
                  }}

                >
                  <Select 
                    bg="#ffffff" 
                    color="#024B6C" 
                    borderRadius={0} 
                    placeholder='Select Your Dentist'
                  >
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                  </Select>
                  <Input 
                    size='md' 
                    bg="#ffffff"
                    color="#024B6C"
                    type='datetime-local' 
                    borderRadius={0}
                    placeholder='Select Date and Time' 
                  />
                </Flex>
                
                <Button onClick={() => router.push("/auth/signin")}>Book Now</Button>
              </Stack>
            </form>
          </Container>

          <Image 
            alt='slime'
            src='/smile-image.png'
            position={{
              base: "absolute",
            }}
            top={{
              base: "-3rem",
              sm: "-4rem",
              lg: "-11rem",
            }}
            right={0}
            w={{
              base: 100,
              sm: 170,
              md: 220,
              lg: 500,
            }}
          />
        </Flex>
      </Container> 
    </Center>
  )
}

export default MakeAppointmentSection