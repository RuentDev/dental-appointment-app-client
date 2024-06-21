"use client";
import React, { useState } from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

interface OrthodonticCardProps {
  index: number;
  src: string;
  label: string;
  width: number;
  height: number;
  borderWidth: string;
}

const OrthodonticCard = (props: OrthodonticCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnterFunction = () => {
    setIsHovered(true);
  };

  const onMouseLeaveFunction = () => {
    setIsHovered(false);
  };

  return (
    <Container
      position="relative"
      borderWidth={props.borderWidth}
      onMouseEnter={onMouseEnterFunction}
      onMouseLeave={onMouseLeaveFunction}
      overflow="hidden"
    >
      <Image
        alt="services"
        width={props.width}
        height={props.height}
        src={props.src}
        style={{
          transition: "filter 0.3s ease",
          filter: isHovered ? "blur(5px)" : "none",
        }}
      />
      {isHovered && (
        <Flex>
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            backgroundColor="rgba(0, 0, 0, 0.50)"
            transition="0.2s ease"
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
              color="white"
              fontWeight="bold"
              fontSize="xl"
              textAlign="center"
              p={4}
            >
              {props.label}
            </Text>
          </Box>
        </Flex>
      )}
    </Container>
  );
};

export default OrthodonticCard;
