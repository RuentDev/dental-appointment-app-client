import React, { FC } from "react";
import { Container, Flex, Grid, Text } from "@chakra-ui/react";
import orthodonticServicesData from "../../data/orthodonticServices.json";
import Cards from "../Cards";

interface OrthodonticProps {}

const OrthodonticSection: FC<OrthodonticProps> = ({}) => {
  return (
    <Container
      maxW="100%"
      maxH="100%"
      backgroundColor="#EEF8FF"
      fontWeight="700"
      border={0}
      borderRadius={0}
      color="#024B6C"
      p={20}
    >
      <Flex
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        h="full"
      >
        <Text lineHeight="49.03px" fontSize="36px" textAlign="center">
          Orthodontic Services
        </Text>
        <Text fontSize="16px" textAlign="center">
          Our clinic offers all kinds of services and constantly study new
          technology to
          <br />
          add new custom services to the list
        </Text>

        <Grid
          marginTop={10}
          gap={120}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
        >
          {orthodonticServicesData.map((service) => {
            return (
              <Cards.OrthodonticCard
                key={service.id}
                src={service.imgpath}
                label={service.label}
                width={{ sm:"292px", md:"285px", lg: "348px" }}
                height={{ sm:'250px', md:"250px", lg: "308px" }}
                borderWidth="0px"
              />
            );
          })}
        </Grid>
      </Flex>
    </Container>
  );
};

export default OrthodonticSection;
