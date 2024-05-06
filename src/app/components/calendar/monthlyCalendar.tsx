// const CalDates = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const daysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate();
}

const daysArray = (days: number): number[] => {
  return Array.from({length: days}, (_, i) => i + 1);
}

const MonthlyCalendar = ({ calendar }: { calendar: any }) => {
  let daysMonth: number = daysInMonth(calendar.month, calendar.year);

  let weekDays: number[] = [];

  if (calendar.weekDayNumbers.some((v: number) => v <= 0)) {
    const daysMonthZero = daysInMonth(calendar.month === 1 ? 12 : calendar.month - 1, calendar.month === 1 ? calendar.year - 1 : calendar.year);
    let numberOfDaysOfPrevMonth = calendar?.weekDayNumbers.filter((day: number) => day <= 0).length;
    weekDays = calendar?.weekDayNumbers.map((day: number) => {
      if (day <= 0) {
        numberOfDaysOfPrevMonth--;
        return daysMonthZero - numberOfDaysOfPrevMonth;
      }
      return day
    })
  }  else {
    let replacementValue = 1;
    weekDays = calendar?.weekDayNumbers.map((day: number) => day <= daysMonth ? day : replacementValue++)
  }

  const myDate = new Date();
  myDate.setFullYear(calendar.year);
  myDate.setMonth(calendar.month);
  myDate.setDate(1);

  const firstDayPosition = myDate.getDay();

  const weekRows = Math.floor(daysMonth / 7);

  let day: number = 1;

  const daysInMonthArray = daysArray(daysMonth);
  const setDay = (dayd: number) => {
    daysInMonthArray[dayd]
    day++;

    return dayd;
  }

  return (
  <div className="relative flex min-h-svh flex-col bg-blue-700 p-12">
    <div className="flex justify-between bg-slate-50 px-4 py-8">
      <h2 className="text-4xl font-semibold">{calendar.month}</h2>
      <h2 className="text-4xl font-semibold">{calendar.year}</h2>
    </div>
    <div className="grid">
      {
        Array.from({ length: weekRows + 1 }).map((_, i) => (
          <div className="grid grid-cols-7 bg-red-50" key={i}>
            {
              Array.from({ length: 7 }).map((_, j) => {
                if (i === 0 && j < firstDayPosition) {
                  return (
                    <div className="flex flex-1 flex-col bg-slate-50 p-4" key={j}>
                      <span>{weekDays[j]}</span>
                    </div>
                  );
                } else {
                  return (
                    <div className="flex flex-1 flex-col bg-slate-50 p-4" key={j}>
                      <span>{setDay(day)}</span>
                    </div>
                  );
                }
              })
            }
          </div>
        ))
      }
    </div>
  </div>
  );
}

export default MonthlyCalendar;
