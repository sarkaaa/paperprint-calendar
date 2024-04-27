import { libreBaskerville, raleway } from "../../utils/fonts";

type Props = {
  title: string;
  dayNumber: number;
  bgType: 'lines' | 'dots' | 'empty';
  last: boolean
  index: number
  color: string
  newMonth?: boolean
  theme: 'classic' |  'minimalism';
};

const WeekdayCalendarCell = ({ title, dayNumber, bgType, last, index, color, newMonth, theme }: Props) =>  (
    <div key={index} className={`bg-white px-3 py-2 flex flex-col flex-1 w-full ${!last && `border-slate-300 border-r`}`}>
      <div className={`flex justify-center items-center border-b border-${color}-600 ${color === 'black' && 'border-gray-200'} pb-2`}>
        <span>{newMonth && dayNumber === 1 ? 'aa' : ''}</span>
        <span className={`${color} flex-1 text-xl font-extrabold ${theme === 'classic' ? libreBaskerville.className : raleway.className}`}>{dayNumber}</span>
        <span className={`text-gray-400 flex-1 text-xs font-semibold text-right uppercase ${theme === 'classic' ? libreBaskerville.className : raleway.className}`}>{title}</span>
      </div>
      <div className={` bg-white flex-1 ${bgType}`}>
      </div>
    </div>
  );

export default WeekdayCalendarCell
