import {render, RenderPosition} from './utils.js';
import SiteMenuComponent from './components/menu.js';
import SiteFilterComponent from './components/filters.js';
import SiteEventItemComponent from './components/event-item.js';
import SiteEventListComponent from './components/event-list.js';
import SiteTripItemComponent from './components/trip-item.js';
import SiteTripListComponent from './components/trip-list.js';
import SiteFormComponent from './components/form.js';
import SiteInfoComponent from './components/information.js';
import SiteEventSortComponent from './components/event-sort.js';

import {menuItems} from './mock/menu.js';
import {filters} from './mock/filters.js';

const siteMenuElement = document.querySelector(`.trip-main__trip-controls h2`);
const siteFilterElement = document.querySelector(`.trip-main__trip-controls`);
const siteFormElement = document.querySelector(`.trip-events h2`);
const siteInfoTripElement = document.querySelector(`.trip-main__trip-info`);
const siteTripEventElement = document.querySelector(`.trip-events`);


render(siteMenuElement, new SiteMenuComponent(menuItems).getElement(), RenderPosition.AFTEREND);
render(siteFilterElement, new SiteFilterComponent(filters).getElement(), RenderPosition.BEFOREEND);
render(siteFormElement, new SiteEventSortComponent().getElement(), RenderPosition.AFTEREND);

// const siteEventSortElement = document.querySelector(`.trip-sort`);

// render(siteEventSortElement, new SiteFormComponent().getElement(), RenderPosition.AFTEREND);
render(siteInfoTripElement, new SiteInfoComponent().getElement(), RenderPosition.AFTERBEGIN);
render(siteTripEventElement, new SiteTripListComponent().getElement(), RenderPosition.BEFOREEND);

const siteTripDayElement = document.querySelector(`.trip-days`);

render(siteTripDayElement, new SiteTripItemComponent().getElement(), RenderPosition.BEFOREEND);

const siteDayItemElement = document.querySelector(`.trip-days__item`);

render(siteDayItemElement, new SiteEventListComponent().getElement(), RenderPosition.BEFOREEND);

const siteEventListElement = document.querySelector(`.trip-events__list`);

const EVENT_CARD = 3;

new Array(EVENT_CARD)
.fill(``)
.forEach(() => render(siteEventListElement, new SiteEventItemComponent().getElement(), RenderPosition.BEFOREEND));


const eventForm = new SiteFormComponent();
const eventItem = new SiteEventItemComponent();


const eventEditButton = document.querySelector(`.event__rollup-btn`);
const eventEditForm = eventForm.getElement();

const editItem = () => {
  siteEventListElement.replaceChild(eventForm.getElement(), eventItem.getElement());
};

const siteEventSortElement = document.querySelector(`.trip-sort`);

const editForm = () => {
  siteEventSortElement.replaceChild(eventItem.getElement(), eventForm.getElement());
};

eventEditButton.addEventListener(`click`, editItem());
eventEditForm.addEventListener(`submit`, editForm());

render(siteEventSortElement, new SiteFormComponent().getElement(), RenderPosition.AFTEREND);
