export default {
  getFirstDayOfMonth(date) {
    const {year, month} = getYearMonthDay(date);
    return new Date(year, month, 1);
  },
  getLastDayOfMonth(date) {
    const {year, month, day} = getYearMonthDay(date);
    return new Date(year, month + 1, 0);
  },
  getYearMonthDay,
  range(start, end) {
    const arr = [];
    for (let i = start; i < end; i++) {
      arr.push(i);
    }
    return arr;
  },
  setMonth(date, n) {
    const currentMonth = date.getMonth();
    const copyDate = new Date(date);
    copyDate.setMonth(currentMonth + n);
    return copyDate;
  },
  setYear(date, n) {
    const currentYear = date.getFullYear();
    const copyDate = new Date(date);
    copyDate.setFullYear(currentYear + n);
    return copyDate;
  }
}

function getYearMonthDay(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return {
    year,
    month,
    day
  }
}