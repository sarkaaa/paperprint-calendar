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
  onChange: (e: React.ChangeEvent) => void,
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

const CalendarFormField = ({ title, formValues, onChange, calendarValueCheck }: CalendarFormFieldProps) => {
  return (
    <div className="flex-1 rounded-md bg-gradient-to-tr from-indigo-50 to-indigo-100 p-4">
      <h3 className="font-semibold">
        {title}
      </h3>
      <div className="my-4 rounded-md bg-indigo-50 p-4">
        {
          formValues.map((value) => (
            <div className="my-4 flex cursor-pointer items-center" key={value.id}>
              <div className="relative flex size-5 shrink-0 items-center justify-center rounded-full">
                  <input aria-labelledby={value.id} id={value.id}  name={value.name} value={value.value} onChange={onChange} checked={value.value === calendarValueCheck} type="radio"
                    className="absolute size-full cursor-pointer appearance-none rounded-full border-2 border-gray-400 checked:border-4 checked:border-pink-700 checked:ring-pink-700 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 hover:focus:ring-indigo-700" />
                  <div className="size-full rounded-full border-2"></div>
              </div>
              <label htmlFor={value.id} className={`${value?.example && fontExample(value.example)} ml-4 cursor-pointer text-base font-semibold`}>{value.title}</label>
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