import {
  isValid,
  format as formatDate,
  parseISO,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
} from "date-fns";

export const isValidYearMonth = (year: string, month: string): boolean => {
  return isValid(new Date(`${year}/${month}`));
};

export const getCurrentYearMonth = (): string => {
  return formatDate(new Date(), "yyyy/M");
};

export const getCurrentYear = (): string => {
  return formatDate(new Date(), "yyyy");
};

export const getCurrentMonth = (): string => {
  return formatDate(new Date(), "M");
};

export const getYearMonthFromISODate = (date: string): string => {
  return formatDate(parseISO(date), "yyyy/M");
};

export const formatYearMonth = (year: string, month: string, format = "MMMM yyyy"): string => {
  return formatDate(new Date(`${year}/${month}`), format);
};

export const getPrevMonth = (year: string, month: string): string => {
  const date = new Date(`${year}/${month}`);

  date.setMonth(date.getMonth() - 1);

  return formatDate(date, "yyyy/M");
};

export const getNextMonth = (year: string, month: string): string => {
  const date = new Date(`${year}/${month}`);

  date.setMonth(date.getMonth() + 1);

  return formatDate(date, "yyyy/M");
};

export const getWeekDays = (format = "EEEE"): string[] => {
  const date = new Date();

  return eachDayOfInterval({
    start: startOfWeek(date, { weekStartsOn: 0 }),
    end: endOfWeek(date, { weekStartsOn: 0 }),
  }).map((day) => formatDate(day, format));
};

export const getDatesInMonthlyView = (year: string, month: string): Date[] => {
  const firstDayOfMonth = startOfMonth(new Date(`${year}/${month}`));
  const lastDayOfMonth = endOfMonth(new Date(`${year}/${month}`));

  const calendarStart = startOfWeek(firstDayOfMonth, { weekStartsOn: 0 });
  const calendarEnd = endOfWeek(lastDayOfMonth, { weekStartsOn: 0 });

  return eachDayOfInterval({ start: calendarStart, end: calendarEnd });
};
