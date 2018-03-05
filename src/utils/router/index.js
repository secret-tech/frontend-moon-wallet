import { browserHistory } from 'react-router-dom';

export const addQuery = (query) => {
  const location = Object.assign({}, browserHistory.getCurrentLocation());
  Object.assign(location.query, query);
  browserHistory.push(location);
};

export const removeQuery = (...queryNames) => {
  const location = Object.assign({}, browserHistory.getCurrentLocation());
  queryNames.forEach((q) => delete location.query[q]);
  browserHistory.push(location);
};
