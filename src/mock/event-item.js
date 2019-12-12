import {getRandomArrayItem} from '../utils.js';

const types = [
  {
    icon: `taxi`,
    name: `taxi to`
  },
  {
    icon: `train`,
    name: `train to`
  },
  {
    icon: `bus`,
    name: `bus to`
  },
  {
    icon: `ship`,
    name: `ship to`
  },
  {
    icon: `transport`,
    name: `transport to`
  },
  {
    icon: `drive`,
    name: `drive to`
  },
  {
    icon: `flight`,
    name: `flight to`
  },
  {
    name: `check-in`,
    sring: `check-in in hotel in`
  },
  {
    name: `sightseeing`,
    sring: `sightseeing in`
  },
  {
    name: `restaurant`,
    sring: `restaurant in`
  },
  {
    name: `trip`,
    sring: `trip to`
  }
];

const offers = [
  {
    name: `Add luggage`,
    price: 10,
    checked: true
  },
  {
    name: `Switch to comfort class`,
    price: 150,
    checked: true
  },
  {
    name: `Add meal`,
    price: 2,
    checked: true
  },
  {
    name: `Choose seats`,
    price: 9,
    checked: true
  }
];

const offer = getRandomArrayItem(offers);

export {types, offer, offers};
