import SiteFormComponent from '../components/form.js';
import {render, RenderPosition, KeyCode} from '../utils/render.js';

export default class TripController {
  constructor(container) {
    this._container = container;
  }

  render(events) {
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
