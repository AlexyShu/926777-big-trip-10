import {createElement} from "../utils";

export default class SiteTripItem {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return (
      `<li class="trip-days__item  day">
        <div class="day__info"></div>
      </li>`
    );
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
