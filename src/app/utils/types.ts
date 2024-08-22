export type CalendarProps = {
  month: number;
  weekDayNumbers: Array<number>;
  weekNumber: number | null;
  year: number;
};

export type CalendarCanvasTypes = 'lines' | 'dots' | 'empty';
export type CalendarThemeTypes = 'classic' | 'minimalism';
export type CalendarTypeTypes = 'weekly' | 'monthly';
export type CalendarColorTypes = 'blackAndWhite' | 'red' | 'blue' | 'green';

export type CalendarSetupProps = {
  type: CalendarTypeTypes;
  theme: CalendarThemeTypes;
  canvas: CalendarCanvasTypes;
  color: CalendarColorTypes;
};

export type CalendarInputElement = {
  target: { name: string; value: number | number[] };
};
