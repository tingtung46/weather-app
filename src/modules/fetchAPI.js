export const getWeather = async (weatherLocation) => {
  const apiKey = '04060da2460340b58b6113246241906';
  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${weatherLocation}&days=3`;

  try {
    const response = await fetch(apiUrl, { mode: 'cors' });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorMsg = await response.json();
      if (errorMsg.error.code === 1006) {
        throw new Error('No location found');
      }
    }
  } catch (error) {
    console.error('Fetch failed', error);
  }
};
