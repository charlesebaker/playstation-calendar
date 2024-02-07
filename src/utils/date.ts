import { isValid, format, parseISO } from "date-fns";

export const isValidYearMonth = (year: string, month: string): boolean => {
  return isValid(new Date(`${year}/${month}`));
};

export const getCurrentYearMonth = (): string => {
  return format(new Date(), "yyyy/M");
};

export const getYearMonthFromISODate = (date: string): string => {
  return format(parseISO(date), "yyyy/M");
};
