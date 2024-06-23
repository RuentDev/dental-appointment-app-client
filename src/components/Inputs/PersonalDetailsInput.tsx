"use client"
import { FormControl, FormLabel, Grid, GridItem, Input, Textarea } from '@chakra-ui/react'
import React from 'react'

const PersonalDetailsInput = () => {
  return (
    <>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={5}
        boxSize="100%"
      >
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input type='text' placeholder='Your Full Name'/>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input type='tel' placeholder='Your Phone Number'/>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type='email' placeholder='Your Email'/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Notes</FormLabel>
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