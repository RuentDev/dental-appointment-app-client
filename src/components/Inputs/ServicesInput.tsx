"use client"
import services from '@/data/services.json'
import { FormControl, FormLabel, Select, Stack } from '@chakra-ui/react'
import React from 'react'

const ServicesInput = () => {
  return (
   <Stack boxSize="100%">
    <FormControl>
        <FormLabel>Services</FormLabel>
        <Select placeholder='Please Select Your Service Need'>
          {services.map((service) => (
            <option 
              value='option1' 
              key={service.id}
            >
              {service.title}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Select Your Doctor</FormLabel>
        <Select placeholder='Please Select Your Doctor'>
          {services.map((service) => (
            <option 
              value='option1' 
              key={service.id}
            >
              {service.title}
            </option>
          ))}
        </Select>
      </FormControl>
   </Stack>
  )
}

export default ServicesInput