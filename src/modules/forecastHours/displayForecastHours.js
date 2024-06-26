import { setupHourInterval } from './hoursInterval';

const currentHours = document.querySelector('.current-hours');

export const setupForecastHours = (data, forecastData, celsiusDegree) => {
  const nextHours = setupHourInterval(data, forecastData, celsiusDegree);

  nextHours.forEach((hour) => {
    const card = document.createElement('div');
    card.classList.add('hour-card');

    const time = document.createElement('p');
    time.classList.add('time');
    time.textContent = hour.time;

    const icon = document.createElement('img');
    icon.classList.add('hour-icon');
    icon.src = hour.icon;

    const temp = document.createElement('p');
    temp.className = 'hour-temp temp';
    temp.textContent = hour.temp.temp_c;

    card.append(time, icon, temp);
    currentHours.appendChild(card);
  });
};
