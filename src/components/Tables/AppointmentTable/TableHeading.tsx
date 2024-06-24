import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface TableHeadingProps {};

const tableHeadingColumns = [
  {
    id: 0, 
    title: "Doctor",
  },
  {
    id: 1, 
    title: "Specification",
  },
  {
    id: 2, 
    title: "Date",
  },
  {
    id: 3, 
    title: "Time",
  },
  {
    id: 4, 
    title: "Duration",
  },
  {
    id: 5, 
    title: "Status",
  },
]

const TableHeading:FC<TableHeadingProps> = ({}) => {

  return (
    <Box minH="50px" h="100px"  w="full">
      <Flex w="full" h='full' alignItems="center" justifyContent="space-between" px={5}>
        {tableHeadingColumns.map((column, index) => (
          <Text key={column.id} as='strong' textAlign={index === 0 ? "start" : (tableHeadingColumns.length - 1) === index ? "end" :  "center"} w="full">{column.title}</Text>
        ))}
      </Flex>
    </Box>
  )
};

export default TableHeading;