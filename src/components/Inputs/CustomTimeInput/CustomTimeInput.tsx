import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { FC } from "react";


const availableTimes = [
  {
    id: 0,
    time: "08:00am - 09:00am",
    
  },
  {
    id: 1,
    time: "09:00am - 10:00am",
  },
  {
    id: 2,
    time: "10:00am - 11:00am",
  },
  {
    id: 3,
    time: "11:00am - 12:00pm",
  },
  {
    id: 4,
    time: "01:00pm - 02:00pm",
  },
  {
    id: 5,
    time: "02:00pm - 03:00pm",
  },
  {
    id: 6,
    time: "03:00pm - 04:00pm",
  },
  {
    id: 7,
    time: "04:00pm - 05:00pm",
  },
]

interface CustomTimeInputProps {};
const CustomTimeInput:FC<CustomTimeInputProps> = (props) => {
  return (
    <Container maxW="full" h="full">
      <Grid w="full" h="full" templateColumns="repeat(4, 1fr)" templateRows="repeat(8, 1fr)">
        {availableTimes.map((time) => (
          <GridItem key={time.id} w="full" colSpan={1} display="flex" alignItems="center" justifyContent="center">
            <Text textAlign="center" padding={1} bg="blue.300" color="white" minW={150} borderRadius={10}>{time.time}</Text>
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
};

export default CustomTimeInput;