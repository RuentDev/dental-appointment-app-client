"use client"
import { Flex, GridItem, Text, Avatar } from '@chakra-ui/react'
import React from 'react'

export interface AppointmentProps {
  id: string;
  dentistName: string;
  image: string;
  specialization: string;
  date: string;
  time: string;
  duration: string;
  status: string
}

interface AppointmentTableItemProps {
  appointment: AppointmentProps,
  onClick: (id: string) => void
} 

const AppointmentTableItem:React.FC<AppointmentTableItemProps> = ({appointment, onClick}) => {
  return (
    <GridItem colSpan={6} h="50px" p={2} cursor="pointer" transition="ease-in-out 300ms" bg="gray.50" _hover={{bg: "gray.300"}} onClick={() => onClick(appointment.id)}>
      <Flex alignItems="center" h="full" justifyContent="space-between" px={1}>
        <Flex w="full" h="full" alignItems="center" gap={2}>
          <Avatar size="sm"/>
          <Text w="full" textAlign="start">{appointment.dentistName}</Text>
        </Flex>
        <Text w="full" textAlign="center">{appointment.specialization}</Text>
        <Text w="full" textAlign="center">{appointment.date}</Text>
        <Text w="full" textAlign="center">{appointment.time}</Text>
        <Text w="full" textAlign="center">{appointment.duration}</Text>
        <Text w="full" textAlign="end">{appointment.status}</Text>
      </Flex>
    </GridItem>
  )
}

export default AppointmentTableItem