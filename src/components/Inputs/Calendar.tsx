"use client"
import React from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, DayValue } from "react-modern-calendar-datepicker";

interface CalendarInputProps {
  excludedDays: any[]
};

const CalendarInput = ({excludedDays, }: CalendarInputProps) => {
  
  const defaultValue = {
    year: 2024,
    month: 6,
    day: 22,
  };

  const disabledDays = [
    {
      year: 2024,
      month: 6,
      day: 27,
    },
    {
      year: 2024,
      month: 6,
      day: 28,
    },
    {
      year: 2024,
      month: 6,
      day: 29,
    }
  ];

  const [selectedDay, setSelectedDay] = React.useState(defaultValue);

  const handleDisabledSelect = (disabledDay: DayValue) => {
    console.log('Tried selecting a disabled day', disabledDay);
  };
  const handleOnChangeValue = (disabledDay: DayValue) => {
    console.log('Tried selecting a disabled day', disabledDay);
  };

  return (
    <Calendar
      value={selectedDay}
      colorPrimary="#18AFD3"
      disabledDays={disabledDays}
      shouldHighlightWeekends={true}  
      onChange={handleOnChangeValue}
      onDisabledDayError={handleDisabledSelect}
    />
  );
};

export default CalendarInput;