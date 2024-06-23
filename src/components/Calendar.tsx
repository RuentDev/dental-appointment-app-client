'use client';
import React, { FC } from 'react';
import CalendarComponent from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
interface IProps {}
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calendar: FC<IProps> = props => {
  const [value, setValue] = React.useState<Value>(new Date());

  const handleCalendarValueChange = (value: any) => {
    setValue(value);
  };

  return (
    <div>
      <CalendarComponent
        value={value}
        onChange={handleCalendarValueChange}
        activeStartDate={new Date()}
        calendarType='gregory'
      />
    </div>
  );
};

export default Calendar;
