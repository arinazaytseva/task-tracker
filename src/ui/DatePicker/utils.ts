export const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${year}-${formattedMonth}-${formattedDay}`;
};

export const parseDate = (stringDate: string): Date => {
  const [year, month, day] = stringDate.split('-');

  const formattedDay = Number(day.replaceAll('0', ''));
  const monthIndex = Number(month) - 1;

  return new Date(Date.UTC(Number(year), monthIndex, formattedDay));
  // const date = new Date(Date.UTC());
};
