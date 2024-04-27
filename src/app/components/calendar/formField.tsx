import { libreBaskerville, raleway } from "@/app/utils/fonts"

type CalendarFormFieldProps = {
  title: string,
  formValues: Array<{
    title: string,
    id: string,
    name: string,
    value: string
    example?: string
  }>,
  onClick: (e: React.MouseEvent) => void,
  calendarValueCheck: string
}

const fontExample = (type: string) => {
  if (type === 'themeExampleClassic') {
    return libreBaskerville.className
  } else if (type === 'themeExampleMinimalism') {
    return raleway.className
  }
}

const canvasExample = (type: string) => {
  if (type === 'canvasExampleLines') {
    return <div className="flex-1 text-right">______</div>
  } else if (type === 'canvasExampleDots') {
    return <div className="flex-1 text-right">............</div>
  }
}

const CalendarFormField = ({ title, formValues, onClick, calendarValueCheck }: CalendarFormFieldProps) => {
  return (
    <div className="flex-1 bg-gradient-to-tr from-indigo-50 to-indigo-100 rounded-md p-4">
      <h3 className="font-semibold">
        {title}
      </h3>
      <div className="my-4 bg-indigo-50 rounded-md p-4">
        {
          formValues.map((value) => (
            <div className="my-4 flex items-center cursor-pointer" key={value.id}>
              <div className="rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                  <input aria-labelledby={value.id} id={value.id}  name={value.name} value={value.value} onClick={onClick} checked={value.value === calendarValueCheck} type="radio"
                    className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 hover:focus:ring-indigo-700 focus:ring-indigo-700 checked:ring-pink-700 focus:outline-none border-2 rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-pink-700 checked:border-4" />
                  <div className="check-icon border-2 rounded-full w-full h-full z-1"></div>
              </div>
              <label htmlFor={value.id} className={`${value?.example && fontExample(value.example)} text-base font-semibold ml-4 cursor-pointer`}>{value.title}</label>
              {
                value?.example && canvasExample(value?.example)
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CalendarFormField;