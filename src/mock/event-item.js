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
    icon: `check-in`,
    name: `check-in in hotel in`
  },
  {
    icon: `sightseeing`,
    name: `sightseeing in`
  },
  {
    icon: `restaurant`,
    name: `restaurant in`
  },
  {
    icon: `trip`,
    name: `trip to`
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

const Price = {
  MIN: 5,
  MAX: 200,
};

export {types, offers, Price};
