const leftContainer = document.querySelector('.left-container');
const forecastDay = document.querySelector('.forecast-day');
const currentInfo = document.querySelector('.current-info');
const currentHours = document.querySelector('.current-hours');

export const resetContainer = () => {
  clearElement(leftContainer);
  clearElement(forecastDay);
  clearElement(currentInfo);
  clearElement(currentHours);
};

const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};
