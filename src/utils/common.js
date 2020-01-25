import moment from 'moment';

const timeFormat = (date) => {
  return moment(date).format(`hh:mm`);
};

const dateFormat = (date) => {
  return moment(date).format();
};

const calculateTimeInterval = (time1, time2) => {
  const daysInt = moment(time2).diff(moment(time1), `days`);
  const hoursInt = moment(time2).diff(moment(time1), `hours`) - daysInt * 24;
  const minutesInt = moment(time2).diff(moment(time1), `minutes`) - daysInt * 60 * 24 - hoursInt * 60;

  const formattedInt = `${daysInt > 0 ? castInterval(daysInt, `D`) : ``} ${hoursInt > 0 ? castInterval(hoursInt, `H`) : ``} ${castInterval(minutesInt, `M`)}`;
  return formattedInt;
};

const castInterval = (timeValue, unitOfTime) => timeValue < 10 ? `0${timeValue}${unitOfTime}` : `${timeValue}${unitOfTime}`;

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

const getZeroFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

// const getTimeFormat = (dateUnix) => {
//   const date = new Date(dateUnix);

//   const hours = getZeroFormat(date.getHours());
//   const minutes = getZeroFormat(date.getMinutes());
//   return `${hours}:${minutes}`;
// };

// const getDateFormat = (dateUnix) => {
//   const date = new Date(dateUnix);

//   const year = date.getFullYear();
//   const month = getZeroFormat(date.getMonth() + 1);
//   const day = getZeroFormat(date.getDate());
//   return `${year}-${month}-${day}`;
// };

const getRandomDate = () => {
  return (
    Date.now() +
    1 +
    Math.floor(Math.random() * 7) * 24 * getRandomNumber(0, 60) * 60 * 1000
  );
};

const date = getRandomDate();

const Mode = {
  DEFAULT: `default`,
  EDIT: `edit`
};

export {Mode, date, getRandomIntegerNumber, getRandomNumber, getRandomArrayItem, getZeroFormat, calculateTimeInterval, timeFormat, dateFormat};
