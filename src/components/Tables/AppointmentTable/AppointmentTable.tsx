'use client'
import { Box, Container, Flex, Grid } from "@chakra-ui/react";
import React from "react";
import TableHeading from "./TableHeading";
import AppointmentTableItem, { AppointmentProps } from "./AppointmentTableItem";
import { useRouter } from "next/navigation";


const tableData: AppointmentProps[] = [
  {
    id: "0",
    image: "/",
    dentistName: "Dr. John Doe",
    specialization: "Cardiology",
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
]

interface AppointmentTableProps{
  data?: []
  tableHeight: string | number
};


const AppointmentTable: React.FC<AppointmentTableProps> = ({}) => {

  const router = useRouter()
  
  const handleItemClick = (id: string) => {
    router.push(`/dashboard/appointments/${id}`)
  }

  return (
    <Container maxW="100%" w="100%" pos="relative">
      <TableHeading />
      <Flex w="100%" h="90%" p={1} overflow="hidden">
        <Box w="full" h="full">
          <Grid 
            w="full"
            maxH="85vh"
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
    </Container>
  )
};

export default AppointmentTable;