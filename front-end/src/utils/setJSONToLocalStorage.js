const setJSONToLocalStorage = (key, newData) => {
  localStorage[key] = JSON.stringify(newData);
};

export default setJSONToLocalStorage;
