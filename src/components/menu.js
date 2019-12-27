import AbstractComponent from './abstract-component.js';

const createTaskMenuTemplate = (items) => {
  return (
    `<nav class="trip-controls__trip-tabs trip-tabs">
    ${items.map(({name, isActive}) => {
      return `<a class="trip-tabs__btn ${isActive ? `trip-tabs__btn--active` : ``}" href="#">${name}</a>`;
    }).join(`\n`)}
    </nav>`
  );
};

export default class SiteMenu extends AbstractComponent {
  constructor(menuItems) {
    super();
    this._menuItems = menuItems;
  }
  getTemplate() {
    return createTaskMenuTemplate(this._menuItems);
  }
}


