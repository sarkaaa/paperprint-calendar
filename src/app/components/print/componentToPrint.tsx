import * as React from "react";
import WeeklyCalendar from "../calendar/weeklyCalendar";

interface ComponentToPrintProps {
  calendar: any; // Replace 'any' with the actual type of 'calendar'
  calendarSetup: object;
}

const ComponentToPrint = React.forwardRef<
  HTMLDivElement,
  ComponentToPrintProps
>(({ calendar, calendarSetup }, ref) => (
  <div ref={ref} className="calendar-printable">
    <WeeklyCalendar calendar={calendar} calendarSetup={calendarSetup} />
  </div>
));

export default ComponentToPrint;
