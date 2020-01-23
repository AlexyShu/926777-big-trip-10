import flatpickr from 'flatpickr';
import {getRandomIntegerNumber, getRandomArrayItem} from '../utils/common.js';
import {descriptions, pictures} from '../mock/form.js';
import AbstractSmartComponent from './abstract-smart-component.js';
import {types, offers} from '../mock/event-item.js';
import {towns} from '../mock/information.js';

const getRandomDescription = () => {
  const descriptionLength = getRandomIntegerNumber(1, 3);
  const description = new Set();
  for (let i = 0; i < descriptionLength; i++) {
    description.add(getRandomArrayItem(descriptions));
  }
  return Array.from(description).join(` `);
};

const createPicturesTemplate = (pics) => {
  return pics.map((picture) => `<img class="event__photo" src="${picture}" alt="Event photo"></img>`).join(`\n`);
};

const createDestinationOptions = (destinations) => {
  return destinations.map((destination) => {
    return (
      `<option value="${destination}"></option>`
    );
  }).join(`\n`);
};

const createOffersTemplate = (items) => items.map((it) => {
  return (
    `<div class="event__available-offers">
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-${it.name}-1" type="checkbox" name="event-${it.name}" ${it.check ? `checked` : ``}>
      <label class="event__offer-label" for="event-${it.name}-1">
        <span class="event__offer-title">${it.name}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${it.price}</span>
      </label>
    </div>`
  );
})
  .join(``);


const createIconsTemplate = (items) => items.map((it) => {
  return (
    `<div class="event__type-item">
        <input id="event-type-${it.icon}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${it.icon}">
           <label class="event__type-label  event__type-label--${it.icon}" for="event-type-${it.icon}-1">${it.icon}</label>
      </div>`
  );
})
  .join(``);

export default class SiteForm extends AbstractSmartComponent {
  constructor() {

    super();

    const randomType = getRandomArrayItem(types);

    this._type = randomType.icon;
    this._town = getRandomArrayItem(towns);
    this._offer = randomType.name;
    this._destination = createDestinationOptions(towns);
    this._info = getRandomDescription();
    this._picturesTemplate = createPicturesTemplate(pictures);
    this._flatpickr = null;
    this._defaultDate = `18/03/19 00:00`;

    this._applyFlatpickr();
    this._addListeners();
  }

  getTemplate() {
    return (
      `<form class="trip-events__item  event  event--edit" action="#" method="post">
             <header class="event__header">
               <div class="event__type-wrapper">
                 <label class="event__type  event__type-btn" for="event-type-toggle-1">
                   <span class="visually-hidden">Choose event type</span>
                   <img class="event__type-icon" width="17" height="17" src="img/icons/${this._type}.png" alt="Event type icon">
                 </label>
                 <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
                 <div class="event__type-list">
                   <fieldset class="event__type-group">
                     <legend class="visually-hidden">Activity</legend>
                   ${createIconsTemplate(types)}
                   </fieldset>
                 </div>
               </div>
               <div class="event__field-group  event__field-group--destination">
                 <label class="event__label  event__type-output" for="event-destination-1">
                 ${this._offer}
                 </label>
                 <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${this._town}"  list="destination-list-1">
                 <datalist id="destination-list-1">
                 ${this._destination}
                 </datalist>
               </div>
               <div class="event__field-group  event__field-group--time">
                 <label class="visually-hidden" for="event-start-time-1">
                   From
                 </label>
                 <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${this._defaultDate}">
                 &mdash;
                 <label class="visually-hidden" for="event-end-time-1">
                   To
                 </label>
                 <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${this._defaultDate}">
               </div>
               <div class="event__field-group  event__field-group--price">
                 <label class="event__label" for="event-price-1">
                   <span class="visually-hidden">Price</span>
                   &euro;
                 </label>
                 <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
               </div>
               <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
               <button class="event__reset-btn" type="reset">Cancel</button>
               <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" checked>
               <label class="event__favorite-btn" for="event-favorite-1">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                  <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                </svg>
               </label>
               <button class="event__rollup-btn" type="button">
                 <span class="visually-hidden">Open event</span>
               </button>
             </header>
             <section class="event__details">
             <section class="event__section  event__section--offers">
               <h3 class="event__section-title  event__section-title--offers">Offers</h3>
               ${createOffersTemplate(offers)}
             </section>
             <section class="event__section  event__section--destination">
                 <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                 <p class="event__destination-description"> ${this._info} </p>
                 <div class="event__photos-container">
                   <div class="event__photos-tape">
                   ${this._picturesTemplate}
                   </div>
                 </div>
               </section>
             </section>
          </form>`
    );
  }

  removeElement() {
    if (this._flatpickr) {
      this._flatpickr.destroy();
      this._flatpickr = null;
    }
    super.removeElement();
  }

  rerender() {
    super.rerender();
    this._applyFlatpickr();
  }

  setResetButton(handler) {
    this.getElement().querySelector(`.event__reset-btn`).addEventListener(`click`, handler);
  }

  setOnFavotiteBtnClick(handler) {
    this.getElement().querySelector(`.event__favorite-checkbox`).addEventListener(`click`, handler);
  }

  recoveryListeners() {
    this._addListeners();
  }

  _applyFlatpickr() {
    if (this._flatpickr) {
      this._flatpickr.destroy();
      this._flatpickr = null;
    }

    if (this._isDateShowing) {
      const dateElement = this.getElement().querySelector(`.event__input--time`);
      this._flatpickr = flatpickr(dateElement, {
        enableTime: true,
        dateFormat: `d/m/y H:i`,
        minDate: `today`,
        defaultDate: this.defaultDate,
        allowInput: true,
      });
    }
  }

  _addListeners() {
    const element = this.getElement();

    const eventInput = element.querySelector(`.event__input--destination`);
    eventInput.addEventListener(`change`, (evt) => {
      this._town = evt.target.value;
      this._info = getRandomDescription();
      this.rerender();
    });


    element.querySelectorAll(`.event__type-input`).forEach((it) => {
      it.addEventListener(`change`, (evt) => {
        this._type = evt.target.value;
        const typeObj = types.find((it) => it.icon === this._type);
        this._offer = typeObj.name;
        this.rerender();
      });
    });
  }
}
