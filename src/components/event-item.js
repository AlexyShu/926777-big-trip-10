import {date, getTimeFormat, getDateFormat, getRandomArrayItem} from '../utils.js';
import {types, offer, offers} from '../mock/event-item.js';
import {towns} from '../mock/information.js';
import {createElement} from "../utils";

const createOffersTemplate = (items) => items.map((offer) => {
  return (
    `<li class="event__offer">
      <span class="event__offer-title">${offer.name}</span>
      &plus;
      &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
    </li>`
  );
})
  .join(``);


const createTaskCardTemplate = () => {
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
            <time class="event__start-time" datetime="${getDateFormat(date)}T${getTimeFormat(date)}">${getTimeFormat(date)}</time>
            &mdash;
            <time class="event__end-time" datetime="${getDateFormat(date)}T${getTimeFormat(date)}">${getTimeFormat(date)}</time>
          </p>
          <p class="event__duration">1H 30M</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${offer.price}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
        ${createOffersTemplate(offers)}
        </ul>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
       </div>
     </li>`
  );
};


export default class SiteEventItem {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return createTaskCardTemplate();
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}
