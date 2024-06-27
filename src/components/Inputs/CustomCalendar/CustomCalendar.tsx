import { Flex, Grid, GridItem, VStack, Text, FormControl, FormLabel, Input, FlexProps, useToast } from "@chakra-ui/react";
import React, { ChangeEvent, FC, useMemo } from "react";

type CalendarDateProps = {
  date: number | null;
  month: number;
  year: number;
  hour: number;
  seconds: number;
  minutes: number;
  isToday: boolean;
  isWeekend: boolean;
  isAvailable?: boolean;
};

type CalendarHourProps = {
  hour?: number;
  seconds?: number;
  minutes?: number;
};

interface CustomCalendarProps {
  onSelectDate?: (date: Date) => void;
  onSelectTime?: (e: ChangeEvent<HTMLInputElement>) => void;
  containerStyle?: FlexProps;
  excludedDates?: number[];
}

const CustomCalendar: FC<CustomCalendarProps> = ({
  onSelectDate,
  onSelectTime,
  containerStyle,
  excludedDates = [],
}) => {
  const [selectedDate, setSelectedDate] = React.useState<number>()
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [daysInMonth, setDaysInMonth] = React.useState<CalendarDateProps[]>([]);

  const toast = useToast();

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const goToPrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };


  React.useEffect(() => {
     const generateDays = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const today = new Date(year, month, currentDate.getDate());

      // Calculate previous month's details
      const prevMonthDate = new Date(year, month, 0);
      const lastDateOfPrevMonth = prevMonthDate.getDate();
      const firstDayOfMonth = new Date(year, month, 1).getDay();
      const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

      const prevMonthDaysArray: CalendarDateProps[] = [];

      // Previous month days
      for (let i = firstDayOfMonth; i > 0; i--) {
        const date = lastDateOfPrevMonth - i + 1;
        prevMonthDaysArray.push({
          date,
          month: (month - 1 + 12) % 12,
          year: month === 0 ? year - 1 : year,
          hour: 0,
          minutes: 0,
          seconds: 0,
          isAvailable: !excludedDates.includes(date) && new Date(year, month - 1, date) >= today,
          isToday: false,
          isWeekend: false,
        });
      }

      const daysArray: CalendarDateProps[] = [];

      // Current month days
      for (let i = 0; i < lastDateOfMonth; i++) {
        const date = i + 1;
        const dayDate = new Date(year, month, date);
        const isToday = dayDate.toDateString() === today.toDateString();
        const isWeekend = dayDate.getDay() === 0 || dayDate.getDay() === 6;

        daysArray.push({
          date,
          month,
          year,
          hour: 0,
          minutes: 0,
          seconds: 0,
          isAvailable: !excludedDates.includes(date) && dayDate >= today,
          isToday,
          isWeekend,
        });
      }

      // Next month days
      const nextMonthDays = 42 - (prevMonthDaysArray.length + daysArray.length);
      for (let i = 0; i < nextMonthDays; i++) {
        const date = i + 1;
        daysArray.push({
          date,
          month: (month + 1) % 12,
          year: month === 11 ? year + 1 : year,
          hour: 0,
          minutes: 0,
          seconds: 0,
          isAvailable: true, // Enable future dates
          isToday: false,
          isWeekend: false,
        });
      }

      setDaysInMonth([...prevMonthDaysArray, ...daysArray]);
    };

    generateDays();
  }, []);

  const handleOnSelectedDayClick = (day: CalendarDateProps) => {
    const newDate = new Date(currentDate);
    if (day.date && day.isAvailable) {
      newDate.setDate(day.date);
      setCurrentDate(newDate);
      setSelectedDate(day.date)
      onSelectDate?.(newDate);
    }else{
      toast({
        status: "error",
        title: "Not Available",
        position: "bottom"
      })
    }

   
  };

  return (
    <Flex flexDirection="column" {...containerStyle}>
      <Grid w="full" h="full" templateColumns="repeat(7, 1fr)" templateRows="repeat(7, 1fr)" gap="1px">
        <GridItem rowSpan={1} colSpan={7} w="full" h="full">
          <Flex w="full" h="full" alignItems="center" justifyContent="center">
            {["S", "M", "T", "W", "T", "F", "S"].map((label, index) => (
              <Text key={label + index} w="full" h="full" display="flex" alignItems="center" justifyContent="center" userSelect="none">
                {label}
              </Text>
            ))}
          </Flex>
        </GridItem>
        {daysInMonth.map((day, index) => (
          <GridItem
            w="full"
            h="full"
            key={`date-${index}-${day.date}`}
            rowSpan={1}
            colSpan={1}
            _hover={{ bg: day.isAvailable ? selectedDate === day.date ? "#E9490A" : "gray.200" : "gray.300" }}
            onClick={() => handleOnSelectedDayClick(day)}
            cursor={day.date !== null ? "pointer" : "default"}
            bg={day.isAvailable ? selectedDate === day.date ? "#E9490A" : "gray.200" : "gray.300"}
          >
            <VStack alignItems="center" justifyContent="center" h="full">
              <Text
                userSelect="none"
                color={selectedDate === day.date && day.isToday ? "red.500" : ""}
                aria-label={`Day ${day.date}`}
              >
                {day.date}
              </Text>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default CustomCalendar;
