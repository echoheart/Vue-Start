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