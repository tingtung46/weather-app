import { setupHourInterval } from './hoursInterval';

const currentHours = document.querySelector('.current-hours');

export const setupForecastHours = (data, forecastData, celciusDegree) => {
  const nextHours = setupHourInterval(data, forecastData, celciusDegree);

  nextHours.forEach((hour) => {
    const time = document.createElement('p');
    time.classList.add('time');
    time.textContent = hour.time;

    const icon = document.createElement('img');
    icon.classList.add('hour-icon');
    icon.src = hour.icon;

    const temp = document.createElement('p');
    temp.classList.add('hour-temp');
    temp.textContent = hour.temp.temp_c;

    currentHours.append(time, icon, temp);
  });
};
