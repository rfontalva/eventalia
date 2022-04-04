import urlUtils from './urlUtils';

const utils = {
  isLoggedIn(key) {
    if (key) {
      return true;
    }
    return false;
  },

  logOut(setUser) {
    setUser();
    document.cookie = 'key=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    urlUtils.goHome();
  },

  cookieLogIn(key) {
    const cookievalue = `key=${key}`;
    const expiryDate = new Date(new Date().getTime() + 60 * 60 * 1000 * 24).toGMTString();
    document.cookie = `${cookievalue};`;
    document.cookie = `Expires=${expiryDate};`;
  },
};
export default utils;