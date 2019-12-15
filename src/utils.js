const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTEREND:
      container.after(element);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

// const render = (container, template, place) => {
//   container.insertAdjacentHTML(place, template);
// };

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

const getTimeFormat = (dateUnix) => {
  const date = new Date(dateUnix);

  const hours = getZeroFormat(date.getHours());
  const minutes = getZeroFormat(date.getMinutes());
  return `${hours}:${minutes}`;
};

const getDateFormat = (dateUnix) => {
  const date = new Date(dateUnix);

  const year = date.getFullYear();
  const month = getZeroFormat(date.getMonth() + 1);
  const day = getZeroFormat(date.getDate());
  return `${year}-${month}-${day}`;
};

const getRandomDate = () => {
  return (
    Date.now() +
    1 +
    Math.floor(Math.random() * 7) * 24 * getRandomNumber(0, 60) * 60 * 1000
  );
};

const date = getRandomDate();

export {render, RenderPosition, date, createElement, getRandomIntegerNumber, getRandomNumber, getRandomArrayItem, getTimeFormat, getDateFormat};
