import { changeBg } from './bgList';
const container = document.querySelector('.container');

export const displayBg = () => {
  const condition = document.querySelector('.weather-condition').textContent;
  container.style.background = `url(weather-bgs/bg-${changeBg(condition)}.png)`;
};
