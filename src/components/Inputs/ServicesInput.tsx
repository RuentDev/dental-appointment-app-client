"use client"
import services from '@/data/services.json'
import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import React from 'react'
const ServicesInput = () => {
  return (
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
  )
}

export default ServicesInput