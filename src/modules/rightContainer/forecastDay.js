import { format, isEqual } from 'date-fns';

const forecastDay = document.querySelector('.forecast-day');
const currentDate = format(new Date(), 'yyyy-MM-dd');

export const displayDayInterval = (forecastData, celsiusDegree) => {
  forecastData.forEach((forecastDayData) => {
    const day = document.createElement('div');
    day.classList.add('day');

    const weatherIcon = document.createElement('img');
    weatherIcon.classList.add('day-icon');
    weatherIcon.src = forecastDayData.day.condition.icon;

    const weatherInfo = document.createElement('div');
    weatherInfo.classList.add('day-info');

    const dayInfo = document.createElement('p');
    dayInfo.classList.add('day-weather-cond');

    const weatherTemp = document.createElement('p');
    weatherTemp.className = 'day-temp temp';
    weatherTemp.textContent = `${Math.floor(forecastDayData.day.avgtemp_c)}${celsiusDegree}`;

    if (isEqual(forecastDayData.date, currentDate)) {
      dayInfo.textContent = 'Today';
    } else {
      dayInfo.textContent = format(forecastDayData.date, 'EEEE');
    }

    day.append(weatherIcon, weatherInfo);
    weatherInfo.append(dayInfo, weatherTemp);

    forecastDay.appendChild(day);
  });
};
