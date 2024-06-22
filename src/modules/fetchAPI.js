export const getWeather = async (weatherLocation) => {
  const apiKey = '04060da2460340b58b6113246241906';
  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${weatherLocation}&d=3`;

  try {
    const response = await fetch(apiUrl, { mode: 'cors' });

    if (!response.ok) {
      throw new Error('Network failed');
    }

    const data = await response.json();

    if (data.error.code === 1006) {
      throw new Error('Location not found');
    }

    return data;
  } catch (error) {
    console.error('Fetch failed', error);
  }
};
