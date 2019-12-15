/* const createTaskTripInfoTemplate = () => {
  return (
    `
    <div class="trip-info__main">
      <h1 class="trip-info__title">Amsterdam &mdash; ... &mdash; Amsterdam</h1>
      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;21</p>
    </div>

    `
  );
};

export {createTaskTripInfoTemplate}; */

import {getRandomIntegerNumber} from '../utils.js';
import {towns} from '../mock/information.js';

const createTaskTripInfoTemplate = () => {
  return (
    `
    <div class="trip-info__main">
      <h1 class="trip-info__title">${towns[getRandomIntegerNumber(0, towns.length)]} &mdash; ... &mdash; ${towns[getRandomIntegerNumber(0, towns.length)]} </h1>
      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;21</p>
    </div>
    `
  );
};

export {createTaskTripInfoTemplate};
