import SiteFormComponent from '../components/form.js';
import {render, RenderPosition, KeyCode} from '../utils/render.js';
import {Mode} from '../utils/common.js';

export default class PointController {
  constructor(container, onDataChange, onViewChange) {
    this._container = container;
    this._form = new SiteFormComponent();
    this._onDataChange = onDataChange;
    this._onViewChange = onViewChange;
    this._mode = Mode.DEFAULT;
    this._event = null;
  }

  _replaceFormToEvent() {
    this._mode = Mode.DEFAULT;
    this._container.replaceChild(this._event.getElement(), this._form.getElement());
  }

  _replaceEventToForm() {
    this._onViewChange();
    this._mode = Mode.EDIT;
    this._container.replaceChild(this._form.getElement(), this._event.getElement());
  }

  _afterRollupButtonClick() {
    this._replaceEventToForm();
    document.addEventListener(`keydown`, this._onEscPress);
  }

  _onEscPress(evt) {
    if (evt.keyCode === KeyCode.ESC) {
      evt.preventDefault();
      this._replaceFormToEvent();
      document.removeEventListener(`keydown`, this._onEscPress);
    }
  }

  render(event) {
    this._event = event;
    this._event.setRollupButton(this._afterRollupButtonClick.bind(this));
    this._form.getElement().addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      this._replaceFormToEvent();
    });

    this._form.setResetButton(this._replaceFormToEvent);
    render(this._container, this._event, RenderPosition.BEFOREEND);

    this._form.setOnFavotiteBtnClick(() => {
      this._onDataChange(this, this._event, Object.assign({}, this._event, {
        isFavorite: !this._event.isFavorite,
      }));
    });

  }
  setDefaultView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceFormToEvent();
    }
  }
}
