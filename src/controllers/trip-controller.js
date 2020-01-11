import {render, RenderPosition} from '../utils/render.js';
import SiteEventSortComponent from '../components/sort.js';
import {SortType} from '../mock/sort.js';
import PointController from './point-controller.js';

export default class TripController {
  constructor(container) {
    this._container = container;
    this._sort = new SiteEventSortComponent();
  }

  render(events) {
    let eventItems = events.slice();
    this._sort.setSortTypeChangeHandler((sortType) => {
      switch (sortType) {
        case SortType.EVENT:
          eventItems = events.slice();
          break;
        case SortType.TIME:
          eventItems.sort((a, b) => b._date - a._date);
          break;
        case SortType.PRICE:
          eventItems.sort((a, b) => b._price - a._price);
          break;
      }
      this.render(eventItems);
    });
    render(this._container, this._sort, RenderPosition.AFTERBEGIN);
    const siteEventListElement = document.querySelector(`.trip-events__list`);
    const pointController = new PointController(siteEventListElement);


    eventItems.forEach((event) => {
      pointController.render(event);
    });
  }
}
