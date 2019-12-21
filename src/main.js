import {render, RenderPosition, KeyCode} from './utils.js';
import SiteMenuComponent from './components/menu.js';
import SiteFilterComponent from './components/filters.js';
import SiteEventItemComponent from './components/event-item.js';
import SiteEventListComponent from './components/event-list.js';
import SiteTripItemComponent from './components/trip-item.js';
import SiteTripListComponent from './components/trip-list.js';
import SiteFormComponent from './components/form.js';
import SiteInfoComponent from './components/information.js';
import SiteEventSortComponent from './components/event-sort.js';
import SiteNoEventComponent from './components/no-event.js';

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
render(siteInfoTripElement, new SiteInfoComponent().getElement(), RenderPosition.AFTERBEGIN);
render(siteTripEventElement, new SiteTripListComponent().getElement(), RenderPosition.BEFOREEND);

const siteTripDayElement = document.querySelector(`.trip-days`);

render(siteTripDayElement, new SiteTripItemComponent().getElement(), RenderPosition.BEFOREEND);

const siteDayItemElement = document.querySelector(`.trip-days__item`);

render(siteDayItemElement, new SiteEventListComponent().getElement(), RenderPosition.BEFOREEND);

const siteEventListElement = document.querySelector(`.trip-events__list`);

const EVENT_COUNT = 7;

if (EVENT_COUNT === 0) {
  render(siteTripEventElement, new SiteNoEventComponent().getElement(), RenderPosition.BEFOREEND);
}

for (let i = 0; i < EVENT_COUNT; i++) {
  const eventItem = new SiteEventItemComponent();
  const eventForm = new SiteFormComponent();

  const replaceFormToEvent = () => {
    siteEventListElement.replaceChild(eventItem.getElement(), eventForm.getElement());
  };
  const replaceEventToForm = () => {
    siteEventListElement.replaceChild(eventForm.getElement(), eventItem.getElement());
  };
  const rollupButton = eventItem.getElement().querySelector(`.event__rollup-btn`);
  rollupButton.addEventListener(`click`, () => {
    replaceEventToForm();
    document.addEventListener(`keydown`, onEscPress);
  });

  const resetButton = eventForm.getElement().querySelector(`.event__reset-btn`);
  const formElement = eventForm.getElement();

  formElement.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    replaceFormToEvent();
  });

  const onEscPress = (evt) => {
    if (evt.keyCode === KeyCode.ESC) {
      evt.preventDefault();
      replaceFormToEvent();
      document.removeEventListener(`keydown`, onEscPress);
    }
  };

  resetButton.addEventListener(`click`, replaceFormToEvent);
  render(siteEventListElement, eventItem.getElement(), RenderPosition.BEFOREEND);
}
