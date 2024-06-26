export const changeTemp = (toggleBtn, celsiusDegree, fahrenheitDegree) => {
  const temperatures = document.querySelectorAll('.temp');

  temperatures.forEach((temp) => {
    if (toggleBtn.checked) {
      if (temp.textContent.includes(celsiusDegree)) {
        if (temp.textContent.includes('Feels like')) {
          const temperature = temp.textContent.split(' ')[2].slice(0, -2);
          const newTemp = `Feels like ${convertToImperial(temperature)}${fahrenheitDegree}`;
          temp.textContent = newTemp;
        } else {
          const temperature = temp.textContent.slice(0, -2);
          const newTemp = `${convertToImperial(temperature)}${fahrenheitDegree}`;
          temp.textContent = newTemp;
        }
      }
    } else if (!toggleBtn.checked) {
      if (temp.textContent.includes(fahrenheitDegree)) {
        if (temp.textContent.includes('Feels like')) {
          const temperature = temp.textContent.split(' ')[2].slice(0, -2);
          const newTemp = `Feels like ${convertToMetric(temperature)}${celsiusDegree}`;
          temp.textContent = newTemp;
        } else {
          const temperature = temp.textContent.slice(0, -2);
          const newTemp = `${convertToMetric(temperature)}${celsiusDegree}`;
          temp.textContent = newTemp;
        }
      }
    }
  });
};

const convertToMetric = (temp) => {
  return Math.floor(((temp - 32) * 5) / 9);
};

const convertToImperial = (temp) => {
  return Math.floor((temp * 9) / 5 + 32);
};
