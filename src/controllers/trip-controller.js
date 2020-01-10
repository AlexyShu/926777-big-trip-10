import SiteFormComponent from '../components/form.js';
import {render, RenderPosition, KeyCode} from '../utils/render.js';
import SiteEventSortComponent from '../components/sort.js';
import {SortType} from '../mock/sort.js';

export default class TripController {
  constructor(container) {
    this._container = container;
    this._sort = new SiteEventSortComponent();
  }

  render(events) {
    this._sort.setSortTypeChangeHandler((sortType) => {
      let sortedEvents = [];
      switch (sortType) {
        case SortType.EVENT:
          sortedEvents = events.slice();
          break;
        case SortType.TIME:
          sortedEvents = events.slice().sort((a, b) => b.date - a.date);
          break;
        case SortType.PRICE:
          sortedEvents = events.slice().sort((a, b) => b.price - a.price);
          break;
      }
    });
    render(this._container, this._sort, RenderPosition.AFTERBEGIN);

    events.forEach((event) => {
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
