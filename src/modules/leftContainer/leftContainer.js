import location from '../../assets/icons/location-pin-svgrepo-com.svg';

const leftContainer = document.querySelector('.left-container');

export const setupLeftContainer = (
  data,
  forecastData,
  degreeCelcius,
) => {
  const weatherIcon = document.createElement('img');
  weatherIcon.classList.add('current-day-icon');
  weatherIcon.src = data.current.condition.icon;

  const weatherCond = document.createElement('p');
  weatherCond.classList.add('weather-condition');
  weatherCond.textContent = data.current.condition.text;

  const loc = document.createElement('p');
  loc.classList.add('location');
  loc.textContent = data.location.name;

  const tempWrapper = createTempWrapper(
    data,
    forecastData,
    degreeCelcius,
  );

  const feelsLike = document.createElement('p');
  feelsLike.classList.add('feels-like');
  feelsLike.textContent = `Feels like ${Math.floor(data.current.feelslike_c)}${degreeCelcius}`;

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

const createTempWrapper = (data, forecastData, degreeCelcius) => {
  const tempWrapper = document.createElement('div');
  tempWrapper.classList.add('temp-wrapper');

  const temp = document.createElement('h1');
  temp.classList.add('avrg-temp');
  temp.textContent = `${Math.floor(data.current.temp_c)}${degreeCelcius}`;

  const minMaxTemp = document.createElement('div');
  minMaxTemp.classList.add('minmax-temp');

  const minTemp = document.createElement('div');
  minTemp.classList.add('minmax');
  minTemp.textContent = `${Math.floor(forecastData[0].day.mintemp_c)}${degreeCelcius}`;

  const maxTemp = document.createElement('div');
  maxTemp.classList.add('minmax');
  maxTemp.textContent = `${Math.floor(forecastData[0].day.maxtemp_c)}${degreeCelcius}`;

  tempWrapper.append(temp, minMaxTemp);
  minMaxTemp.append(minTemp, maxTemp);

  return tempWrapper;
};

const createSearchLoc = () => {
  const searchLoc = document.createElement('form');
  searchLoc.setAttribute('role', 'change-location');

  const searchInp = document.createElement('input');
  searchInp.setAttribute('type', 'text');
  searchInp.setAttribute('name', 'search');
  searchInp.setAttribute('id', 'search');
  searchInp.setAttribute('placeholder', 'Change Location');
  searchInp.required = true;

  const locIcon = document.createElement('img');
  locIcon.classList.add('loc-icon');
  locIcon.src = location;

  searchLoc.append(searchInp, locIcon);

  return searchLoc;
};

const createTempToggleBtn = () => {
  const tempLabel = document.createElement('label');
  tempLabel.setAttribute('for', 'toggle');
  tempLabel.classList.add('btn');

  const tempInput = document.createElement('input');
  tempInput.setAttribute('type', 'checkbox');
  tempInput.setAttribute('id', 'toggle');

  tempLabel.appendChild(tempInput);

  return tempLabel;
};
