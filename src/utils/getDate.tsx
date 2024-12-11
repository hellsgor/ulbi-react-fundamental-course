export const getDate = (date: string | number | Date, locale: string) =>
  new Date(date).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
