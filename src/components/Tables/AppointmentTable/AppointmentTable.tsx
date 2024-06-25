'use client'
import { Box, Container, Flex, Grid, ContainerProps, IconButton } from "@chakra-ui/react";
import React from "react";
import TableHeading from "./TableHeading";
import AppointmentTableItem, { AppointmentProps } from "./AppointmentTableItem";
import { useRouter } from "next/navigation";
import { IoIosAddCircle } from "react-icons/io";

const tableData: AppointmentProps[] = [
  {
    id: "0",
    image: "/",
    dentistName: "Dr. John Doe",
    specialization: "Dentist",
    date: "May 15, 2022",
    time: "10:00 AM",
    duration: "2 hours",
    status: "CANCELLED"
  },
  {
    id: "1",
    image: "/",
    dentistName: "Dr. John Smith",
    specialization: "Dentist",
    date: "May 15, 2022",
    time: "10:00 AM",
    duration: "2 hours",
    status: "UPCOMMING"
  },
  {
    id: "2",
    image: "/",
    dentistName: "Dr. Ana Carter",
    specialization: "Dentist",
    date: "May 18, 2022",
    time: "10:00 AM",
    duration: "2 hours",
    status: "UPCOMMING"
  },
  {
    id: "3",
    image: "/",
    dentistName: "Dr. Harry Potter",
    specialization: "Dentist",
    date: "May 19, 2022",
    time: "10:00 AM",
    duration: "2 hours",
    status: "UPCOMMING"
  },
  {
    id: "4",
    image: "/",
    dentistName: "Dr. Harry Potter",
    specialization: "Dentist",
    date: "May 19, 2022",
    time: "10:00 AM",
    duration: "2 hours",
    status: "PENDING"
  },
  {
    id: "5",
    image: "/",
    dentistName: "Dr. Harry Potter",
    specialization: "Dentist",
    date: "May 19, 2022",
    time: "10:00 AM",
    duration: "2 hours",
    status: "UPCOMMING"
  },
  {
    id: "6",
    image: "/",
    dentistName: "Dr. Harry Potter",
    specialization: "Dentist",
    date: "May 19, 2022",
    time: "10:00 AM",
    duration: "2 hours",
    status: "UPCOMMING"
  },
  {
    id: "7",
    image: "/",
    dentistName: "Dr. Harry Potter",
    specialization: "Dentist",
    date: "May 19, 2022",
    time: "10:00 AM",
    duration: "2 hours",
    status: "UPCOMMING"
  },
]

interface AppointmentTableProps{
  data?: []
  props?: ContainerProps
};


const AppointmentTable: React.FC<AppointmentTableProps> = ({props}) => {

  const router = useRouter()
  
  const handleItemClick = (id: string) => {
    router.push(`/dashboard/appointments/${id}`)
  }

  const handleNewItemClick = () => {
    router.push(`/dashboard/appointments/new`)
  }

  return (
    <Container maxW="100%" w="100%" pos="relative" py={5} {...props}>
      <TableHeading />
      <Flex w="100%" h="90%" p={1} overflow="hidden">
        <Box w="full" h="full">
          <Grid 
            w="full"
            maxH="full"
            gap="1px"
            templateColumns="repeat(6, 1fr)" 
            overflow="auto"
          >
            {tableData.map((appointment) => (
              <AppointmentTableItem 
                key={tableData[0].id}
                appointment={appointment}
                onClick={handleItemClick}
              />
            ))}
          </Grid>
        </Box>
      </Flex>
      <IconButton 
        bottom={5}
        right={5} 
        pos="absolute" 
        minW={50}
        w={50}
        h={50}
        minH={50}
        isRound
        bg="gray.400"
        icon={<IoIosAddCircle />}   
        aria-label="add-appointment"
        title="New Appointment"
        _hover={{borderRadius:"50%", bg: "gray.500"}}
        onClick={handleNewItemClick}
      />
    </Container>
  )
};

export default AppointmentTable;