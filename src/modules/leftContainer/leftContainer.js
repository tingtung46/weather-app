import { createSearchLoc } from './getLocation';
import { createTempWrapper } from './getTemp';
import { createTempToggleBtn } from './tempToggleBtn';

const leftContainer = document.querySelector('.left-container');

export const setupLeftContainer = (data, forecastData, celciusDegree) => {
  const weatherIcon = document.createElement('img');
  weatherIcon.classList.add('current-day-icon');
  weatherIcon.src = data.current.condition.icon;

  const weatherCond = document.createElement('p');
  weatherCond.classList.add('weather-condition');
  weatherCond.textContent = data.current.condition.text;

  const loc = document.createElement('p');
  loc.classList.add('location');
  loc.textContent = data.location.name;

  const tempWrapper = createTempWrapper(data, forecastData, celciusDegree);

  const feelsLike = document.createElement('p');
  feelsLike.classList.add('feels-like');
  feelsLike.textContent = `Feels like ${Math.floor(data.current.feelslike_c)}${celciusDegree}`;

  const searchLoc = createSearchLoc();
  const tempToggleBtn = createTempToggleBtn();

  leftContainer.append(
    weatherIcon,
    weatherCond,
    loc,
    tempWrapper,
    feelsLike,
    searchLoc,
    tempToggleBtn,
  );
};
