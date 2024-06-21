import { getWeather } from './modules/fetchAPI';

const weather = await getWeather('washington');
console.log(weather);
