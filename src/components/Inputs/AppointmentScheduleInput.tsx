import { Flex, Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import CustomCalendar from "../CustomCalendar/CustomCalendar";

interface AppointmentScheduleInputProps {};

const AppointmentScheduleInput:FC<AppointmentScheduleInputProps> = () => {
  return (
    <Flex height="100%" w="full">
      <Stack boxSize={"full"}>
        <CustomCalendar type="DATE" containerStyle={{w: "full",h: "full"}}/>
      </Stack>
    </Flex>
  )
};

export default AppointmentScheduleInput;