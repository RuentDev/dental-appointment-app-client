import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import Image from "next/image";

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
      width={{ sm: "257px", md: "361px", lg: "229px" }}
      height={{ sm: "142px", md: "197px", lg: "254.52px" }}
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
        gap={{sm:5,lg:10}}
        p={10}
      >
        <Box
          width={{ sm: "25px", md: "63px", lg: "63px" }}
          height={{ sm: "25px", md: "63px", lg: "63px" }}
          position="relative"
        >
          <Image
            alt="process img"
            src={props.src}
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Text fontSize={{sm:16, md:18}} textAlign="center" color="black" fontWeight={600}>
          {props.label}
        </Text>
      </Box>
    </Container>
  );
};

export default ProcessCard;
