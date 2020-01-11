import {render, RenderPosition, KeyCode} from '../utils/render.js';
import SiteEventSortComponent from '../components/sort.js';
import {SortType} from '../mock/sort.js';
import SiteFormComponent from '../components/form.js';

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

    eventItems.forEach((event) => {
      const eventForm = new SiteFormComponent();
      const replaceFormToEvent = () => {
        this._container.replaceChild(event.getElement(), eventForm.getElement());
      };
      const replaceEventToForm = () => {
        this._container.replaceChild(eventForm.getElement(), event.getElement());
      };

      const afterRollupButtonClick = () => {
        replaceEventToForm();
        document.addEventListener(`keydown`, onEscPress);
      };

      event.setRollupButton(afterRollupButtonClick);
      eventForm.getElement().addEventListener(`submit`, (evt) => {
        evt.preventDefault();
        replaceFormToEvent();
      });

      const onEscPress = (evt) => {
        if (evt.keyCode === KeyCode.ESC) {
          evt.preventDefault();
          replaceFormToEvent();
          document.removeEventListener(`keydown`, onEscPress);
        }
      };

      eventForm.setResetButton(replaceFormToEvent);
      render(this._container, event, RenderPosition.BEFOREEND);
    });
  }
}
