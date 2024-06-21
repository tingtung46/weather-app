export const getWeather = async (weatherLocation) => {
  const apiKey = '04060da2460340b58b6113246241906';
  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${weatherLocation}`;

  try {
    const response = await fetch(apiUrl, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed', error);
  }
};
