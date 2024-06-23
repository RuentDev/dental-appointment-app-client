import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Hide,
  Show,
  Square,
  Text,
} from "@chakra-ui/react";
import Cards from "../Cards";
import processData from "@/data/process.json";

interface ProcessSectionProps {}

const ProcessSection = () => {
  return (
    <Container maxW="100%" maxH="100%" backgroundColor="#fff" border={0} p={20}>
      <Flex
        display="flex"
        justifyContent="space-between"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        p={20}
      >
        <Flex
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems={{
            base: "column",
            sm: "center",
            md: "center",
            lg: "start",
          }}
          ml={{ lg: 10 }}
          textAlign={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "start",
          }}
        >
          <Box width={{ base: "100%", sm: "100%", md: "80%", lg: "60%" }}>
            <Text width="100%" color="#024B6C" fontWeight={700} fontSize={32}>
              How to get an Appointment from us?
            </Text>
          </Box>
          <Box width={{ sm: "60%", md: "60%", lg: "70%" }} mt={5}>
            <Text
              color="black"
              lineHeight="24px"
              fontWeight={400}
              fontSize={16}
            >
              Our Online Scheduling lets your patients schedule fully booked
              appointments directly into your practice management system
              anytime, and from anywhere. 
            </Text>
          </Box>
          <Hide below="lg">
            <Button mt={5}>Full Process</Button>
          </Hide>
        </Flex>

        <Flex display="flex" justifyContent="center" alignItems="center" p={20}>
          <Grid
            display="flex"
            flexDirection={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
            }}
            w="100%"
            alignItems="center"
            top="50%"
            left="50%"
            maxW="90%"
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(1, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={10}
          >
            {processData.map((process) => {
              return (
                <Cards.ProcessCard
                  key={process.id}
                  src={process.imgpath}
                  label={process.label}
                  width={63}
                  height={63}
                  borderWidth="0px"
                />
              );
            })}
            <Show below="lg">
              <Button mt={5}>Full Process</Button>
            </Show>
          </Grid>
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProcessSection;
