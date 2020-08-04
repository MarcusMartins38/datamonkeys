import React, { useState, useCallback, useEffect } from "react";

import DayPicker, { DayModifiers } from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

import { FiCalendar } from "react-icons/fi";

import { Container, CalendarHeader } from "./styles";

export interface Props {
  isOpen: boolean;
  setIsOpen: (data: boolean) => void;
}

const Calendar: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const [openCalendar, setOpenCalendar] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    setOpenCalendar(isOpen);
    setIsOpen(isOpen);
    console.log(setIsOpen);
  }, [isOpen, setIsOpen]);

  const handleDateChange = useCallback(
    (day: Date, modifiers: DayModifiers) => {
      setSelectedDate(day);
      if (selectedDate === day) setOpenCalendar(false);
    },
    [selectedDate]
  );

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  return (
    <CalendarHeader isOpen={openCalendar} setIsOpen={setIsOpen}>
      <h2>Choose a plan:</h2>
      <span>
        <p>Choose the date:</p>
        <FiCalendar size={24} onClick={() => setOpenCalendar(!openCalendar)} />
        <DayPicker
          className="calendar"
          fromMonth={new Date()}
          modifiers={{
            available: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] },
          }}
          onMonthChange={handleMonthChange}
          selectedDays={selectedDate}
          onDayClick={handleDateChange}
        />
      </span>
    </CalendarHeader>
  );
};

export default Calendar;
