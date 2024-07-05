import windSpeed from '../../assets/icons/wi-strong-wind.svg';
import humidity from '../../assets/icons/wi-humidity.svg';
import sunrise from '../../assets/icons/wi-sunrise.svg';
import sunset from '../../assets/icons/wi-sunset.svg';

const currentInfo = document.querySelector('.current-info');

export const displayCurrentDayInfo = (data, forecastData) => {
  const windSpeedInfo = createWindSpeedInfo(data);
  const humidityInfo = createHumidityInfo(data);
  const sunriseInfo = createSunriseInfo(forecastData);
  const sunsetInfo = createSunsetInfo(forecastData);

  currentInfo.append(windSpeedInfo, humidityInfo, sunriseInfo, sunsetInfo);
};

const createWindSpeedInfo = (data) => {
  const windSpeedInfo = document.createElement('div');
  const windSpeedIcon = document.createElement('img');
  windSpeedInfo.classList.add('item-info');
  windSpeedIcon.classList.add('icon-info');

  windSpeedIcon.src = windSpeed;
  const windSpeedText = document.createElement('p');
  windSpeedText.textContent = `${data.current.wind_kph} km/h`;

  windSpeedInfo.append(windSpeedIcon, windSpeedText);
  return windSpeedInfo;
};

const createHumidityInfo = (data) => {
  const humidityInfo = document.createElement('div');
  const humidityIcon = document.createElement('img');
  humidityInfo.classList.add('item-info');
  humidityIcon.classList.add('icon-info');

  humidityIcon.src = humidity;
  const humidityText = document.createElement('p');
  humidityText.textContent = `${data.current.humidity}%`;

  humidityInfo.append(humidityIcon, humidityText);
  return humidityInfo;
};

const createSunriseInfo = (forecastData) => {
  const sunriseInfo = document.createElement('div');
  const sunriseIcon = document.createElement('img');
  sunriseInfo.classList.add('item-info');
  sunriseIcon.classList.add('icon-info');

  sunriseIcon.src = sunrise;
  const sunriseText = document.createElement('p');
  const sunriseTime = forecastData[0].astro.sunrise;
  sunriseText.textContent = convertTime12to24(sunriseTime);

  sunriseInfo.append(sunriseIcon, sunriseText);
  return sunriseInfo;
};

const createSunsetInfo = (forecastData) => {
  const sunsetInfo = document.createElement('div');
  const sunsetIcon = document.createElement('img');
  sunsetInfo.classList.add('item-info');
  sunsetIcon.classList.add('icon-info');

  sunsetIcon.src = sunset;
  const sunsetText = document.createElement('p');
  const sunsetTime = forecastData[0].astro.sunset;
  sunsetText.textContent = convertTime12to24(sunsetTime);

  sunsetInfo.append(sunsetIcon, sunsetText);
  return sunsetInfo;
};

const convertTime12to24 = (time12h) => {
  const [time, modifier] = time12h.split(' ');
  let [hours, minutes] = time.split(':');

  if (hours === '12' && modifier === 'PM') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
};
