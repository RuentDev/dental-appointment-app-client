"use client"
import { Box, Button, Container, Drawer, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Grid, GridItem, Icon, IconButton, Input, ListItem, Text, UnorderedList, useDisclosure } from "@chakra-ui/react";
import { FaPhoneAlt, FaRegCalendar, FaBars } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import React, { FC } from "react";
import Link from "next/link";
import navLinks from '@/data/navLinks.json'
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCookies } from  'next-client-cookies'

interface NavbarProps {};

const Navbar:FC<NavbarProps> = ({}) => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const path = usePathname()
  const  cookie = useCookies()


  const handleSigninBtnClick = () => {
    if(cookie.get("dental-app-login")) {
      router.push("/dashboard")
    }else{
      router.push("/auth/signin")
    }
  }

  return (
    <nav style={{position: "fixed", width: "100%", height: "auto", zIndex: 999, display: path.includes("dashboard") ? "none" : ""}}>
      <Container 
        maxW="100%" 
        height={70} 
        border={0}
        borderRadius={0} 
        px={20} 
        backgroundColor="#18AFD3" 
        display={{
          base: "none", 
          md: "block"
        }}
      >
        <Flex 
          w="100%" 
          h="100%" 
          alignItems="center" 
          justifyContent={{
            base: "center", 
            sm: "space-between"
          }} 
          flexDirection={{
            base: "column", 
            sm: "row"
          }} 
        >
          <Container border={0} borderRadius={0}>
            <Flex justifyContent="start" alignItems="center" gap={10}>
              <Box>
                <Flex justifyContent="space-evenly" alignItems="center" gap={1}>
                  <Icon as={FaPhoneAlt} fontSize="medium" color="white" />
                  <Text color="white" as="strong" fontSize="smaller">Call: +1 900 521 97 24</Text>
                </Flex>
              </Box>
              <Box>
                <Flex justifyContent="space-evenly" alignItems="center" gap={1}>
                  <Icon as={FaLocationDot} fontSize="medium" color="white"/>
                  <Text color="white" as="strong" fontSize="smaller">Melbourne,Sydney, Australia</Text>
                </Flex>
              </Box>
            </Flex>
          </Container>
          <Container border={0} borderRadius={0}>
            <Box>
              <Flex alignItems="center" justifyContent={{base: "center", md: "end"}} gap={1}>
                <Icon as={FaRegCalendar} fontSize="medium" color="white"/>
                <Text as="strong" color="white" fontSize="smaller">Open Hours: Mon-Sat: 8:00am-6:00pm | Sun: Closed</Text>
              </Flex>
            </Box>
          </Container>
        </Flex>
      </Container>
      
      <Container maxW="100%" height={100} px={20} display={{base: "none", md: "block"}} border={0} bg="#ffffff" borderRadius={0}>
        <Grid templateColumns='1fr 3fr 1fr' gap={6} height="100%">
          <GridItem w='100%' maxH="100%">
            <Flex w="100%" height="100%" alignItems="center" justifyContent="start">
              <Link href="/">
                <Image 
                  width={200}
                  height={200}
                  alt='logo'
                  src="/logo.png"
                  style={{
                    width: "auto",
                    height: "auto"
                  }}
                  priority
                />
              </Link>
            </Flex>
          </GridItem>
          <GridItem w='100%' h="100%">
            <UnorderedList listStyleType="none" w="100%" h="100%">
              <Flex w="100%" h="100%" alignItems="center" justifyContent="space-evenly">
                {
                  navLinks.map((nav) => (
                    <ListItem key={nav.id} fontWeight="bold" color="#024B6C"><Link href={nav.link}>{nav.label}</Link></ListItem>
                  ))
                }
              </Flex>
            </UnorderedList>
          </GridItem>
          <GridItem w='100%' maxH="100%">
            <Flex height="100%" width="100%" alignItems="center" justifyContent="end">
              <Button onClick={handleSigninBtnClick}>
                {cookie.get("dental-app-login") ? "Dashboard" : "Signin"}
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      </Container>

      <Container 
        px={15}
        w="100%" 
        maxW="100%" 
        h={70} 
        border={0} 
        backgroundColor="#18AFD3" 
        display={{
          base: "block", 
          md: "none"
        }}
      >
        <Flex h="100%" alignItems="center" justifyContent="start">
          <IconButton
            backgroundColor="transparent"
            aria-label='Search database'
            icon={<FaBars color="#ffffff" />}
            padding={0}
            minW={50}
            h={50}
            onClick={onOpen}
          />
        </Flex>
      </Container>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </nav>
  )


};

export default Navbar;