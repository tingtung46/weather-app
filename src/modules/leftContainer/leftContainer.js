import { createSearchLoc } from './getLocation';
import { createTempWrapper } from './getTemp';
import { createTempToggleBtn } from './tempToggleBtn';

const leftContainer = document.querySelector('.left-container');

export const setupLeftContainer = (data, forecastData, celsiusDegree, fahrenheitDegree) => {
  const weatherIcon = document.createElement('img');
  weatherIcon.classList.add('current-day-icon');
  weatherIcon.src = data.current.condition.icon;

  const weatherCond = document.createElement('p');
  weatherCond.classList.add('weather-condition');
  weatherCond.textContent = data.current.condition.text;

  const loc = document.createElement('p');
  loc.classList.add('location');
  loc.textContent = data.location.name;

  const tempWrapper = createTempWrapper(data, forecastData, celsiusDegree);

  const feelsLike = document.createElement('p');
  feelsLike.className = 'feels-like temp';
  feelsLike.textContent = `Feels like ${Math.floor(data.current.feelslike_c)}${celsiusDegree}`;

  const searchLoc = createSearchLoc();
  const tempToggleInp = createTempToggleBtn(celsiusDegree, fahrenheitDegree).tempInput;
  const tempToggleLabel = createTempToggleBtn(celsiusDegree, fahrenheitDegree).tempLabel;

  leftContainer.append(
    weatherIcon,
    weatherCond,
    loc,
    tempWrapper,
    feelsLike,
    searchLoc,
    tempToggleInp,
    tempToggleLabel,
  );
};
