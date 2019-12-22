const RenderPosition = {
  AFTERBEGIN: `prepend`,
  AFTEREND: `afterend`,
  BEFOREEND: `beforeend`
};

const KeyCode = {
  ESC: 27
};

const render = (container, component, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
    case RenderPosition.AFTEREND:
      container.after(component.getElement());
      break;
  }
};

// export const remove = (component) => {
//   component.getElement().remove();
//   component.removeElement();
// };

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};


export {render, RenderPosition, KeyCode, createElement};
