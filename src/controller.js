import SiteEventItemComponent from './components/event-item.js';
import SiteFormComponent from './components/form.js';
import {render, RenderPosition, KeyCode} from './utils/render.js';
import SiteNoEventComponent from './components/no-event.js';
const siteTripEventElement = document.querySelector(`.trip-events`);
const EVENT_COUNT = 7;

export default class TripController {
  constructor(container) {
    this._container = container;

    this._eventItem = new SiteEventItemComponent();
    this._eventForm = new SiteFormComponent();
    this._noEvent = new SiteNoEventComponent();
  }

  renderEvents() {
    if (EVENT_COUNT === 0) {
      render(siteTripEventElement, this._noEvent, RenderPosition.BEFOREEND);
    }

    for (let i = 0; i < EVENT_COUNT; i++) {
      const siteEventListElement = document.querySelector(`.trip-events__list`);
      const replaceFormToEvent = () => {
        siteEventListElement.replaceChild(this._eventItem.getElement(), this._eventForm.getElement());
      };
      const replaceEventToForm = () => {
        siteEventListElement.replaceChild(this._eventForm.getElement(), this._eventItem.getElement());
      };

      const afterRollupButtonClick = () => {
        replaceEventToForm();
        document.addEventListener(`keydown`, onEscPress);
      };

      this._eventItem.setRollupButton(afterRollupButtonClick);
      this._eventForm.getElement().addEventListener(`submit`, (evt) => {
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

      this._eventForm.setResetButton(replaceFormToEvent);
      render(siteEventListElement, this._eventItem, RenderPosition.BEFOREEND);
    }
  }
}
