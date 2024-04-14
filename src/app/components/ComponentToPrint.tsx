
import * as React from 'react';
import WeeklyCalendar from './weeklyCalendar';

const CalDates = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const daysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate();
}

interface ComponentToPrintProps {
  calendar: any; // Replace 'any' with the actual type of 'calendar'
  calendarSetup: object
}

// Using a class component, everything works without issue
class ComponentToPrint extends React.PureComponent<ComponentToPrintProps> {
  render() {
    const { calendar, calendarSetup } = this.props;

    return <WeeklyCalendar calendar={calendar} calendarSetup={calendarSetup} />
  }
}

export default ComponentToPrint;
