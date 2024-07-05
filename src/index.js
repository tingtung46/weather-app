import './scss/style.scss';
import { displayContent } from './modules/getWeather';

document.addEventListener('DOMContentLoaded', () => {
  displayContent('washington');
});
