import React from "react";
import { Box, Container, Text, Image } from "@chakra-ui/react";

interface ProcessCardProps {
  src: string;
  label: string;
  width: number;
  height: number;
  borderWidth: string;
}

const ProcessCard = (props: ProcessCardProps) => {
  return (
    <Container
      width={{ base: "257px", sm: "257px", md: "361px", lg: "229px" }}
      height={{ base: "257px", sm: "142px", md: "197px", lg: "254.52px" }}
      borderColor="#18AFD3"
      borderRadius="25px"
      borderWidth="2px"
    >
      <Box
        w="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={{ base: 10,sm: 5, lg: 10 }}
        p={10}
      >
        <Box
          width={{ base: "35px", sm: "25px", md: "63px", lg: "63px" }}
          height={{ base: "35px", sm: "25px", md: "63px", lg: "63px" }}
          position="relative"
        >
          <Image
            alt="process img"
            src={props.src}
            objectFit="contain"
          />
        </Box>
        <Text
          fontSize={{ sm: 16, md: 18 }}
          textAlign="center"
          color="black"
          fontWeight={600}
        >
          {props.label}
        </Text>
      </Box>
    </Container>
  );
};

export default ProcessCard;
