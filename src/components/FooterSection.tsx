import React from "react";
import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import navLinksData from "@/data/navLinks.json";
import orthodonticServiceData from "@/data/orthodonticServices.json";
import contactsData from "@/data/contact.json";

interface FooterSectionProps {}

const FooterSection = (props: FooterSectionProps) => {
  return (
    <Container
      maxW="100%"
      maxH="100%"
      backgroundColor="#EEF8FF"
      fontWeight="700"
      border={0}
      p={0}
    >
      <Flex
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="504px"
        backgroundColor="#18AFD3"
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
        >
          {/* logo & working hours content */}
          <Box>
            <Image
              alt="denteria"
              src="/img/denteria-logo.png"
              width={263}
              height={78}
            />
            <Flex ml={5} display="flex" flexDirection="column">
              <Flex>
                <Image
                  alt="clock"
                  src="/img/clock-icon.png"
                  width={25}
                  height={25}
                />
                <Text textColor="white" fontSize={20}>
                  Working Hours:
                </Text>
              </Flex>
              <Text textColor="white" fontSize={16} fontWeight={500}>
                Mon-Fri: 8:00am-6:00pm
              </Text>
              <Text textColor="white" fontSize={16} fontWeight={500}>
                Saturday: 9:00am-3:00pm
              </Text>
              <Text textColor="white" fontSize={16} fontWeight={500}>
                Sunday: Closed
              </Text>
            </Flex>
          </Box>

          {/* quick links content */}
          <Box>
            <Text textColor="white" fontSize={20}>
              Quick Links
            </Text>
            {navLinksData.slice(1, 6).map((link) => {
              return (
                <Text cursor='pointer' mt={1} textColor="white" fontSize={16} fontWeight={500}>
                  {link.label}
                </Text>
              );
            })}
          </Box>

          {/* services content */}
          <Box>
            <Text textColor="white" fontSize={20}>
              Services
            </Text>
            {orthodonticServiceData.map((service) => {
              return (
                <Text mt={1} textColor="white" fontSize={16} fontWeight={500}>
                  {service.label}
                </Text>
              );
            })}
          </Box>

          {/* contact us content */}
          <Box>
            <Text textColor="white" fontSize={20}>
              Contact Us
            </Text>
            {contactsData.slice(0, 3).map((contact) => {
              return (
                <Flex mt={2}>
                  <Image
                    key={contact.id}
                    alt="contact"
                    src={contact.imgpath}
                    width={25}
                    height={25}
                  />
                  <Text textColor="white" fontWeight={600} fontSize={16}>
                    {contact.label}
                  </Text>
                </Flex>
              );
            })}
            <Flex gap={5} mt={5}>
              {contactsData.slice(3, 6).map((contact) => {
                return (
                  <Flex display="flex">
                    <Image
                      key={contact.id}
                      alt="contact"
                      src={contact.imgpath}
                      width={25}
                      height={25}
                    />
                  </Flex>
                );
              })}
            </Flex>
          </Box>
        </Grid>
      </Flex>

      <Flex
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="103px"
        backgroundColor="#024B6C"
      >
        <Text color="#18AFD3">Denteria</Text>
        <Text color="white">©2024. All Rights Reserved</Text>
      </Flex>
    </Container>
  );
};

export default FooterSection;
