import WeekdayCalendarCell from "./calendarCell";
import { getWeekNumber } from '../../../node_modules/react-calendar/dist/cjs/shared/dates.js';

const CalDates = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const daysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate();
}

const defaultWeekDayNumbers = () => {
  const date = new Date();
  const dayNumber =  date.getDay()

  let startDay: number;
  if (dayNumber === 0) {
    startDay = date.getDate() - 6;
  } else {
    startDay = date.getDate() - dayNumber + 1;
  }

  return Array.from({length: 7}, (_, i) => startDay + i);
}

const fillWeekdays = (calendar: any, weekDays: Array<number>) => {
  if (calendar.weekDayNumbers.some((v: number) => v <= 0)) {
    const daysMonthZero = daysInMonth(calendar.month === 1 ? 12 : calendar.month - 1, calendar.month === 1 ? calendar.year - 1 : calendar.year);
    let numberOfDaysOfPrevMonth = calendar?.weekDayNumbers.filter((day: number) => day <= 0).length;
    return weekDays = calendar?.weekDayNumbers.map((day: number) => {
      if (day <= 0) {
        numberOfDaysOfPrevMonth--;
        return daysMonthZero - numberOfDaysOfPrevMonth;
      }
      return day
    })
  } else {
    const daysMonth = daysInMonth(calendar.month, calendar.year);
    let replacementValue = 1;
    return weekDays = calendar?.weekDayNumbers.map((day: number) => day <= daysMonth ? day : replacementValue++)
  }
}

const WeeklyCalendar = ({ calendar, calendarSetup }: { calendar: any, calendarSetup: any }) => {
  console.log('calendarcalendar: ', calendar);

  if (!calendar.weekNumber) {
    calendar.weekNumber = getWeekNumber(new Date());
  }

  if (calendar.weekDayNumbers.length === 0) {
    calendar.weekDayNumbers = defaultWeekDayNumbers();
  }

  let weekDays: number[] = fillWeekdays(calendar || defaultWeekDayNumbers(), []);

  console.log('weekDays: ', weekDays);

  return (
    <div className="bg-blue-50 p-4 min-h-svh flex relative flex-col">
      <div className="bg-slate-50 flex justify-between px-4 py-8">
        <h2 className="text-4xl font-semibold">{calendar.month}</h2>
        <h2 className={`text-4xl font-semibold ${calendarSetup.color === 'red' && 'text-red-700'}`}>week number: {calendar.weekNumber}</h2>
        <h2 className="text-4xl font-semibold angkor">{calendar.year}</h2>
      </div>
      <div className="h-100 relative flex flex-1">
        {CalDates.map((day, index) => 
          index < CalDates.length - 2 &&
          WeekdayCalendarCell({
              title: day,
              dayNumber: weekDays[index],
              bgType: "lines",
              last: index === CalDates.length - 1,
              index: index
            })
        )}
        <div className="bg-slate-50 p-4 flex-1 flex flex-col">
          {CalDates.map((day, index) => 
            index >= CalDates.length - 2 &&
            WeekdayCalendarCell({
                title: day,
                dayNumber: weekDays[index],
                bgType: "lines",
                last: true,
                index: index
              })
          )}
        </div>
      </div>
    </div>
  );
}

export default WeeklyCalendar;