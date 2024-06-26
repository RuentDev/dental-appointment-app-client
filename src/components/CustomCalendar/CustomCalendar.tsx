import { Flex, Grid, GridItem, VStack, Text, FormControl, FormLabel, Input, FlexProps } from "@chakra-ui/react";
import React, { ChangeEvent, FC } from "react";


type CalendarDateProps = {
  date: number | null;
  month: number;
  year: number;
  hour?: number;
  seconds?: number;
  minutes?: number;
  isAvailable?: boolean
};

type CalendarHourProps = {
  hour?: number;
  seconds?: number;
  minutes?: number;
};

interface CustomCalendarProps {
  type?: "TIME" | "DATE";
  onSelectDate?: (date: CalendarDateProps) => void;
  onSelectTime?: (e: ChangeEvent<HTMLInputElement>) => void;
  containerStyle?: FlexProps
  excludedDates?: CalendarDateProps[]
};



const CustomCalendar:FC<CustomCalendarProps> = (props) => {
  const [startDate, setStartDate] = React.useState<CalendarDateProps | undefined>(undefined);
  const [endDate, setEndDate] = React.useState<CalendarDateProps | undefined>(undefined);
  const [startTime, setStartTime] = React.useState<CalendarHourProps | undefined>(undefined);
  const [endTime, setEndTime] = React.useState<CalendarHourProps | undefined>(undefined);
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [daysInMonth, setDaysInMonth] = React.useState<CalendarDateProps[]>([]);

  const renderDayLabels = () => (
    <GridItem rowSpan={1} colSpan={7} w="full" h="full">
      <Flex w="full" h="full" alignItems="center" justifyContent="center">
        {["S", "M", "T", "W", "T", "F", "S"].map((label) => (
          <Text key={label} w="full" h="full" display="flex" alignItems="center" justifyContent="center" userSelect="none">
            {label}
          </Text>
        ))}
      </Flex>
    </GridItem>
  );

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const goToPrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };


  React.useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Calculate days in the current month
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

    const daysArray: CalendarDateProps[] = [
      ...Array.from({ length: firstDayOfMonth }, () => ({ date: null, month, year })), // Empty slots for the days before the 1st of the month
      ...Array.from({ length: lastDateOfMonth }, (_, i) => ({ date: i + 1, month, year, })), // Days of the current month
    ];

    //set isActive  false if included to excluded dates

    setDaysInMonth(daysArray);

  }, [currentDate]);

  const generateDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

    const today = new Date();

    const daysArray: CalendarDateProps[] = [
      ...Array.from({ length: firstDayOfMonth }, () => ({
        date: null,
        month,
        year,
        isAvailable: false,
      })),

      ...Array.from({ length: lastDateOfMonth }, (_, i) => {
        const dayDate = new Date(year, month, i + 1);
        const isToday = dayDate.toDateString() === today.toDateString();
        const isWeekend = dayDate.getDay() === 0 || dayDate.getDay() === 6;

        return { date: i + 1,  month,  year, isAvailable: checkDateAvailability(i + 1)};
      }),
    ];

    setDaysInMonth(daysArray);
  };

  const handleDayClick = (day: CalendarDateProps) => {
    if (day.date) {
      alert(`You clicked on day ${day.date}`);
      const newDate = new Date(currentDate);
      newDate.setDate(day.date);
      setCurrentDate(newDate);
    }
  };

  const checkDateAvailability = (day: number) => {
    // Example logic to determine if a date is available
    const unavailableDates = [10, 15, 20];
    return !unavailableDates.includes(day);
  };


  return(
    <Flex {...props.containerStyle}>
      {
        props.type === "DATE" && (
          <Grid w="full" h="full" templateColumns="repeat(7, 1fr)" templateRows="repeat(7, 1fr)" gap="1px">
            {renderDayLabels()}
            {daysInMonth.map((day, index) => (
              <GridItem
                w="full"
                h="full"
                key={index}
                rowSpan={1}
                colSpan={1}
                cursor="pointer"
                _hover={{ bg: day.date !== null ? "gray.300" : "" }}
                onClick={() => props.onSelectDate?.(day)}
                bg={day.date !== null && currentDate.getDate() === day.date ? "gray.300" : "gray.100"}
              >
                <VStack alignItems="center" justifyContent="center" h="full">
                  <Text userSelect="none" color={day.date !== null && currentDate.getDate() === day.date ? "white" : ""}>
                    {day.date}
                  </Text>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        )
      }

      {
        props.type === "TIME" && (
           <FormControl>
              <FormLabel>Select Time</FormLabel>
              <Input type="time" name="startTime" maxW={200} onChange={props.onSelectTime}/>
          </FormControl>
        )
      }

    </Flex>
  )
};

export default CustomCalendar;