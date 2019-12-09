import {render} from './utils.js';
import {createTaskMenuTemplate} from './components/menu.js';
import {createTaskFilterTemplate} from './components/filters.js';
import {createTaskCardTemplate} from './components/event-item.js';
import {createEventListTemplate} from './components/event-list.js';
import {createTripDayItemTemplate} from './components/trip-item.js';
import {createTripDayWrapperTemplate} from './components/trip-list.js';
import {createTaskFormTemplate} from './components/form.js';
import {createTaskTripInfoTemplate} from './components/information.js';

import {filters} from './mock/filters.js';
import {menuItems} from './mock/menu.js';
import {towns} from './mock/information.js';

const siteMenuElement = document.querySelector(`.trip-main__trip-controls h2`);
const siteFilterElement = document.querySelector(`.trip-main__trip-controls`);
const siteFormElement = document.querySelector(`.trip-events h2`);
const siteInfoTripElement = document.querySelector(`.trip-main__trip-info`);
const siteTripEventElement = document.querySelector(`.trip-events`);

render(siteMenuElement, createTaskMenuTemplate(menuItems), `afterend`);
render(siteFilterElement, createTaskFilterTemplate(filters), `beforeend`);
render(siteFormElement, createTaskFormTemplate(), `afterend`);
render(siteInfoTripElement, createTaskTripInfoTemplate(towns), `afterbegin`);
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
