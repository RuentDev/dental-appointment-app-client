import React, { FC } from "react";
import { Container, Flex, Grid, Text } from "@chakra-ui/react";
import orthodonticServicesData from "../data/orthodonticServices.json";
import Cards from "./Cards";

interface OrthodonticProps {}

const Orthodontic: FC<OrthodonticProps> = ({}) => {
  return (
    <Container
      maxW="100%"
      maxH="100%"
      backgroundColor="#EEF8FF"
      fontWeight="700"
    >
      <Flex
        display="flex"
        flexDirection="column"
        alignItems="center"
        color="#024B6C"
        width="100%"
        marginTop="40px"
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
      </Flex>

      {/* Images for the orthodontic services */}
      <Flex display="flex" justifyContent="center" marginTop="50px">
        <Grid
          top="50%"
          left="50%"
          maxW="90%"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={20}
        >
          {orthodonticServicesData.map((service) => {
            return (
              <Cards.OrthodonticCard
                key={service.id}
                index={service.id}
                src={service.imgpath}
                label={service.label}
                width={450}
                height={308}
                borderWidth="0px"
              />
            );
          })}
        </Grid>
      </Flex>
    </Container>
  );
};

export default Orthodontic;
