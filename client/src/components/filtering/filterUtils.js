import {
  startOfWeek,
  startOfMonth,
  startOfYear,
  endOfMonth,
  endOfWeek,
  endOfYear,
  format
} from "date-fns";

export const getLowerBound = filter => {
  const currentDate = new Date();
  switch (filter) {
    case "day":
      return format(currentDate, "YYYY-MM-DD");
    case "week":
      return format(startOfWeek(currentDate), "YYYY-MM-DD");
    case "month":
      return format(startOfMonth(currentDate), "YYYY-MM-DD");
    case "year":
      return format(startOfYear(currentDate), "YYYY-MM-DD");
    default:
      return format(currentDate, "YYYY-MM-DD");
  }
};

export const getUpperBound = filter => {
  const currentDate = new Date();
  switch (filter) {
    case "day":
      return format(currentDate, "YYYY-MM-DD");
    case "week":
      return format(endOfWeek(currentDate), "YYYY-MM-DD");
    case "month":
      return format(endOfMonth(currentDate), "YYYY-MM-DD");
    case "year":
      return format(endOfYear(currentDate), "YYYY-MM-DD");
    default:
      return format(currentDate, "YYYY-MM-DD");
  }
};
