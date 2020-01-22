import {render, RenderPosition} from '../utils/render.js';
import SiteEventSortComponent from '../components/sort.js';
import {SortType} from '../mock/sort.js';
import PointController from './point-controller.js';

export default class TripController {
  constructor(container) {
    this._container = container;
    this._sort = new SiteEventSortComponent();
    this._events = [];
    this._pointControllers = [];
    this._onDataChange = this._onDataChange.bind(this);
    this._onViewChange = this._onViewChange.bind(this);
  }

  render(events) {
    this._pointControllers = [];
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

    eventItems.forEach((event) => {
      const pointController = new PointController(siteEventListElement, this._onDataChange, this._onViewChange);
      this._pointControllers.push(pointController);
      pointController.render(event);
    });
  }

  _onDataChange(pointController, oldData, newData) {
    const index = this._events.findIndex((it) => it === oldData);
    if (index === -1) {
      return;
    }
    this._events = [].concat(this._events.slice(0, index), newData, this._events.slice(index + 1));
    pointController.render(this._events[index]);
  }

  _onViewChange() {
    this._pointControllers.forEach((it) => {
      it.setDefaultView();
    });
  }
}
