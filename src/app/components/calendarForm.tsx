import { useState } from "react";
import { useForm } from "react-hook-form"
import { TestComponent } from "./TestComponent";
import CalendarComponent from "./calendarComponent";
import CalendarFormField from "./formField";
import { canvasFields, colorFields, themeFields } from "../data/configurationFormData";

type Inputs = {
    type: 'weekly' | 'monthly',
    startDate: Date,
    endDate: Date,
    theme: 'minimalism' | 'classic',
    canvas: 'lines' | 'dots' | 'empty',
    color: 'blackAndWhite' | 'red' | 'blue' | 'green'
}

const CalendarForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const calendarDefaultValues = {
    type: 'weekly',
    startDate: '2022-01-01',
    endDate: '2022-10-01',
    theme: 'minimalism',
    canvas: 'lines',
    color: 'blackAndWhite'
  };

  const [calendarSetup, setCalendar] = useState(
    calendarDefaultValues);

  const [calendarDates, setCalendarDates] = useState({
    weekNumber: null,
    weekDayNumbers: [],
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  })

  // TMP
  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
  
    setCalendar((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const setCalendarHandle = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
  
    setCalendarDates((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  console.log('calendarDates: ', calendarDates)
  console.log('calendarSetup: ', calendarSetup)

  return <div>
  <div>
      <div>
        <h2 className="font-bold text-center text-3xl">
          Configure your calendar
        </h2>
      </div>
      <div className="flex mt-16 gap-10">
      {
        // TODO: Set weekly/monthly calendar
        /* <CalendarFormField title="1. Choose structure" formValues={structureFileds} onClick={(e: Event) => handleInput(e)} calendarValueCheck={calendarSetup.type} /> */
      }
      <div className="flex-1">
        <h3>
          1. Select month/week
        </h3>
        <div>
          <CalendarComponent setCalendarHandle={setCalendarHandle} />
        </div>
      </div>
      <CalendarFormField title="2. Choose theme" formValues={themeFields} onClick={(e: React.MouseEvent) => handleInput(e)} calendarValueCheck={calendarSetup.theme} />
      <CalendarFormField title="3. Choose canvas" formValues={canvasFields} onClick={(e: React.MouseEvent) => handleInput(e)} calendarValueCheck={calendarSetup.canvas} />
      <CalendarFormField title="4. Choose color theme" formValues={colorFields} onClick={(e: React.MouseEvent) => handleInput(e)} calendarValueCheck={calendarSetup.color} />
      </div>
    </div>
    <div>
      <h2 className="font-bold text-center text-3xl my-8">Your calendar</h2>
      {/* <div className="border border-black border-dashed"> */}
        <TestComponent calendar={calendarDates} calendarSetup={calendarSetup} />
      {/* </div> */}
    </div>
</div>
}

export default CalendarForm;