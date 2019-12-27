import AbstractComponent from './abstract-component.js';

export default class SiteEventList extends AbstractComponent {
  getTemplate() {
    return (
      `<ul class="trip-events__list">
      </ul>`
    );
  }
}
