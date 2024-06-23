"use client"
import React, { useRef } from "react";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import './custom-input-component-style.css'
import DatePicker, { DayValue, utils } from '@hassanmojab/react-modern-calendar-datepicker';

interface CalendarInputProps {
  excludedDays?: any[]
};

const CalendarInput = ({excludedDays, }: CalendarInputProps) => {
  const date = new Date()

  const [selectedDay, setSelectedDay] = React.useState<DayValue>({
    year: Number(date.getFullYear()),
    month: Number(date.getMonth()) + 1, 
    day: Number(date.getDate())
  });

  const handleDisabledSelect = (disabledDay: DayValue) => {
    console.log('Tried selecting a disabled day', disabledDay);
  };
  const handleOnChangeValue = (day: DayValue) => {
    setSelectedDay(day)
  };


  return (
    <DatePicker
      locale="en"
      value={selectedDay}
      colorPrimary="#18AFD3"
      disabledDays={excludedDays}
      onChange={handleOnChangeValue}  
      shouldHighlightWeekends={true}  
      minimumDate={utils("en").getToday()}   
      onDisabledDayError={handleDisabledSelect}
      inputClassName="moderd-date-picker-input"
    />
  );
};

export default CalendarInput;