import { getWeather } from './fetchAPI';
import { setupLeftContainer } from './leftContainer/leftContainer';
import { displayDayInterval } from './rightContainer/forecastDay';
import { displayCurrentDayInfo } from './rightContainer/currentDayInfo';
import { setupForecastHours } from './forecastHours/displayForecastHours';

const celsiusDegree = '\u00B0C';
const fahrenheitDegree = '\u00B0F';

export const displayContent = (weatherLocation) => {
  const weather = getWeather(weatherLocation);
  weather
    .then((data) => {
      console.log(data);

      const forecastData = data.forecast.forecastday;

      setupLeftContainer(data, forecastData, celsiusDegree, fahrenheitDegree);
      displayDayInterval(forecastData, celsiusDegree);
      displayCurrentDayInfo(data, forecastData);
      setupForecastHours(data, forecastData, celsiusDegree);
    })
    .catch((err) => {
      console.error(err);
    });
};
