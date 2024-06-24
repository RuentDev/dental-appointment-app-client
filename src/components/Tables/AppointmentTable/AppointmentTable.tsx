import { Avatar, Box, Flex, Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import React from "react";
import TableHeading from "./TableHeading";

interface AppointmentTableProps{};

const AppointmentTable: React.FC<AppointmentTableProps> = ({}) => {
  return (
    <Box bg="white" w="full" h="full" boxShadow="md" borderRadius={10} overflow='hidden'>
      <TableHeading />
      <Box w="full" h="full" borderRadius={10} p={2}  >
        <Box w="full" h="full" borderRadius={10} overflow="hidden" bg="gray.200" p={2}>
          <Grid w="full" h="full" templateColumns="repeat(6, 1fr)" templateRows="repeat(12, 1fr)" gap="1px">
            <GridItem colSpan={6} rowSpan={1}>
              <Flex alignItems="center" h="full" justifyContent="space-between" px={1}>
                <Flex w="full" h="full" alignItems="center" gap={2}>
                  <Avatar size="sm"/>
                  <Text w="full" textAlign="start">James Carter</Text>
                </Flex>
                <Text w="full" textAlign="center">Dentist</Text>
                <Text w="full" textAlign="center">11/12/24</Text>
                <Text w="full" textAlign="center">03:30</Text>
                <Text w="full" textAlign="center">30 minutes</Text>
                <Text w="full" textAlign="end">UPCOMMING</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={6} rowSpan={1}>
              <Flex alignItems="center" h="full" justifyContent="space-between" px={1}>
                <Flex w="full" h="full" alignItems="center" gap={2}>
                  <Avatar size="sm"/>
                  <Text w="full" textAlign="start">Ana Sturgis</Text>
                </Flex>
                <Text w="full" textAlign="center">Dentist</Text>
                <Text w="full" textAlign="center">11/12/24</Text>
                <Text w="full" textAlign="center">03:30</Text>
                <Text w="full" textAlign="center">30 minutes</Text>
                <Text w="full" textAlign="end">UPCOMMING</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={6} rowSpan={1}>
              <Flex alignItems="center" h="full" justifyContent="space-between" px={1}>
                <Flex w="full" h="full" alignItems="center" gap={2}>
                  <Avatar size="sm"/>
                  <Text w="full" textAlign="start">John Smith</Text>
                </Flex>
                <Text w="full" textAlign="center">Dentist</Text>
                <Text w="full" textAlign="center">11/12/24</Text>
                <Text w="full" textAlign="center">03:30</Text>
                <Text w="full" textAlign="center">30 minutes</Text>
                <Text w="full" textAlign="end">UPCOMMING</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={6} rowSpan={1}>
              <Flex alignItems="center" h="full" justifyContent="space-between" px={1}>
                <Flex w="full" h="full" alignItems="center" gap={2}>
                  <Avatar size="sm"/>
                  <Text w="full" textAlign="start">Jane Wong</Text>
                </Flex>
                <Text w="full" textAlign="center">Dentist</Text>
                <Text w="full" textAlign="center">11/12/24</Text>
                <Text w="full" textAlign="center">03:30</Text>
                <Text w="full" textAlign="center">30 minutes</Text>
                <Text w="full" textAlign="end">UPCOMMING</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={6} rowSpan={1}>
              <Flex alignItems="center" h="full" justifyContent="space-between" px={1}>
                <Flex w="full" h="full" alignItems="center" gap={2}>
                  <Avatar size="sm"/>
                  <Text w="full" textAlign="start">Lee Martinez</Text>
                </Flex>
                <Text w="full" textAlign="center">Dentist</Text>
                <Text w="full" textAlign="center">11/12/24</Text>
                <Text w="full" textAlign="center">03:30</Text>
                <Text w="full" textAlign="center">30 minutes</Text>
                <Text w="full" textAlign="end">UPCOMMING</Text>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
};

export default AppointmentTable;