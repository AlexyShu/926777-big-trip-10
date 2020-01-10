import SiteFormComponent from '../components/form.js';
import {render, RenderPosition, KeyCode} from '../utils/render.js';

export default class PointController {
  constructor(container) {
    this._container = container;
    this._form = new SiteFormComponent();
  }
  render(event) {
    const replaceFormToEvent = () => {
      this._container.replaceChild(event.getElement(), this._form.getElement());
    };
    const replaceEventToForm = () => {
      this._container.replaceChild(this._form.getElement(), event.getElement());
    };

    const afterRollupButtonClick = () => {
      replaceEventToForm();
      document.addEventListener(`keydown`, onEscPress);
    };

    event.setRollupButton(afterRollupButtonClick);
    this._form.getElement().addEventListener(`submit`, (evt) => {
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

    this._form.setResetButton(replaceFormToEvent);
    render(this._container, event, RenderPosition.BEFOREEND);
  }
}
