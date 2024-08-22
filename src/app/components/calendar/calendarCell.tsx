import clsx from 'clsx';
import { CANVAS_BACKGROUNDS } from '@/app/data/configurationFormData';
import { libreBaskerville, raleway } from '@/app/utils/fonts';
import { CalendarCanvasTypes, CalendarThemeTypes } from '@/app/utils/types';

type Props = {
  title: string;
  dayNumber: number;
  bgType: CalendarCanvasTypes;
  first: boolean;
  color: string;
  theme: CalendarThemeTypes;
  leapWeek?: string | null;
};

/**
 * This component is responsible for rendering the weekday calendar cell.
 * @param param0 {Props} - The properties of the weekday calendar cell.
 * @returns {JSX.Element} - The weekday calendar cell.
 */
const WeekdayCalendarCell = ({
  title,
  dayNumber,
  bgType,
  first,
  color,
  theme,
  leapWeek,
}: Props) => (
  <div
    key={title}
    className={clsx(
      'flex w-full flex-1 flex-col border-r border-slate-300 bg-white px-3 py-2',
      first && 'border-l'
    )}
  >
    <div className='flex'>
      <span
        className={clsx(
          'flex-1 text-xs font-semibold uppercase text-gray-400',
          theme === 'classic' ? libreBaskerville.className : raleway.className
        )}
      >
        {leapWeek}
      </span>
    </div>
    <div
      className={`flex items-center justify-center border-b border-gray-200 pb-2`}
    >
      <span
        className={clsx(
          color,
          'flex-1 text-xl font-extrabold',
          theme === 'classic' ? libreBaskerville.className : raleway.className
        )}
      >
        {dayNumber}
      </span>
      <span
        className={clsx(
          'flex-1 text-right text-xs font-semibold uppercase text-gray-400',
          theme === 'classic' ? libreBaskerville.className : raleway.className
        )}
      >
        {title}
      </span>
    </div>
    <div className={clsx('flex-1 bg-white', CANVAS_BACKGROUNDS[bgType])}></div>
  </div>
);

export default WeekdayCalendarCell;
