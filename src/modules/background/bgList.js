const backgrounds = [
  'sunny',
  'clear',
  'partly-cloudy',
  'cloudy',
  'overcast',
  'mist',
  'rain',
  'snow',
  'sleet',
  'freezing-sleet',
  'thunder',
  'blowing-snow',
  'blizzard',
  'fog',
  'heavy-snow',
  'ice-pellets',
  'thunder-rain',
];
let bg = '';

export const changeBg = (weather) => {
  switch (weather) {
    case 'Sunny':
      bg = backgrounds[0];
      break;
    case 'Clear':
      bg = backgrounds[1];
      break;
    case 'Partly cloudy':
      bg = backgrounds[2];
      break;
    case 'Cloudy':
      bg = backgrounds[3];
      break;
    case 'Overcast':
      bg = backgrounds[4];
      break;
    case 'Mist':
    case 'Freezing fog':
      bg = backgrounds[5];
      break;
    case 'Patchy rain possible':
    case 'Patchy light drizzle':
    case 'Light drizzle':
    case 'Patchy light rain':
    case 'Light rain':
    case 'Moderate rain at times':
    case 'Moderate rain':
    case 'Heavy rain at times':
    case 'Heavy rain':
    case 'Light rain shower':
    case 'Moderate or heavy rain shower':
    case 'Torrential rain shower':
      bg = backgrounds[6];
      break;
    case 'Patchy snow possible':
    case 'Patchy light snow':
    case 'Light snow':
    case 'Patchy moderate snow':
      bg = backgrounds[7];
      break;
    case 'Patchy sleet possible':
    case 'Light sleet':
    case 'Moderate or heavy sleet':
    case 'Light sleet showers':
    case 'Moderate or heavy sleet showers':
      bg = backgrounds[8];
      break;
    case 'Patchy freezing drizzle possible':
    case 'Freezing drizzle':
    case 'Heavy freezing drizzle':
    case 'Light freezing rain':
    case 'Moderate or heavy freezing rain':
      bg = backgrounds[9];
      break;
    case 'Thundery outbreaks possible':
      bg = backgrounds[10];
      break;
    case 'Blowing snow':
      bg = backgrounds[11];
      break;
    case 'Blizzard':
      bg = backgrounds[12];
      break;
    case 'Fog':
      bg = backgrounds[13];
      break;
    case 'Moderate snow':
    case 'Patchy heavy snow':
    case 'Heavy snow':
    case 'Moderate or heavy snow showers':
      bg = backgrounds[14];
      break;
    case 'Ice pellets':
    case 'Light shower of ice pellets':
    case 'Moderate or heavy showers of ice pellets':
      bg = backgrounds[15];
      break;
    case 'Patchy light rain with thunder':
    case 'Moderate or heavy rain with thunder':
    case 'Patchy light snow with thunder':
    case 'Moderate or heavy snow with thunder':
      bg = backgrounds[16];
      break;

    default:
      break;
  }

  return bg;
};
