import WeekdayCalendarCell from "./calendarCell";
import { getWeekNumber } from '../../../../node_modules/react-calendar/dist/cjs/shared/dates.js';
import classNames from "classnames";
import { libreBaskerville, raleway } from "../../utils/fonts";
import { WEEKDAYS, MONTHS } from "../../data/constants";

const CalDates = Object.values(WEEKDAYS);

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
    const daysMonthZero = daysInMonth(calendar.month === 0 ? 12 : calendar.month, calendar.month === 1 ? calendar.year - 1 : calendar.year);
    let numberOfDaysOfPrevMonth = calendar?.weekDayNumbers.filter((day: number) => day <= 0).length;
    return weekDays = calendar?.weekDayNumbers.map((day: number) => {
      if (day <= 0) {
        numberOfDaysOfPrevMonth--;
        return daysMonthZero - numberOfDaysOfPrevMonth;
      }
      return day
    })
  } else {
    const daysMonth = daysInMonth(calendar.month + 1, calendar.year);
    let replacementValue = 1;
    return weekDays = calendar?.weekDayNumbers.map((day: number) => day <= daysMonth ? day : replacementValue++)
  }
}

const colorScheme = ({ color, style }: {color: 'blackAndWhite' | 'red' | 'blue' | 'green'; style: 'text' | 'border'}) => {
  return color === 'blackAndWhite' ? 'text-black' : 'text-' + color + '-700';
}

const WeeklyCalendar = ({ calendar, calendarSetup }: { calendar: any, calendarSetup: any }) => {
  if (!calendar.weekNumber) {
    calendar.weekNumber = getWeekNumber(new Date());
  }

  if (calendar.weekDayNumbers.length === 0) {
    calendar.weekDayNumbers = defaultWeekDayNumbers();
  }

  let weekDays: number[] = fillWeekdays(calendar || defaultWeekDayNumbers(), []);

  return (
    <div className="bg-white overflow-x-scroll w-auto justify-stretch p-4 min-h-svh h-auto flex relative flex-col">
      <div className="bg-white flex justify-between px-2 py-8 items-end">
        <div>
          <span className={classNames(`text-4xl font-semibold mr-4 uppercase tracking-wider ${calendarSetup.theme === 'classic' ? libreBaskerville.className : raleway.className}`, {
            'text-black': calendarSetup.color === 'blackAndWhite',
            'text-red-700': calendarSetup.color === 'red',
            'text-blue-700': calendarSetup.color === 'blue',
            'text-green-700': calendarSetup.color === 'green'
          
          })}>{MONTHS[calendar.month]}</span>
          <span className={`text-gray-400 text-4xl font-semibold ${calendarSetup.theme === 'classic' ? libreBaskerville.className : raleway.className}`}>{calendar.year}</span>
        </div>
        <div className="flex flex-col items-end">
          <span className={`text-3xl font-semibold ${calendarSetup.theme === 'classic' ? libreBaskerville.className : raleway.className} ${colorScheme({ color: calendarSetup.color, style: 'text'})}`}>{calendar.weekNumber}</span>
          <span className={`text-gray-400 text-xs uppercase font-semilight ${calendarSetup.theme === 'classic' ? libreBaskerville.className : raleway.className}`}>week number</span>
        </div>
      </div>
      <div className="h-100 relative flex flex-1 pb-4">
        {CalDates.map((day, index) => 
          index < CalDates.length - 2 &&
          WeekdayCalendarCell({
              title: day,
              dayNumber: weekDays[index],
              bgType: calendarSetup.canvas,
              theme: calendarSetup.theme,
              last: index === CalDates.length - 1,
              index: index,
              color: colorScheme({ color: calendarSetup.color, style: 'text'}),
              newMonth: weekDays[index + 1] === 1
            })
        )}
        <div className="bg-white flex-1 flex flex-col">
          {CalDates.map((day, index) => 
            index >= CalDates.length - 2 &&
            WeekdayCalendarCell({
                title: day,
                dayNumber: weekDays[index],
                bgType: calendarSetup.canvas,
                theme: calendarSetup.theme,
                last: true,
                index: index,
                color: colorScheme({ color: calendarSetup.color, style: 'text'}),
                newMonth: weekDays[index + 1] === 1
              })
          )}
        </div>
      </div>
      <div className={`border-t h-36 w-full bg-white p-4 ${calendarSetup.canvas}`}>
      </div>
    </div>
  );
}

export default WeeklyCalendar;