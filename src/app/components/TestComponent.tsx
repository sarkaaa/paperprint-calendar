import React, { useRef } from 'react';
import ReactToPrint from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";

const PrintButton = () => <div className='flex justify-center mx-auto relative w-full'>
<a href="#" className='mx-auto my-4 bg-blue-500 px-8 py-4 inline-block text-white font-semibold text-xl rounded'>Download & print!</a>
</div>

export const TestComponent = ({ calendar, calendarSetup }: { calendar: object, calendarSetup:object }) => {
  const componentRef = useRef(null);

  return (
    <div>
      <div className="border border-slate-400 border-dashed">
        <ComponentToPrint ref={componentRef} calendar={calendar} calendarSetup={calendarSetup} />
      </div>
      <ReactToPrint
          trigger={() => <PrintButton />
          }
          content={() => componentRef?.current}
        />
        
    </div>
  )
}