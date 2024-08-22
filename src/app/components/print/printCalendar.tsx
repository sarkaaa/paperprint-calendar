import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { Printer } from 'iconsax-react';
import { CalendarProps, CalendarSetupProps } from '@/app/utils/types';
import WeeklyCalendar from '../calendar/weeklyCalendar';

type ComponentToPrintProps = {
  calendar: CalendarProps;
  calendarSetup: CalendarSetupProps;
};

/**
 * Returns the component that will be included in printed area.
 */
const ComponentToPrint = React.forwardRef<
  HTMLDivElement,
  ComponentToPrintProps
>(({ calendar, calendarSetup }, ref) => (
  <div ref={ref} className='calendar-printable'>
    <WeeklyCalendar calendar={calendar} calendarSetup={calendarSetup} />
  </div>
));

ComponentToPrint.displayName = 'ComponentToPrint';

/**
 * This components if responsible for printing the calendar.
 * It includes the calendar view field and a button to download/print the calendar.
 */
export const PrintCalendar = ({
  calendar,
  calendarSetup,
}: {
  calendar: CalendarProps;
  calendarSetup: CalendarSetupProps;
}) => {
  const componentRef = useRef(null);

  return (
    <div>
      <div className='border border-dashed border-slate-400'>
        <ComponentToPrint
          ref={componentRef}
          calendar={calendar}
          calendarSetup={calendarSetup}
        />
      </div>
      <ReactToPrint
        trigger={() => (
          <div className='relative mx-auto flex w-full justify-center'>
            <button className='mx-auto my-8 flex items-center gap-3 rounded bg-indigo-600 px-8 py-4 text-center text-xl font-semibold text-white transition-all hover:bg-indigo-800 focus:bg-indigo-800'>
              Download & print!
              <Printer size='32' color='#FFF' />
            </button>
          </div>
        )}
        content={() => componentRef.current}
      />
    </div>
  );
};
