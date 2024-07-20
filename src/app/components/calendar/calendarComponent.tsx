import Calendar from 'react-calendar';
import '../../../../node_modules/react-calendar/dist/Calendar.css';
import '../../globals.css';
import { getWeekNumber } from '../../../../node_modules/react-calendar/dist/cjs/shared/dates.js';
import { CalendarInputElement } from '@/app/utils/types';

type ValuePiece = Date | null;
type DateProps = ValuePiece | [ValuePiece, ValuePiece];

/**
 * This function returns the calendar component.
 */
const CalendarComponent = ({
  setCalendarHandle,
}: {
  setCalendarHandle: (e: CalendarInputElement) => void;
}) => {
  const handleCalendar = (date: DateProps, weekNumber?: number) => {
    if (date instanceof Date) {
      const dayNumber = date.getDay();

      let startDay: number;
      if (dayNumber === 0) {
        startDay = date.getDate() - 6;
      } else {
        startDay = date.getDate() - dayNumber + 1;
      }

      setCalendarHandle({ target: { name: 'month', value: date.getMonth() } });
      setCalendarHandle({
        target: { name: 'year', value: date.getFullYear() },
      });
      setCalendarHandle({
        target: {
          name: 'weekNumber',
          value: weekNumber || getWeekNumber(date),
        },
      });
      setCalendarHandle({
        target: {
          name: 'weekDayNumbers',
          value: Array.from({ length: 7 }, (_, i) => startDay + i),
        },
      });
    }
  };

  return (
    <Calendar
      showNeighboringMonth
      onClickWeekNumber={(weekNumber, date) => handleCalendar(date, weekNumber)}
      onChange={(e) => handleCalendar(e)}
      locale='en-GB'
      showWeekNumbers
    />
  );
};

export default CalendarComponent;
