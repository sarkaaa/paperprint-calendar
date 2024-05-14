import { useState } from "react";
import { useForm } from "react-hook-form";
import { PrintComponent } from "../print/printComponent";
import CalendarComponent from "./calendarComponent";
import CalendarFormField from "./formField";
import {
  canvasFields,
  colorFields,
  themeFields,
} from "../../data/configurationFormData";

type CalendarValuesProps = {
  type: "weekly" | "monthly";
  theme: "minimalism" | "classic";
  canvas: "lines" | "dots" | "empty";
  color: "blackAndWhite" | "red" | "blue" | "green";
  [key: string]: any;
};

const CalendarForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CalendarValuesProps>();

  // const onSubmit: SubmitHandler<CalendarValuesProps> = (data) => console.log(data)

  const calendarDefaultValues: CalendarValuesProps = {
    type: "weekly",
    theme: "minimalism",
    canvas: "lines",
    color: "blackAndWhite",
  };

  const [calendarSetup, setCalendar] = useState(calendarDefaultValues);

  const [calendarDates, setCalendarDates] = useState({
    weekNumber: null,
    weekDayNumbers: [],
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  // TMP
  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setCalendar((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const setCalendarHandle = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setCalendarDates((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  return (
    <div>
      <div>
        <div>
          <h2 className="color-slate-950 text-center text-3xl font-bold">
            Configure your calendar
          </h2>
        </div>
        <div className="mt-6 flex flex-wrap gap-6 md:mt-16">
          {
            // TODO: Set weekly/monthly calendar
            /* <CalendarFormField title="1. Choose structure" formValues={structureFileds} onClick={(e: Event) => handleInput(e)} calendarValueCheck={calendarSetup.type} /> */
          }
          <div className="flex-1 rounded-md bg-gradient-to-tr from-indigo-50 to-indigo-100 p-4">
            <h3 className="font-semibold">1. Select week</h3>
            <div className="mt-6">
              <CalendarComponent setCalendarHandle={setCalendarHandle} />
            </div>
          </div>
          {[themeFields, canvasFields, colorFields].map((fields, index) => (
            <CalendarFormField
              key={index}
              title={`${index + 2}. Choose ${fields[0].name}`}
              formValues={fields}
              onClick={(e: React.MouseEvent) => handleInput(e)}
              calendarValueCheck={calendarSetup[fields[0].name].toString()}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="my-8 text-center text-3xl font-bold">Your calendar</h2>
        <PrintComponent
          calendar={calendarDates}
          calendarSetup={calendarSetup}
        />
      </div>
    </div>
  );
};

export default CalendarForm;
