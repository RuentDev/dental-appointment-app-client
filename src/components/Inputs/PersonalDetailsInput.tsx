"use client"
import { FormControl, FormLabel, Grid, GridItem, Input, Textarea } from '@chakra-ui/react'
import React from 'react'

const PersonalDetailsInput = () => {
  return (
    <>
      <Grid
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(8, 1fr)"
        gap={5}
        boxSize="100%"
      >
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input type='text' placeholder='Your First Name'/>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input type='text' placeholder='Your Last Name'/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Age</FormLabel>
              <Input type='number' placeholder='Your Age'/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input type='tel' placeholder='Your Phone Number'/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type='email' placeholder='Your Email'/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={4}>
            <FormControl>
              <FormLabel>Describe what you feel</FormLabel>
              <Textarea 
                minH="200px"
                placeholder='Say something ...'
              />
            </FormControl>
          </GridItem>
      </Grid>
    </>
  )
}

export default PersonalDetailsInput