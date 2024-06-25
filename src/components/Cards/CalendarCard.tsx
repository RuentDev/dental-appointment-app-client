"use client"

import { Flex, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import React, { FC, SetStateAction } from "react";

type CalendarDateProps = {
  date: number | null; 
  month: number; 
  year: number
}

interface CalendarCardProps {

};

const CalendarCard:FC<CalendarCardProps> = ({}) => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [daysInMonth, setDaysInMonth] = React.useState<Array<CalendarDateProps>>();
  
  
  
  React.useEffect(() => {
      const date = new Date(currentDate);
      const year = date.getFullYear();
      const month = date.getMonth();
  
      // Get the first and last days of the month
      const firstDay = new Date(year, month, 1).getDay();
      const lastDate = new Date(year, month + 1, 0).getDate();
  
      // // Create an array for the days
      // const lastDateOfPrevMonth = new Date(year, month, 0).getDate();
      // const prevMonthDays = [...Array(firstDay).keys()].map(
      //   day => lastDateOfPrevMonth - firstDay + day + 1
      // );
  
      // // Days from the next month
      // const nextMonthDays = [...Array((7 - (lastDate + firstDay) % 7) % 7).keys()].map(
      //   day => day + 1
      // );
  
      const daysArray: CalendarDateProps[] = [
        ...Array.from({ length: firstDay }, () => ({date: null, month: month, year})), // Empty slots for the days before the 1st of the month
        ...Array.from({ length: lastDate }, (_, i) => ({date: i + 1, month: month, year})) // Days of the current month
      ];

      setDaysInMonth(daysArray);


  }, [currentDate]);

  const handleClickCurrentDate = (date: any) => {
    if (date) {
      const newDate = new Date(currentDate);
      newDate.setDate(date);
      setCurrentDate(newDate);
    }

  }

  const goToNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const goToPrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };


  return (
    <Flex boxSize="full" borderRadius={10} overflow="hidden" shadow="base">
      <Grid w="full" h="full" templateColumns="repeat(7, 1fr)"  templateRows="repeat(7, 1fr)" gap="1px">
        <GridItem rowSpan={1} colSpan={7} w="full" h="full">
         <Flex w="full" h="full" alignItems="center" justifyContent="center">
            <Text w="full" h="full" display="flex" alignItems="center" justifyContent="center" userSelect="none">S</Text>
            <Text w="full" h="full" display="flex" alignItems="center" justifyContent="center" userSelect="none">M</Text>
            <Text w="full" h="full" display="flex" alignItems="center" justifyContent="center" userSelect="none">T</Text>
            <Text w="full" h="full" display="flex" alignItems="center" justifyContent="center" userSelect="none">W</Text>
            <Text w="full" h="full" display="flex" alignItems="center" justifyContent="center" userSelect="none">T</Text>
            <Text w="full" h="full" display="flex" alignItems="center" justifyContent="center" userSelect="none">F</Text>
            <Text w="full" h="full" display="flex" alignItems="center" justifyContent="center" userSelect="none">S</Text>
         </Flex>
        </GridItem>
          {daysInMonth && daysInMonth.map((day, index) => {
            return(
              <GridItem 
                w="full" 
                h="full" 
                key={index} 
                rowSpan={1} 
                colSpan={1} 
                cursor="pointer"
                _hover={{bg: day !== null ? "gray.300" : ""}}
                onClick={() => handleClickCurrentDate(day.date)}
                bg={day.date !== null ? currentDate.getDate() === day.date ? "gray.300" : "gray.100" : ""}
              >
                <VStack alignItems="center" justifyContent="center" h="full">
                  <Text userSelect="none" color={day.date !== null ? currentDate.getDate() === day.date ? "white" : "" : ""}>{day.date}</Text>
                </VStack>
              </GridItem>
            )
          })}
      </Grid>
    </Flex>
  )
};

export default CalendarCard;