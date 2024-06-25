"use client";
import React from "react";
import { Box, Button, Container, Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import navLinksData from "@/data/navLinks.json";
import orthodonticServiceData from "@/data/orthodonticServices.json";
import contactsData from "@/data/contacts.json";
import { usePathname } from "next/navigation";

interface FooterSectionProps {}

const Footer = (props: FooterSectionProps) => {
  const path = usePathname();

  return (
    <footer
      style={{
        position: "absolute",
        width: "100%",
        bottom: 0,
        display: path.includes("dashboard") ? "none" : "block",
      }}
    >
      <Container
        position="absolute"
        maxW="100%"
        minH={{ base: "1039px", sm: "1039px", md: "auto", lg: "auto" }}
        border={0}
        backgroundColor="#18AFD3"
        p={0}
        pb={{ sm: "103px", md: "0", lg: "0" }}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          height="504px"
          backgroundColor="#18AFD3"
          paddingLeft={20}
          paddingTop={{ base: "500px", sm: "400px", md: 0, lg: 0 }}
        >
          <Grid
            paddingBottom={{ lg: "100px" }}
            paddingLeft={{base:'0px'}}
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
          >
            {/* logo & working hours content */}
            <Box position="relative">
              <Box
                position="absolute"
                top={{ base: "-55px", sm: "25px", md: "1px", lg: "-30px" }}
                left={{ base: "20%", sm: "20%", md: "15%", lg: "30%" }}
                transform="translateX(-50%)"
                width={{
                  base: "193px",
                  sm: "193px",
                  md: "151.53px",
                  lg: "263px",
                }}
                height={{ base: "47px", sm: "47px", md: "44px", lg: "78px" }}
              >
                <Image
                  alt="denteria"
                  src="/img/denteria-logo.png"
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
              <Flex
                mt={{ sm: "100px", md: 16, lg: 16 }}
                mr="1%"
                flexDirection="column"
              >
                <Flex>
                  <Image
                    alt="clock"
                    src="/img/clock-icon.png"
                    width={29}
                    height={25}
                    style={{ marginLeft: "-2%" }}
                  />
                  <Text
                    ml="3%"
                    textColor={{ sm: "#024B6C", md: "white", lg: "white" }}
                    fontSize={{ md: 18, lg: 20 }}
                    fontWeight={700}
                  >
                    Working Hours:
                  </Text>
                </Flex>
                <Flex ml="9%" flexDirection="column">
                  <Text
                    textColor="white"
                    fontSize={{ lg: 16 }}
                    fontWeight={500}
                  >
                    Mon-Fri: 8:00am-6:00pm
                  </Text>
                  <Text
                    textColor="white"
                    fontSize={{ lg: 16 }}
                    fontWeight={500}
                  >
                    Saturday: 9:00am-3:00pm
                  </Text>
                  <Text
                    textColor="white"
                    fontSize={{ lg: 16 }}
                    fontWeight={500}
                  >
                    Sunday: Closed
                  </Text>
                </Flex>
              </Flex>
              <Button mt={10}>Book Appointment</Button>
            </Box>

            {/* quick links content */}
            <Box mt={{ base: 5, sm: 10, md: 3 }}>
              <Text
                textColor={{ sm: "#024B6C", md: "white", lg: "white" }}
                fontSize={20}
                fontWeight={700}
              >
                Quick Links
              </Text>
              {navLinksData.slice(1, 6).map((link) => (
                <Text
                  key={link.label}
                  cursor="pointer"
                  mt={2}
                  textColor="white"
                  fontSize={16}
                  fontWeight={500}
                >
                  {link.label}
                </Text>
              ))}
            </Box>

            {/* services content */}
            <Box marginTop={{ base: 5, sm: 5 }}>
              <Text
                textColor={{ sm: "#024B6C", md: "white", lg: "white" }}
                fontSize={20}
                fontWeight={700}
              >
                Services
              </Text>
              {orthodonticServiceData.map((service) => (
                <Text
                  key={service.label}
                  mt={2}
                  textColor="white"
                  fontSize={16}
                  fontWeight={500}
                >
                  {service.label}
                </Text>
              ))}
            </Box>

            {/* contact us content */}
            <Box marginTop={{ base: 5, sm: 5 }}>
              <Text
                textColor={{ sm: "#024B6C", md: "white", lg: "white" }}
                fontSize={20}
                fontWeight={700}
              >
                Contact Us
              </Text>
              {contactsData.slice(0, 3).map((contact) => (
                <Flex key={contact.id} mt={2}>
                  <Image
                    alt="contact"
                    src={contact.imgpath}
                    width={25}
                    height={25}
                  />
                  <Text textColor="white" ml={3} fontWeight={600} fontSize={16}>
                    {contact.label}
                  </Text>
                </Flex>
              ))}
              <Flex gap={5} mt={5}>
                {contactsData.slice(3, 6).map((contact) => (
                  <Flex cursor="pointer" key={contact.id}>
                    <Image
                      alt="contact"
                      src={contact.imgpath}
                      width={25}
                      height={25}
                    />
                  </Flex>
                ))}
              </Flex>
            </Box>
          </Grid>
        </Flex>

        <Flex
          justifyContent="center"
          alignItems="center"
          height="103px"
          backgroundColor="#024B6C"
          position={{
            base: "absolute",
            sm: "absolute",
            md: "relative",
            lg: "relative",
          }}
          bottom={{ base: 0, sm: 0, md: "auto", lg: "auto" }}
          width="100%"
        >
          <Text color="#18AFD3" fontWeight={700} mr={2}>
            Denteria
          </Text>
          <Text color="white" fontWeight={700}>
            ©2024. All Rights Reserved
          </Text>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
