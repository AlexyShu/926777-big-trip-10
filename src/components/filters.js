import AbstractComponent from './abstract-component.js';

const createFilterTemplate = (filter, isChecked) => {
  const {name, title} = filter;
  return (
    `<div class="trip-filters__filter">
      <input id="filter-${name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${name}" ${isChecked ? `checked` : ``}>
      <label class="trip-filters__filter-label" for="filter-${name}">${title}</label>
    </div>`
  );
};

const createTaskFilterTemplate = (items) => {
  const filtersTemplate = items.map((it, i) => createFilterTemplate(it, i === 0)).join(`\n`);
  return (
    `<form class="trip-filters  trip-filters" action="#" method="get">
      ${filtersTemplate}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};

export default class SiteFilter extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }
  getTemplate() {
    return createTaskFilterTemplate(this._filters);
  }
}
