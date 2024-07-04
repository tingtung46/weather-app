export const createTempWrapper = (data, forecastData, celciusDegree) => {
  const tempWrapper = document.createElement('div');
  tempWrapper.classList.add('temp-wrapper');

  const temp = document.createElement('h1');
  temp.className = 'avrg-temp temp';
  temp.textContent = `${Math.floor(data.current.temp_c)}${celciusDegree}`;

  const minMaxTemp = document.createElement('div');
  minMaxTemp.classList.add('minmax-temp');

  const minTemp = document.createElement('p');
  minTemp.className = 'minmax temp';
  minTemp.textContent = `${Math.floor(forecastData[0].day.mintemp_c)}${celciusDegree}`;

  const maxTemp = document.createElement('p');
  maxTemp.className = 'minmax temp';
  maxTemp.textContent = `${Math.floor(forecastData[0].day.maxtemp_c)}${celciusDegree}`;

  tempWrapper.append(temp, minMaxTemp);
  minMaxTemp.append(minTemp, maxTemp);

  return tempWrapper;
};
