export const localStorageSetItem = (name, objToSet) => {
  localStorage.setItem(name, JSON.stringify(objToSet));
};

export const localStorageGetItem = (name) => {
  if (localStorage.getItem(name) !== null) {
    console.log("localStorageGetItem not null");
    return JSON.parse(localStorage.getItem(name));
  }
};

export const localStorageIsItemExist = (name) => {
  return localStorage.getItem(name) !== null;
};

export const localStorageClearItem = (name) => {
  if (localStorage.getItem(name) !== null) {
    localStorage.removeItem(name);
  }
};
