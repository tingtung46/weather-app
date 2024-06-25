import location from '../../assets/icons/location-pin-svgrepo-com.svg';
import { displayContent } from '../getWeather';
import { resetContainer } from '../resetContainer';

export const createSearchLoc = () => {
  const searchLoc = document.createElement('form');
  searchLoc.setAttribute('role', 'change-location');

  const searchInp = document.createElement('input');
  searchInp.setAttribute('type', 'text');
  searchInp.setAttribute('name', 'search');
  searchInp.setAttribute('id', 'search');
  searchInp.setAttribute('placeholder', 'Change Location');
  searchInp.required = true;

  const locIcon = document.createElement('img');
  locIcon.classList.add('loc-icon');
  locIcon.src = location;

  searchLoc.append(searchInp, locIcon);

  getLocation(searchLoc);

  return searchLoc;
};

const getLocation = (searchLoc) => {
  searchLoc.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = new FormData(searchLoc);
    const locName = location.get('search');

    resetContainer();
    displayContent(locName);
  });
};
