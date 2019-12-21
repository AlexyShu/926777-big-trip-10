import {createElement} from "../utils";

const createTaskMenuTemplate = (items) => {
  return (
    `<nav class="trip-controls__trip-tabs trip-tabs">
    ${items.map(({name, isActive}) => {
      return `<a class="trip-tabs__btn ${isActive ? `trip-tabs__btn--active` : ``}" href="#">${name}</a>`;
    }).join(`\n`)}
    </nav>`
  );
};

export default class SiteMenu {
  constructor(menuItems) {
    this._element = null;
    this._menuItems = menuItems;
  }
  getTemplate() {
    return createTaskMenuTemplate(this._menuItems);
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


