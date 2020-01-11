import {date, getTimeFormat, getDateFormat, getRandomArrayItem, getRandomNumber} from '../utils/common.js';
import {types, offers, Price} from '../mock/event-item.js';
import {towns} from '../mock/information.js';
import AbstractComponent from './abstract-component.js';

const createOffersTemplate = (items) => items.map((it) => {
  const offer = getRandomArrayItem(offers);
  return (
    `<li class="event__offer">
      <span class="event__offer-title">${offer.name}</span>
      &plus;
      &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
    </li>`
  );
})
  .join(``);


const createTaskCardTemplate = (coast, time, extraService) => {
  const type = getRandomArrayItem(types);
  return (
    `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type.icon}.png" alt="Event type icon">
        </div>
        <h3 class="event__title"> ${type.name} ${getRandomArrayItem(towns)}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${getDateFormat(time)}T${getTimeFormat(time)}">${getTimeFormat(time)}</time>
            &mdash;
            <time class="event__end-time" datetime="${getDateFormat(time)}T${getTimeFormat(time)}">${getTimeFormat(time)}</time>
          </p>
          <p class="event__duration">1H 30M</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${coast}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
        ${createOffersTemplate(extraService)}
        </ul>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
       </div>
     </li>`
  );
};

export default class SiteEventItem extends AbstractComponent {
  constructor() {
    super();
    this._price = getRandomNumber(Price.MIN, Price.MAX);
    this._date = date;
    this._offers = offers;
  }
  getTemplate() {
    return createTaskCardTemplate(this._price, this._date, this._offers);
  }
  setRollupButton(handler) {
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, handler);
  }
}
