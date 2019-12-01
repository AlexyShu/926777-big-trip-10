import {render} from './components/utils.js';
import {createTaskMenuTemplate} from './components/menu.js';
import {createTaskFilterTemplate} from './components/filters.js';
import {createTripDayWrapperTemplate, createTripDayItemTemplate, createEventListTemplate, createTaskCardTemplate} from './components/card.js';
import {createTaskFormTemplate} from './components/form.js';
import {createTaskTripInfoTemplate} from './components/information.js';

const siteMenuElement = document.querySelector(`.trip-main__trip-controls h2`);
const siteFilterElement = document.querySelector(`.trip-main__trip-controls`);
const siteFormElement = document.querySelector(`.trip-events h2`);
const siteInfoTripElement = document.querySelector(`.trip-events`);
const siteTripEventElement = document.querySelector(`.trip-events`);

render(siteMenuElement, createTaskMenuTemplate(), `afterend`);
render(siteFilterElement, createTaskFilterTemplate(), `beforeend`);
render(siteFormElement, createTaskFormTemplate(), `afterend`);
render(siteInfoTripElement, createTaskTripInfoTemplate(), `afterbegin`);
render(siteTripEventElement, createTripDayWrapperTemplate(), `beforeend`);

const siteTripDayElement = document.querySelector(`.trip-days`);

render(siteTripDayElement, createTripDayItemTemplate(), `beforeend`);

const siteDayItemElement = document.querySelector(`.trip-days__item`);

render(siteDayItemElement, createEventListTemplate(), `beforeend`);

const siteEventListElement = document.querySelector(`.trip-events__list`);

const EVENT_CARD = 3;

new Array(EVENT_CARD)
.fill(``)
.forEach(() => render(siteEventListElement, createTaskCardTemplate(), `beforeend`));
