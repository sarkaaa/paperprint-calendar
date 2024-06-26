import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../globals.css';
import {getWeekNumber} from '../../../../node_modules/react-calendar/dist/cjs/shared/dates.js';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarComponent = ({
  setCalendarHandle,
}: {
  setCalendarHandle: (e: any) => void;
}) => {
  const handleWeekNumber = (wN: number, date: Date) => {
    const dayNumber = date.getDate();

    setCalendarHandle({target: {name: 'weekNumber', value: wN}});
    setCalendarHandle({
      target: {
        name: 'weekDayNumbers',
        value: Array.from({length: 7}, (_, i) => dayNumber + i),
      },
    });
    setCalendarHandle({target: {name: 'year', value: date.getFullYear()}});
  };

  const handleMonth = (date: Date | Value) => {
    if (date instanceof Date) {
      const wn = getWeekNumber(date);
      const dayNumber = date.getDay();

      let startDay: number;
      if (dayNumber === 0) {
        startDay = date.getDate() - 6;
      } else {
        startDay = date.getDate() - dayNumber + 1;
      }

      setCalendarHandle({target: {name: 'month', value: date.getMonth()}});
      setCalendarHandle({
        target: {name: 'year', value: date.getFullYear()},
      });
      setCalendarHandle({target: {name: 'weekNumber', value: wn}});
      setCalendarHandle({
        target: {
          name: 'weekDayNumbers',
          value: Array.from({length: 7}, (_, i) => startDay + i),
        },
      });
    }
  };

  return (
    <Calendar
      showNeighboringMonth
      onClickWeekNumber={handleWeekNumber}
      onClickMonth={handleMonth}
      onChange={handleMonth}
      locale='en-GB'
      showWeekNumbers
    />
  );
};

export default CalendarComponent;
