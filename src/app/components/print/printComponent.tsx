import React, { useRef } from 'react';
import ReactToPrint from "react-to-print";
import ComponentToPrint from "./componentToPrint";

export const PrintComponent = ({ calendar, calendarSetup }: { calendar: object, calendarSetup:object }) => {
  const componentRef = useRef(null);

  return (
    <div>
      <div className="border border-slate-400 border-dashed">
        <ComponentToPrint ref={componentRef} calendar={calendar} calendarSetup={calendarSetup} />
      </div>
      <ReactToPrint
          trigger={() =>  <div className='flex justify-center mx-auto relative w-full'>
          <a href="#" className='mx-auto my-8 bg-indigo-600 hover:bg-indigo-800 focus:bg-indigo-800 px-8 py-4 inline-block text-white font-semibold text-xl rounded transition-all text-center'>Download & print!</a>
          </div>
          }
          content={() => componentRef?.current}
        />
        
    </div>
  )
}