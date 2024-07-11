import { CANVAS_BACKGROUNDS } from "@/app/data/configurationFormData";
import { libreBaskerville, raleway } from "../../utils/fonts";
import { CalendarSetupProps } from "@/app/utils/types";

type CanvasValueOf<T> = T[keyof T];

type Props = {
  title: string;
  dayNumber: number;
  bgType: CanvasValueOf<Pick<CalendarSetupProps, "canvas">>;
  last: boolean
  color: string
  newMonth?: boolean
  theme: 'classic' |  'minimalism';
};

const WeekdayCalendarCell = ({ title, dayNumber, bgType, last, color, newMonth, theme }: Props) =>  (
    <div key={title} className={`flex w-full flex-1 flex-col bg-white px-3 py-2 ${!last && `border-r border-slate-300`}`}>
      <div className={`flex items-center justify-center border-b border-gray-200 pb-2`}>
        <span>{newMonth && dayNumber === 1 && ''}</span>
        <span className={`${color} flex-1 text-xl font-extrabold ${theme === 'classic' ? libreBaskerville.className : raleway.className}`}>{dayNumber}</span>
        <span className={`flex-1 text-right text-xs font-semibold uppercase text-gray-400 ${theme === 'classic' ? libreBaskerville.className : raleway.className}`}>{title}</span>
      </div>
      <div className={` flex-1 bg-white ${CANVAS_BACKGROUNDS[bgType]}`}>
      </div>
    </div>
  );

export default WeekdayCalendarCell
