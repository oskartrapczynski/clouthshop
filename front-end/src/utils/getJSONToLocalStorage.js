const getJSONToLocalStorage = (key, defaultValue) => {
  if (localStorage[key]) return JSON.parse(localStorage[key]);
  return defaultValue;
};

export default getJSONToLocalStorage;
