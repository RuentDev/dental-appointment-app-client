"use client"
import { Grid, GridItem, Stack, Avatar, FormControl, FormLabel, Input, Textarea, Flex, Button, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface AppointmentDetailsFormProps {};

const AppointmentDetailsForm:FC<AppointmentDetailsFormProps> = ({}) => {
  return (
    <Grid w="full" h="full" templateColumns="repeat(4, 1fr)"  templateRows="repeat(12, 1fr)" gap={5} m="auto">
        <GridItem rowSpan={1} colSpan={4} w="full" h="full">
          <Stack alignItems='center' justifyContent={"center"}>
            <Avatar size="2xl" />
            <Text fontSize="small">Dentist</Text>
            <Text as="strong" fontSize="2xl">John Doe</Text>
          </Stack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} w="full" h="full">
          <Stack>
            <Text>Name</Text>
            <Text>Ruentgen Comia</Text>
          </Stack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} w="full" h="full">
          <Stack>
            <Text>Email</Text>
            <Text>ruent.dev@gmail.com</Text>
          </Stack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} w="full" h="full">
          <Stack>
            <Text>Age</Text>
            <Text>25</Text>
          </Stack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} w="full" h="full">
          <Stack>
            <Text>Gender</Text>
            <Text>Male</Text>
          </Stack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} w="full" h="full">
          <Stack>
            <Text>Phone</Text>
            <Text>+123 456 789 120</Text>
          </Stack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} w="full" h="full">
          <FormControl>
            <FormLabel>Select Date</FormLabel>
            <Input type="date" />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} w="full" h="full">
          <FormControl>
            <FormLabel>Select Time</FormLabel>
            <Input type="time" />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} w="full" h="full"></GridItem>
        <GridItem rowSpan={2} colSpan={4} w="full" h="full">
          <FormControl>
            <FormLabel>Problem</FormLabel>
            <Textarea resize="none" />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={3} w="full" h="full"></GridItem>
        <GridItem rowSpan={1} colSpan={1} w="full" h="full">
          <Flex boxSize="full" gap={1}>
            <Button borderRadius={10} bg="gray.400">Back</Button>
            <Button borderRadius={10} bg="blue.400">Reschedule</Button>
          </Flex>
        </GridItem>
      </Grid>
  )
};

export default AppointmentDetailsForm;