import React, { useRef } from 'react';
import ReactToPrint from "react-to-print";
import ComponentToPrint from "./componentToPrint";

export const PrintComponent = ({ calendar, calendarSetup }: { calendar: object, calendarSetup:object }) => {
  const componentRef = useRef(null);

  return (
    <div>
      <div className="border border-dashed border-slate-400">
        <ComponentToPrint ref={componentRef} calendar={calendar} calendarSetup={calendarSetup} />
      </div>
      <ReactToPrint
          trigger={() =>  <div className='relative mx-auto flex w-full justify-center'>
          <a href="#" className='mx-auto my-8 inline-block rounded bg-indigo-600 px-8 py-4 text-center text-xl font-semibold text-white transition-all hover:bg-indigo-800 focus:bg-indigo-800'>Download & print!</a>
          </div>
          }
          content={() => componentRef?.current}
        />
        
    </div>
  )
}