type Props = {
  title: string;
  dayNumber: number;
  bgType: 'lines' | 'dots' | 'empty';
  last: boolean
  index: number
};

const WeekdayCalendarCell = ({ title, dayNumber, bgType, last, index }: Props) => (
  <div key={index} className={`bg-slate-50 p-4 flex-1 w-40  ${!last && `border-slate-300 border-r`}`}>
    <h3 className="text-black flex-auto">{title}</h3>
    <h4>{dayNumber}</h4>
    <div className={`${bgType} bg-red-300 flex-1`}>
    </div>
  </div>
);

export default WeekdayCalendarCell
