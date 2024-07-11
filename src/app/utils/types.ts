export type CalendarProps = {
  month: number;
  weekDayNumbers: Array<number>;
  weekNumber: number | null;
  year: number;
}

export type CalendarSetupProps = {
  type: "weekly" | "monthly";
  theme: 'classic' | 'minimalism';
  canvas: 'lines' | 'dots' | 'empty';
  color: 'blackAndWhite' | 'red' | 'blue' | 'green';
}

export type CalendarInputElement = { target: { name: string, value: number | number[] }};
