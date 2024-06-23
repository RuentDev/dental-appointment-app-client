import React from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

interface OrthodonticCardProps {
  src: string;
  label: string;
  width: number;
  height: number;
  borderWidth: string;
}

const OrthodonticCard = (props: OrthodonticCardProps) => {
  return (
    <Container
      position="relative"
      borderWidth={props.borderWidth}
      overflow="hidden"
      _hover={{ '.labelBox': { display: 'flex' } }}
    >
      <Image
        alt="services"
        width={props.width}
        height={props.height}
        src={props.src}
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor="rgba(0, 0, 0, 0)"
        _hover={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
        transition="0.2s ease"
      />
      <Box
        className="labelBox"
        position="absolute"
        top="80%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="230px"
        display="none"
        justifyContent="center"
        alignItems="center"
        backgroundColor="rgba(24, 175, 211, 0.65)"
        color="white"
        textAlign="center"
        padding="10px"
      >
        <Text
          color="white"
          fontWeight="bold"
          fontSize="xl"
          textAlign="center"
          p={4}
        >
          {props.label}
        </Text>
      </Box>
    </Container>
  );
};

export default OrthodonticCard;
