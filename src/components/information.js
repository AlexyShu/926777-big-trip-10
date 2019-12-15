import {getRandomIntegerNumber} from '../utils.js';
import {towns} from '../mock/information.js';
import {createElement} from "../utils";

export default class SiteInfo {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return (
      `
      <div class="trip-info__main">
        <h1 class="trip-info__title">${towns[getRandomIntegerNumber(0, towns.length)]} &mdash; ... &mdash; ${towns[getRandomIntegerNumber(0, towns.length)]} </h1>
        <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;21</p>
      </div>
      `
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
