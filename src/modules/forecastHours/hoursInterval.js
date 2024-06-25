import { format, getHours } from 'date-fns';

export const setupHourInterval = (data, forecastData, celsiusDegree) => {
  const currentDate = data.location.localtime;
  const currentHour = getHours(currentDate);
  let nextHours = [];
  const numberofHours = 24;

  const currentDayHours = forecastData[0].hour.slice(currentHour);

  //Get hours from the next day if needed
  let remainingHours = numberofHours - currentDayHours.length;
  if (remainingHours > 0) {
    for (let i = 1; i < forecastData.length && remainingHours > 0; i++) {
      const nextDayHours = forecastData[i].hour.slice(0, remainingHours);
      nextHours = nextHours.concat(nextDayHours);
      remainingHours -= nextDayHours.length;
    }
  }

  nextHours = currentDayHours.concat(nextHours);
  nextHours = nextHours.map((hour) => {
    const [date, time] = hour.time.split(' ');

    return {
      time: time === '00:00' ? format(date, 'M/d') : time,
      icon: hour.condition.icon,
      temp: {
        temp_c: `${Math.floor(hour.temp_c)}${celsiusDegree}`,
        temp_f: `${Math.floor(hour.temp_f)}${celsiusDegree}`,
      },
    };
  });

  if (nextHours[0]) nextHours[0].time = 'Now';

  return nextHours;
};
