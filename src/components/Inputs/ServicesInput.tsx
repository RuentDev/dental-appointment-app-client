"use client"
import services from '@/data/services.json'
import { FormControl, FormLabel, Select, Stack, StackProps } from '@chakra-ui/react'
import React from 'react'

interface ServicesInputProps{
  containerProp?: StackProps
}
const ServicesInput:React.FC<ServicesInputProps> = ({containerProp}) => {
  return (
   <Stack boxSize="100%" {...containerProp}>
    <FormControl>
      <FormLabel>Services</FormLabel>
        <Select placeholder='Please Select Your Service Need' name='service'>
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
        <Select placeholder='Please Select Your Doctor' name='doctor'>
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