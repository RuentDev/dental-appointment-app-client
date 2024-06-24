import React, { FC } from "react";
import { Box } from '@chakra-ui/react'
import AppointmentTable from "./AppointmentTable";

interface AppointmentTableContentProps {};

const AppointmentTableContent:FC<AppointmentTableContentProps> = ({}) => {
  return (
    <Box w="full" h="full">
      <AppointmentTable />
    </Box>
  )
};

export default AppointmentTableContent;