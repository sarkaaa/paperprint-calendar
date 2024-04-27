
import * as React from 'react';
import WeeklyCalendar from '../calendar/weeklyCalendar';

interface ComponentToPrintProps {
  calendar: any; // Replace 'any' with the actual type of 'calendar'
  calendarSetup: object
}

class ComponentToPrint extends React.PureComponent<ComponentToPrintProps> {
  render() {
    const { calendar, calendarSetup } = this.props;

    return <WeeklyCalendar calendar={calendar} calendarSetup={calendarSetup} />
  }
}

export default ComponentToPrint;
