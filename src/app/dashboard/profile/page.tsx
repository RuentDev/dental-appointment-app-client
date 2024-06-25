import { Avatar, Box, Container, Flex, Grid, GridItem, Stack, Text, VStack } from '@chakra-ui/react'
import { FaEnvelope, FaPhone, FaPhoneAlt, FaTransgenderAlt } from "react-icons/fa";
import React from 'react'
import Components from '@/components';

export default function ProfilePage() {
  return (
    <Container maxW="full" h="full" border={0} borderRadius={0}>
      <Grid w="full" h="full" templateColumns="repeat(3, 1fr)"  templateRows="repeat(3, 1fr)" gap={5}>
        <GridItem rowSpan={2} colSpan={1} w="full" h="full" borderRadius={10} overflow='hidden' p={2} shadow="base">
          <Stack boxSize="full" gap={1}>
            <Box w="full" h="40%">
              <VStack w="full" h="full" justifyContent="center">
                <Avatar size="2xl"/>
                <Text as="p">Doctor</Text>
                <Text as="strong" fontSize="2xl">Ruentgen Comia</Text>
              </VStack>
            </Box>
            <Box w="full" h="60%">
              <Stack gap={2}>
                <Flex p={1} alignItems="center">
                  <Text as="span" color="gray.300" minW={75}>Email:</Text>
                  <Text>ruent.dev@gmail.com</Text>
                </Flex>
                <Flex p={1} alignItems="center">
                  <Text as="span" color="gray.300" minW={75}>Phone:</Text>
                  <Text>+123 456 678 120</Text>
                </Flex>
                <Flex p={1} alignItems="center">
                  <Text as="span" color="gray.300" minW={75}>Address:</Text>
                  <Text maxWidth={300} fontSize="small"> John Smith. 999 Anywhere St., Apt 555 (variation: 999 Anywhere St #555) Medford</Text>
                </Flex>
                {/* <Flex p={1} alignItems="center" gap={1}>GENDER ICON<Text>Gender: Male</Text></Flex> */}
                {/* <Flex p={1} alignItems="center" gap={1}><FaEnvelope /><Text>Age: ruent.dev@gmail.com</Text></Flex> */}
              </Stack>
            </Box>
          </Stack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} bg='red.200' w="full" h="full" borderRadius={10}>
          LATEST VITALS
        </GridItem>
        {/* <GridItem rowSpan={1} colSpan={1} bg='green.200' w="full" h="full">asd</GridItem> */}
        {/* <GridItem rowSpan={1} colSpan={1} bg='blue.200' w="full" h="full">asd</GridItem> */}
        <GridItem rowSpan={2} colSpan={2} bg='purple.200' w="full" h="full" borderRadius={10}>
          DATA
        </GridItem>
        {/* <GridItem rowSpan={1} colSpan={1} bg='purple.200' w="full" h="full">asd</GridItem> */}
        <GridItem rowSpan={1} colSpan={1} w="full" h="full" borderRadius={10} padding={2}>
         <Flex boxSize="full" alignItems="center" justifyContent="center">
            <Components.Cards.CalendarCard />
         </Flex>
        </GridItem>
        {/* <GridItem rowSpan={1} colSpan={1} bg='gray.200' w="full" h="full">asd</GridItem>
        <GridItem rowSpan={1} colSpan={1} bg='pink.200' w="full" h="full">asd</GridItem> */}
      </Grid>
    </Container>
  )
}