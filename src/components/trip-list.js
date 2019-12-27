import AbstractComponent from './abstract-component.js';

export default class SiteTripList extends AbstractComponent {
  getTemplate() {
    return (
      `<ul class="trip-days">
      </ul>`
    );
  }
}
