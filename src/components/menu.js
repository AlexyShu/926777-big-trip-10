/* const createTaskMenuTemplate = () => {
  return (
    `
    <nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
      <a class="trip-tabs__btn" href="#">Stats</a>
    </nav>
    `
  );
};

export {createTaskMenuTemplate}; */

const createTaskMenuTemplate = (items) => {

  return (
    `<nav class="trip-controls__trip-tabs trip-tabs">
    ${items.map(({name, isActive}) => {
      return `<a class="trip-tabs__btn ${isActive ? `trip-tabs__btn--active` : ``}" href="#">${name}</a>`;
    }).join(`\n`)}
    </nav>`
  );
};

export {createTaskMenuTemplate};
