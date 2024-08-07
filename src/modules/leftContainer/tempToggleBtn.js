import { changeTemp } from '../changeTemp';

export const createTempToggleBtn = (celsiusDegree, fahrenheitDegree) => {
  const tempLabel = document.createElement('label');
  tempLabel.setAttribute('for', 'toggle');
  tempLabel.classList.add('btn');

  const tempInput = document.createElement('input');
  tempInput.setAttribute('type', 'checkbox');
  tempInput.setAttribute('id', 'toggle');

  toggleTemp(tempInput, celsiusDegree, fahrenheitDegree);

  return { tempLabel, tempInput };
};

const toggleTemp = (toggleBtn, celsiusDegree, fahrenheitDegree) => {
  toggleBtn.addEventListener('click', () => {
    changeTemp(toggleBtn, celsiusDegree, fahrenheitDegree);
  });
};
