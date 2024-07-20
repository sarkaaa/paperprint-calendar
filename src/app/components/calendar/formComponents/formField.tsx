import { libreBaskerville, raleway } from "@/app/utils/fonts"

type CanvasType = 'canvasExampleLines' | 'canvasExampleDots' | 'canvasExampleEmpty';

type CalendarFormFieldProps = {
  title: string,
  formItems: Array<{
    title: string,
    id: string,
    name: string,
    value: string
    example?: string & CanvasType
  }>,
  onChange: (e: React.ChangeEvent) => void,
  calendarValueCheck: string
}

/**
 * This function returns the font example based on the type.
 * @param type {string} - The type of the font.
 * @returns {string} - The font.
 */
const fontExample = (type: string) => {
  if (type === 'themeExampleClassic') {
    return libreBaskerville.className
  } else if (type === 'themeExampleMinimalism') {
    return raleway.className
  }
}

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
  }
  return <div className="flex-1 text-right">{canvasTypes[type]?.repeat(5)}</div>
}

/**
 * This component is responsible for rendering the form fields for the calendar configuration.
 * @param param0 {CalendarFormFieldProps} - The form fields for the calendar configuration.
 * @returns {JSX.Element} - The form fields for the calendar configuration.
 */
const CalendarFormField = ({ title, formItems, onChange, calendarValueCheck }: CalendarFormFieldProps) => {
  return (
    <div className="flex-1 rounded-md bg-gradient-to-tr from-indigo-50 to-indigo-100 p-4">
      <h3 className="font-semibold">
        {title}
      </h3>
      <div className="my-4 rounded-md bg-indigo-50 p-4">
        {
          formItems.map((items) => (
            <div className="my-4 flex cursor-pointer items-center" key={items.id}>
              <div className="relative flex size-5 shrink-0 items-center justify-center rounded-full">
                  <input aria-labelledby={items.name} id={items.id}  name={items.name} value={items.value} onChange={onChange} checked={items.value === calendarValueCheck} type="radio"
                    className="absolute size-full cursor-pointer appearance-none rounded-full border-2 border-gray-400 checked:border-4 checked:border-pink-700 checked:ring-pink-700 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 hover:focus:ring-indigo-700" />
                  <div className="size-full rounded-full border-2"></div>
              </div>
              <label htmlFor={items.id} className={`${items?.example && fontExample(items?.example)} ml-4 cursor-pointer text-base font-semibold`}>{items.title}</label>
              {
                items.example && canvasExample(items.example)
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CalendarFormField;
