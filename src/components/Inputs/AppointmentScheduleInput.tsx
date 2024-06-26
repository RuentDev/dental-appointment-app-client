"use client"
import { Flex, Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import CustomCalendar from "../CustomCalendar/CustomCalendar";

interface AppointmentScheduleInputProps {};

const AppointmentScheduleInput:FC<AppointmentScheduleInputProps> = () => {

  const handleCalendarClickCB = (day: Date) => {
    console.log(day)
  }

  return (
    <Flex height="100%" w="full">
      <Stack boxSize={"full"}>
        <CustomCalendar 
          onSelectDate={handleCalendarClickCB}
          excludedDates={[29, 30]}
          containerStyle={{
            w: "full",
            h: "full"
          }}
        />
      </Stack>
    </Flex>
  )
};

export default AppointmentScheduleInput;