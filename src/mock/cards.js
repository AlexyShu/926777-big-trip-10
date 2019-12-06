const OFFERS_COUNT = 3;
const CARDS_COUNT = 15;

const types = [
  `taxi`,
  `bus`,
  `train`,
  `ship`,
  `transport`,
  `drive`,
  `flight`,
  `check-in`,
  `sightseeing`,
  `restaurant`,
  `trip`
];

const offers = [
  {
    name: `Add luggage`,
    type: `luggage`,
    price: 10,
    checked: true
  },
  {
    name: `Switch to comfort class`,
    type: `comfort class`,
    price: 150,
    checked: true
  },
  {
    name: `Add meal`,
    type: `meal`,
    price: 2,
    checked: true
  },
  {
    name: `Choose seats`,
    type: `seats`,
    price: 9,
    checked: true
  }
];

const descriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const towns = [`Amsterdam`, `Geneva`, `Chamonix`, `Geneva`];

const getRandomPhoto = () => `http://picsum.photos/300/150?r=${Math.random()}`;

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getRandomDate = () => {
  return (
    Date.now() +
    1 +
    Math.floor(Math.random() * 7) * 24 * getRandomNumber(0, 60) * 60 * 1000
  );
};

const getRandomDescriprion = () =>
  shuffleArray(descriptions)
    .slice(0, getRandomIntegerNumber(1, 4))
    .join(` `);

const generateCard = () => {
  const startDate = getRandomDate();
  const endDate = getRandomDate();
  return {
    type: getRandomArrayItem(types),
    offer: shuffleArray(offers).slice(0, OFFERS_COUNT),
    description: getRandomDescriprion(descriptions),
    town: getRandomArrayItem(towns),
    photo: Array(5)
      .fill(``)
      .map(getRandomPhoto),
    startDate: Math.min(startDate, endDate),
    endDate: Math.max(startDate, endDate),
  };
};

const generateCards = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateCard);
};

const cards = generateCards(CARDS_COUNT);

export {cards};
