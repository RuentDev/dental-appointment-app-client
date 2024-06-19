"use client"
import { Box, Container, Flex, Icon, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { FaPhoneAlt, FaRegCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
interface NavbarProps {};

const Navbar:FC<NavbarProps> = ({}) => {
  return (
    <nav>
      <Container maxW="100%" height={70} border={0} backgroundColor="blue.300">
        <Flex 
          w="100%" 
          h="100%" 
          alignItems="center" 
          justifyContent={{
            base: "center", 
            sm: "space-between"
          }} 
          flexDirection={{
            base: "column", 
            sm: "row"
          }} 
        >
          <Container border={0}>
            <Flex justifyContent="space-evenly" alignItems="center">
              <Box>
                <Flex justifyContent="space-evenly" alignItems="center" gap={1}>
                  <Icon as={FaPhoneAlt} fontSize="medium" color="white" />
                  <Text color="white" as="strong" fontSize="smaller">Call: +1 900 521 97 24</Text>
                </Flex>
              </Box>
              <Box>
                <Flex justifyContent="space-evenly" alignItems="center" gap={1}>
                  <Icon as={FaLocationDot} fontSize="medium" color="white"/>
                  <Text color="white" as="strong" fontSize="smaller">Melbourne,Sydney, Australia</Text>
                </Flex>
              </Box>
            </Flex>
          </Container>
          <Container border={0}>
            <Box>
              <Flex alignItems="center" justifyContent={{base: "center"}} gap={1}>
                <Icon as={FaRegCalendar} fontSize="medium" color="white"/>
                <Text as="strong" color="white" fontSize="smaller">Open Hours: Mon-Sat: 8:00am-6:00pm | Sun: Closed</Text>
              </Flex>
            </Box>
          </Container>
        </Flex>
      </Container>

    </nav>
  )
};

export default Navbar;