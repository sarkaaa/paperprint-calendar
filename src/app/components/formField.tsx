type CalendarFormFieldProps = {
  title: string,
  formValues: Array<{
    title: string,
    id: string,
    name: string,
    value: string
  }>,
  onClick: (e: React.MouseEvent) => void,
  calendarValueCheck: string
}

const CalendarFormField = ({ title, formValues, onClick, calendarValueCheck }: CalendarFormFieldProps) => {
  return (
    <div className="flex-1">
      <h3 className="font-semibold">
        {title}
      </h3>
      <div className="my-4">
        {
          formValues.map((value) => (
            <div className="my-2" key={value.id}>
              <input type="radio" id={value.id} name={value.name} value={value.value} onClick={onClick} checked={value.value === calendarValueCheck} />
              <label htmlFor={value.id}>{value.title}</label>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CalendarFormField;