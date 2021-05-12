import Cookie from 'universal-cookie'

const cookie = new Cookie();

class CookieService {

  getCookie(key) {
    return cookie.get(key);
  }

  setCookie(key, value, options) {
    cookie.set(key, value, options);
  }

  remove(key) {
    cookie.remove(key);
  }

}

export default new CookieService();