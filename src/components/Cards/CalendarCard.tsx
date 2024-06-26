"use client";

import { Flex, FlexProps, FormControl, Grid, GridItem, Text, VStack, Input, FormLabel } from "@chakra-ui/react";
import React, { ChangeEvent, FC } from "react";



interface CalendarCardProps {
  containerProps?: FlexProps;
  
}

const CalendarCard: FC<CalendarCardProps> = (props) => {
  
  
  



  const handleClickCurrentDate = () => {
   
  };


  const handleClickSelectTime = () => {
   
  };


  return (
    <Flex boxSize="full" borderRadius={10} overflow="hidden" shadow="base" flexDir="column" gap={10} {...props.containerProps}>
     
    </Flex>
  );
};

export default CalendarCard;
