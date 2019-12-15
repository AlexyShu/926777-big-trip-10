import {render, RenderPosition} from './utils.js';
import SiteMenuComponent from './components/menu.js';
import SiteFilterComponent from './components/filters.js';
import SiteEventItemComponent from './components/event-item.js';
import SiteEventListComponent from './components/event-list.js';
import SiteTripItemComponent from './components/trip-item.js';
import SiteTripListComponent from './components/trip-list.js';
import SiteFormComponent from './components/form.js';
import SiteInfoComponent from './components/information.js';

import {menuItems} from './mock/menu.js';
import {filters} from './mock/filters.js';

const siteMenuElement = document.querySelector(`.trip-main__trip-controls h2`);
const siteFilterElement = document.querySelector(`.trip-main__trip-controls`);
const siteFormElement = document.querySelector(`.trip-events h2`);
const siteInfoTripElement = document.querySelector(`.trip-main__trip-info`);
const siteTripEventElement = document.querySelector(`.trip-events`);

render(siteMenuElement, new SiteMenuComponent(menuItems).getTemplate(), RenderPosition.AFTEREND);
render(siteFilterElement, new SiteFilterComponent(filters).getTemplate(), RenderPosition.BEFOREEND);
render(siteFormElement, new SiteFormComponent().getTemplate(), RenderPosition.AFTEREND);
render(siteInfoTripElement, new SiteInfoComponent().getTemplate(), RenderPosition.AFTERBEGIN);
render(siteTripEventElement, new SiteTripListComponent().getTemplate(), RenderPosition.BEFOREEND);

const siteTripDayElement = document.querySelector(`.trip-days`);

render(siteTripDayElement, new SiteTripItemComponent().getTemplate(), RenderPosition.BEFOREEND);

const siteDayItemElement = document.querySelector(`.trip-days__item`);

render(siteDayItemElement, new SiteEventListComponent().getTemplate(), RenderPosition.BEFOREEND);

const siteEventListElement = document.querySelector(`.trip-events__list`);

const EVENT_CARD = 3;

new Array(EVENT_CARD)
.fill(``)
.forEach(() => render(siteEventListElement, new SiteEventItemComponent().getTemplate(), RenderPosition.BEFOREEND));
