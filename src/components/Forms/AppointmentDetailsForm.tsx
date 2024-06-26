"use client"
import { Grid, GridItem, Stack, Avatar, FormControl, FormLabel, Input, Textarea, Flex, Button, Text, Box } from "@chakra-ui/react";
import React, { FC } from "react";

interface AppointmentDetailsFormProps {};

const AppointmentDetailsForm:FC<AppointmentDetailsFormProps> = ({}) => {
  return (
    <Box position="relative" w="full" h="full" p={20}>
      <Grid w="full" h="full" templateColumns="repeat(4, 1fr)" templateRows="repeat(12, 1fr)" gap={5} m="auto">
        <GridItem rowSpan={1} colSpan={4} w="full" h="full">
          <Stack alignItems='center' justifyContent={"center"}>
            <Avatar size="2xl" />
            <Text fontSize="small">Dentist</Text>
            <Text as="strong" fontSize="2xl">John Doe</Text>
          </Stack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} w="full" h="full" backgroundColor='#18AFD3'>
          <Text fontWeight={700} fontSize={20} display='flex' width='100%' justifyContent='center' color='white'>
            Patient Information
          </Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} w="full" h="full">
          <Stack>
            <Text as='strong'>Name</Text>
            <Text>Ruentgen Comia</Text>
          </Stack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} w="full" h="full">
          <Stack>
            <Text as='strong'>Email</Text>
            <Text>ruent.dev@gmail.com</Text>
          </Stack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} w="full" h="full">
          <Stack>
            <Text as='strong'>Age</Text>
            <Text>25</Text>
          </Stack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} w="full" h="full">
          <Stack>
            <Text as='strong'>Gender</Text>
            <Text>Male</Text>
          </Stack>
        </GridItem>
        <GridItem rowSpan={2} colSpan={2} w="full" h="full">
          <Stack>
            <Text as='strong'>Phone</Text>
            <Text>+123 456 789 120</Text>
          </Stack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} w="full" h="full" backgroundColor='#18AFD3'>
          <Text fontWeight={700} fontSize={20} display='flex' width='100%' justifyContent='center' color='white'>
            Appointment Information
          </Text>
        </GridItem>        
        <GridItem rowSpan={1} colSpan={1} w="full" h="full">
          <FormControl >
            <FormLabel >Select Date</FormLabel>
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
        <GridItem rowSpan={2} colSpan={4} w="full" h="full"></GridItem>
      </Grid>
      
      <Box display='flex' position="absolute" width='full' justifyContent='space-between' bottom="20px" left="0px" p={20}>
        <Button borderRadius={10} bg="gray.400">Back</Button>
        <Button borderRadius={10} bg="blue.400">Reschedule</Button>
      </Box>
    </Box>
  )
};

export default AppointmentDetailsForm;
