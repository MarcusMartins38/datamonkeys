import React, { useState, useCallback, useEffect } from "react";

import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import { FiCalendar } from "react-icons/fi";

import { CalendarHeader } from "./styles";

export interface Props {
  isOpen: boolean;
  toggleModal: (calendarOpened: boolean) => void;
  selectedDateText: (dateChoose: Date) => void;
}

/**
 * Calendar and His Functions
 * @constructor
 * @param {boolean} isOpen - Know if the Calendar is open
 * @param {(boolean) => void} toggleModal - Function to close the Calendar
 * @param {(Date) => void} selectedDateText - Function to return the Date Value
 */
const Calendar: React.FC<Props> = ({
  isOpen,
  toggleModal,
  selectedDateText,
}) => {
  const [openCalendar, setOpenCalendar] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    setOpenCalendar(isOpen);
  }, [isOpen]);

  useEffect(() => {
    selectedDateText(selectedDate);
  }, [selectedDate, selectedDateText]);

  /**
   * Changing the Date on the Calendar
   * @function
   * @param {Date} day - The day selected
   */
  const handleDateChange = useCallback(
    (day: Date) => {
      setSelectedDate(day);
      if (selectedDate === day) setOpenCalendar(false);
    },
    [selectedDate]
  );

  /**
   * Open and Close Calendar
   * @function
   */
  const handleOpenCalendar = useCallback(() => {
    setOpenCalendar(!openCalendar);
    toggleModal(!openCalendar);
  }, [openCalendar, toggleModal]);

  return (
    <CalendarHeader
      isOpen={openCalendar}
      selectedDateText={selectedDateText}
      toggleModal={toggleModal}
    >
      <h2>Choose a plan:</h2>
      <span>
        <p>Choose the date:</p>
        <FiCalendar size={24} onClick={handleOpenCalendar} />
        <DayPicker
          className="calendar"
          fromMonth={new Date()}
          modifiers={{
            available: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] },
          }}
          selectedDays={selectedDate}
          onDayClick={handleDateChange}
        />
      </span>
    </CalendarHeader>
  );
};

export default Calendar;
