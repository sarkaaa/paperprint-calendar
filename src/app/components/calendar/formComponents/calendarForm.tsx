import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { CalendarInputElement, CalendarSetupProps } from '@/app/utils/types';
import { PrintCalendar } from '../../print/printCalendar';
import CalendarComponent from '../calendarComponent';
import CalendarFormField from './formField';
import {
  canvasFields,
  colorFields,
  themeFields,
} from '../../../data/configurationFormData';
import Loader from '../../loader';

/**
 * This component is responsible for rendering the form fields for the calendar configuration.
 * @return {JSX.Element} The form fields for the calendar configuration.
 */
const CalendarForm = () => {
  const calendarDefaultValues: CalendarSetupProps & {
    [key: string]: string;
  } = {
    type: 'weekly',
    theme: 'minimalism',
    canvas: 'lines',
    color: 'blackAndWhite',
  };
  const calendarDatesDefault = {
    weekNumber: null,
    weekDayNumbers: [],
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };

  const [calendarSetup, setCalendar] = useLocalStorage(
    'calendarData',
    calendarDefaultValues
  );
  const [calendarDates, setCalendarDates] = useLocalStorage(
    'calendarDatesData',
    calendarDatesDefault
  );

  // https://dev.to/gvegacl/nextjs-server-prop-did-not-match-client-prop-and-conditional-styleclass-rendering-2i4c
  const [mount, setMount] = useState(false);

  // TMP
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = (e.target as HTMLInputElement).name;
    const fieldValue = (e.target as HTMLInputElement).value;

    setCalendar((prevState) => ({ ...prevState, [fieldName]: fieldValue }));
  };

  const setCalendarHandle = (e: CalendarInputElement) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setCalendarDates((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <div>
      <div>
        <div>
          <h2 className='color-slate-950 text-center text-3xl font-bold'>
            Configure your calendar
          </h2>
        </div>
        <div className='mt-6 flex flex-wrap gap-6 md:mt-16'>
          {
            // TODO: Set weekly/monthly calendar
            /* <CalendarFormField title="1. Choose structure" formItems={structureFileds} onClick={(e: Event) => handleInput(e)} calendarValueCheck={calendarSetup.type} /> */
          }
          <div className='flex-1 rounded-md bg-gradient-to-tr from-indigo-50 to-indigo-100 p-4'>
            <h3 className='font-semibold'>1. Select week</h3>
            <div className='mt-6'>
              <CalendarComponent setCalendarHandle={setCalendarHandle} />
            </div>
          </div>
          {[themeFields, canvasFields, colorFields].map((fields, index) =>
            calendarSetup ? (
              <CalendarFormField
                key={fields[0].name}
                title={`${index + 2}. Choose ${fields[0].name}`}
                formItems={fields}
                onChange={(e) =>
                  handleInput(e as React.ChangeEvent<HTMLInputElement>)
                }
                calendarValueCheck={calendarSetup[fields[index].name]}
              />
            ) : (
              <div key='loader' className='flex-1'>
                <Loader />
              </div>
            )
          )}
        </div>
      </div>
      <div>
        <h2 className='my-8 text-center text-3xl font-bold'>Your calendar</h2>
        {mount ? (
          <PrintCalendar
            calendar={calendarDates}
            calendarSetup={calendarSetup}
          />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default CalendarForm;
