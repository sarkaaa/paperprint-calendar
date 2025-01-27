import React from 'react';
import { libreBaskerville, raleway } from '@/app/utils/fonts';

type CanvasType =
  | 'canvasExampleLines'
  | 'canvasExampleDots'
  | 'canvasExampleEmpty';

type CalendarFormFieldProps = {
  title: string;
  formItems: Array<{
    title: string;
    id: string;
    name: string;
    value: string;
    example?: string & CanvasType;
  }>;
  onChange: (e: React.ChangeEvent) => void;
  calendarValueCheck: string;
};

/**
 * This function returns the font example based on the type.
 * @param type {string} - The type of the font.
 * @returns {string} - The font.
 */
const fontExample = (type: string) => {
  if (type === 'themeExampleClassic') {
    return libreBaskerville.className;
  } else if (type === 'themeExampleMinimalism') {
    return raleway.className;
  }
};

/**
 * This function returns the canvas example based on the type.
 * @param type {CanvasType} - The type of the canvas.
 * @returns {JSX.Element} - The canvas.
 */
const canvasExample = (type: CanvasType) => {
  const canvasTypes = {
    canvasExampleLines: '-',
    canvasExampleDots: '.',
    canvasExampleEmpty: '',
  };
  return (
    <div className='flex-1 text-right' aria-hidden='true'>
      {canvasTypes[type]?.repeat(5)}
    </div>
  );
};

/**
 * This component is responsible for rendering the form fields for the calendar configuration.
 * @returns {JSX.Element} - The form fields for the calendar configuration.
 */
const CalendarFormField = ({
  title,
  formItems,
  onChange,
  calendarValueCheck,
}: CalendarFormFieldProps) => {
  const handleButtonClick = (name: string, value: string) => {
    onChange({
      target: { name, value },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className='flex-1 rounded-md bg-gradient-to-tr from-indigo-50 to-indigo-100 p-4'>
      <h3 className='font-semibold'>{title}</h3>
      <div className='my-4 rounded-md bg-indigo-50 p-4'>
        {formItems.map((item) => (
          <div
            role='group'
            onKeyDown={(e) =>
              e.key === 'Enter' && handleButtonClick(item.name, item.value)
            }
            onClick={() => handleButtonClick(item.name, item.value)}
            className='my-4 flex cursor-pointer items-center focus:outline-none focus-visible:rounded-sm focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-indigo-700 focus-visible:ring-offset-2'
            key={item.id}
            tabIndex={0}
          >
            <div className='item-center relative flex size-5 shrink-0 justify-center rounded-full'>
              <input
                id={item.value}
                name={item.name}
                value={item.value}
                checked={item.value === calendarValueCheck}
                onChange={onChange}
                tabIndex={-1}
                type='radio'
                className='absolute size-full cursor-pointer appearance-none rounded-full border-2 border-gray-400 checked:border-4 checked:border-pink-700 checked:ring-pink-700 hover:ring-2 hover:ring-indigo-700 hover:ring-offset-2 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 hover:focus:ring-indigo-700'
              />
              <div className='size-full rounded-full border-2'></div>
            </div>
            <label
              htmlFor={item.id}
              id={item.value}
              className={`${item?.example && fontExample(item?.example)} ml-4 cursor-pointer text-base font-semibold`}
            >
              {item.title}
            </label>
            {item.example && canvasExample(item.example)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarFormField;
