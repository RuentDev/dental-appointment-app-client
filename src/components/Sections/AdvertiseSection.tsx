import React from "react";
import { Container, Box, Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image";

interface AdvertiseSectionProps {}

const AdvertiseSection = () => {
  return (
    <Container maxW="100%" maxH="100%" border={0}>
      <Box
        width="100%"
        height={{ base: "194px", sm: "194px", md: "266px", lg: "380px" }}
        backgroundColor="#18AFD3"
      >
        <Flex
          position="absolute"
          mt="-190px"
          ml={{ sm: "0%", md: "10%", lg: "10%" }}
        >
          <Box
            width={{ base: "341px", sm: "341px", md: "410.82px", lg: "487px" }}
            height={{ base: "380px", sm: "380px", md: "455px", lg: "578px" }}
            position="relative"
          >
            <Image
              alt="doctor"
              src={"/img/doctor.png"}
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Flex>
        <Flex
          height="100%"
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={{ base: 10, sm: 10, md: 15, lg: 20 }}
        >
          <Text
            textAlign="center"
            marginLeft={{ base: 330, sm: 330, md: 500, lg: 600 }}
            color="#fff"
            fontSize={{ base: 20, sm: 20, md: 24, lg: 36 }}
            fontWeight={700}
          >
            Transforming Smiles with Expertise and <br />
            Passion
          </Text>
          <Button marginLeft={{ base: 330, sm: 330, md: 500, lg: 600 }}>
            Book Appointment
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default AdvertiseSection;
