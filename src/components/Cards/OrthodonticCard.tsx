import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import Image from "next/image";

interface OrthodonticCardProps {
  index: number;
  icon: string;
  label: string;
  width: number;
  height: number;
}

const OrthodonticCard = (props: OrthodonticCardProps) => {
  return (
    <Container position="relative">
      <Image
        alt="services"
        width={props.width}
        height={props.height}
        src={props.icon}
      />
      <Box
        position="absolute"
        top="80%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="230px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="rgba(24, 175, 211, 0.65)"
        color="white"
        textAlign="center"
        padding="10px"
      >
        <Text
          color="#FFFFFF"
          fontWeight="800"
          lineHeight="25.3px"
          width="100%"
          alignItems="center"
        >
          {props.label}
        </Text>
      </Box>
    </Container>
  );
};

export default OrthodonticCard;
