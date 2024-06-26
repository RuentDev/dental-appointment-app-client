"use client"
import { Flex, FlexProps, FormControl, FormLabel, Grid, GridItem, Input, Textarea } from '@chakra-ui/react'
import React from 'react'

interface PersonalDetailsInputProps{
  containerProps?: FlexProps
}

const PersonalDetailsInput:React.FC<PersonalDetailsInputProps> = ({containerProps}) => {
  return (
    <Flex w="full" h="full" {...containerProps}>
      <Grid
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(8, 1fr)"
        gap={5}
        boxSize="100%"
      >
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input type='text' name='name' placeholder='Your First Name'/>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input type='text' name='name' placeholder='Your Last Name'/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Age</FormLabel>
              <Input type='number' name='name' placeholder='Your Age'/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input type='tel' name='name' placeholder='Your Phone Number'/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type='email' name='name' placeholder='Your Email'/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={4}>
            <FormControl>
              <FormLabel>Describe what you feel</FormLabel>
              <Textarea 
                minH="200px"
                name='description'
                placeholder='Say something ...'
              />
            </FormControl>
          </GridItem>
      </Grid>
    </Flex>
  )
}

export default PersonalDetailsInput