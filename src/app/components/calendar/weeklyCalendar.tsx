import classNames from 'classnames';
import { CANVAS_BACKGROUNDS } from '@/app/data/configurationFormData';
import { CalendarProps, CalendarSetupProps } from '@/app/utils/types';
import { libreBaskerville, raleway } from '@/app/utils/fonts';
import WeekdayCalendarCell from './calendarCell';
import { WEEKDAYS, MONTHS } from '../../data/constants';
import isAscending from '@/app/helpers/isAscending';

const CalendarDatesArray = Object.values(WEEKDAYS);

/**
 * This function checks if the selected week
 * includes days (zero/negative values) from the previous month.
 * Example: 29, 30, 31, 1, 2, 3, 4 -> -2, -1, 0, 1, 2, 3, 4
 */
const hasPreviousMonthWeekdays = (weekDayNumbers: number[]) => {
  return weekDayNumbers?.some((weekDayNumber: number) => weekDayNumber <= 0);
};

/**
 * Returns the days in numbers of respective month.
 * @param month - The month number.
 * @param year - The year number.
 * @returns The number of days in the month.
 */
const daysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate();
};

/* Returns the week day numbers for the calendar. */
const defaultWeekDayNumbers = () => {
  const dateObject = new Date();
  const date = dateObject.getDate();
  const dayNumber = dateObject.getDay();

  const startDay: number = dayNumber === 0 ? date - 6 : date - dayNumber + 1;

  return Array.from({ length: 7 }, (_, i) => startDay + i);
};

/**
 * This function returns the weekdays for the calendar. content
 */
const fillWeekdays = (calendar: CalendarProps, weekDays: Array<number>) => {
  /**
   * Check if there are any zero/negative values in the array (weekdays from the previous month).
   * Example: 29, 30, 31, 1, 2, 3, 4 -> -2, -1, 0, 1, 2, 3, 4
   */
  if (hasPreviousMonthWeekdays(calendar.weekDayNumbers)) {
    /**
     * Get the last day in number of the previous month for the selected week.
     * The logic for new year is also handled here.
     */
    const daysMonthZero = daysInMonth(
      calendar.month === 0 ? 12 : calendar.month,
      calendar.month === 1 ? calendar.year - 1 : calendar.year
    );

    // Get the number of days of the previous month for the selected week.
    let numberOfDaysOfPrevMonth = calendar?.weekDayNumbers.filter(
      (day: number) => day <= 0
    ).length;

    weekDays = calendar?.weekDayNumbers.map((day: number) => {
      if (day <= 0) {
        numberOfDaysOfPrevMonth--;
        return daysMonthZero - numberOfDaysOfPrevMonth;
      }
      return day;
    });
  } else {
    // Get the number of days of the current month for the selected week.
    const daysMonth = daysInMonth(calendar.month + 1, calendar.year);

    // Replacement value for case that selected week includes days from the next month.
    let replacementValue = 1;
    weekDays = calendar?.weekDayNumbers?.map((day: number) =>
      day <= daysMonth ? day : replacementValue++
    );
  }
  return weekDays;
};

/**
 * Returns the color scheme for the calendar.
 */
const colorScheme = ({
  color,
}: {
  color: 'blackAndWhite' | 'red' | 'blue' | 'green';
  style: 'text' | 'border';
}) => {
  return color === 'blackAndWhite' ? 'text-black' : 'text-' + color + '-700';
};

/**
 * This component is responsible for rendering the weekly calendar.
 * @param param0 {calendar, calendarSetup} - The properties of the weekly calendar.
 * @returns {JSX.Element} - The weekly calendar.
 */

const WeeklyCalendar = ({
  calendar,
  calendarSetup,
}: {
  calendar: CalendarProps;
  calendarSetup: CalendarSetupProps;
}) => {
  const weekDays: number[] = fillWeekdays(
    calendar,
    [] || defaultWeekDayNumbers()
  );

  /* Checks if selected week is leap. */
  const leapWeek = isAscending(weekDays);

  /**
   * Set month names for every calendar cell.
   * Used when selected week includes days from the previous/next month.
   */
  const setCalendarMonth = (index: number) => {
    let prevMonth = false;
    let calMonth: number;

    if (hasPreviousMonthWeekdays(calendar.weekDayNumbers)) {
      prevMonth = true;
    }

    if (calendar.month === 0 && prevMonth) {
      calMonth = 12;
    } else if (calendar.month === 11 && !prevMonth) {
      calMonth = -1;
    } else {
      calMonth = calendar.month;
    }

    const monthName =
      weekDays[index] - weekDays[0] === index
        ? MONTHS[prevMonth ? calMonth - 1 : calendar.month]
        : MONTHS[prevMonth ? calendar.month : calMonth + 1];

    return monthName;
  };

  const renderCalendarCell = (day: string, index: number) => {
    return WeekdayCalendarCell({
      title: day,
      dayNumber: weekDays[CalendarDatesArray.indexOf(day as WEEKDAYS)],
      bgType: calendarSetup.canvas,
      theme: calendarSetup.theme,
      first: day === WEEKDAYS.Monday,
      last: index === CalendarDatesArray.length - 1,
      color: colorScheme({ color: calendarSetup.color, style: 'text' }),
      leapWeek: !leapWeek ? setCalendarMonth(index) : null,
    });
  };

  return (
    <div className='relative flex size-auto min-h-svh flex-col justify-stretch overflow-x-scroll bg-white p-4'>
      <div className='flex items-end justify-between bg-white px-2 pb-8 pt-4'>
        <div>
          <span
            className={classNames(
              `mr-4 text-4xl font-semibold uppercase tracking-wider ${calendarSetup.theme === 'classic' ? libreBaskerville.className : raleway.className}`,
              {
                'text-black': calendarSetup.color === 'blackAndWhite',
                'text-red-700': calendarSetup.color === 'red',
                'text-blue-700': calendarSetup.color === 'blue',
                'text-green-700': calendarSetup.color === 'green',
              }
            )}
          >
            {MONTHS[calendar.month]}
          </span>
          <span
            className={`text-4xl font-semibold text-gray-400 ${calendarSetup.theme === 'classic' ? libreBaskerville.className : raleway.className}`}
          >
            {calendar.year}
          </span>
        </div>
        <div className='flex flex-col items-end'>
          <span
            className={`text-3xl font-semibold ${calendarSetup.theme === 'classic' ? libreBaskerville.className : raleway.className} ${colorScheme({ color: calendarSetup.color, style: 'text' })}`}
          >
            {calendar.weekNumber}
          </span>
          <span
            className={`text-xs font-light uppercase text-gray-400 ${calendarSetup.theme === 'classic' ? libreBaskerville.className : raleway.className}`}
          >
            week number
          </span>
        </div>
      </div>
      <div className='relative flex h-full flex-1 pb-4'>
        {CalendarDatesArray.slice(0, 5).map((day, index) =>
          renderCalendarCell(day, index)
        )}
        <div className='flex flex-1 flex-col bg-white'>
          {CalendarDatesArray.slice(5).map((day, index) =>
            renderCalendarCell(day, index + 5)
          )}
        </div>
      </div>
      <div
        className={`h-36 w-full border-t bg-white p-4 ${CANVAS_BACKGROUNDS[calendarSetup.canvas]}`}
      ></div>
    </div>
  );
};

export default WeeklyCalendar;
