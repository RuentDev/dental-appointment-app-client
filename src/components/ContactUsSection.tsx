"use client"
import { Button, Container, Flex, Grid, GridItem, Image, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const ContactUsSection = () => {
  return (
    <Container maxW="100%" height="auto" border={0} bg="white" p={0}>
      <Flex w="100%" flexDirection={{ base: "column", lg: "row"}} justifyContent="center">
        <Stack w="100%">
          <Image src='/img/contact-us-image.png' alt='contact-us-section-image' />
        </Stack>
        <Stack w="100%" px={10}>
          <form action="">
            <Container maxW="100%" height="auto" border={0}>
              <Text 
                as="h2" 
                fontWeight={700}  
                textAlign={{
                  base: "center",
                  lg: "start"
                }}
                fontSize={{
                  base: "2xl",
                  md: "3xl"
                }}
                mt={5}
              >
                CONTACT US FOR MORE INFO. 
              </Text>
              <Grid 
                gap={5}
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                }}
              
              >
                <GridItem w="100%" colSpan={{base: 1, md: 1}}>
                  <Input _placeholder={{color: "#18AFD3"}} name='name' type='text' placeholder='Your Name' w="100%" bg="#EFF5F7" border={0}/>
                </GridItem>
                <GridItem w="100%" colSpan={{base: 1, md: 1}}>
                  <Input _placeholder={{color: "#18AFD3"}} name='email' type='email' placeholder='Your Email' w="100%" bg="#EFF5F7" border={0}/>
                </GridItem>
                <GridItem w="100%" colSpan={{base: 1, md: 1}}>
                  <Input _placeholder={{color: "#18AFD3"}} name='phone' type='tel' placeholder='Your Phone' w="100%" bg="#EFF5F7" border={0}/>
                </GridItem>
                <GridItem w="100%" colSpan={{base: 1, md: 2}}>
                  <Textarea
                      _placeholder={{color: "#18AFD3"}}
                      placeholder='Your message'
                      size='sm'
                      minH={300} bg="#EFF5F7" border={0}
                    />
                </GridItem>
              </Grid>
              <Button mt={5}>Send Message</Button>
            </Container>
          </form>
        </Stack>
      </Flex>
    </Container>
  )
}

export default ContactUsSection