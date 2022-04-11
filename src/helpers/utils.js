/* eslint-disable no-new-wrappers */
export const setItemToSessionStore = (key, payload, store = sessionStorage) =>
  store.setItem(key, JSON.stringify(payload));
export const getItemFromSessionStore = (
  key,
  defaultValue,
  store = sessionStorage
) => JSON.parse(store.getItem(key)) || defaultValue;

export const setItemToLocalStore = (key, payload, localStore = localStorage) =>
  localStore.setItem(key, JSON.stringify(payload));
export const getItemFromLocalStore = (
  key,
  defaultValue,
  localStore = localStorage
) => JSON.parse(localStore.getItem(key)) || defaultValue;
