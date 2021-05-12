import Cookie from 'universal-cookie'

const cookie = new Cookie();

class CookieService {

  getCookie(key) {
    return cookie.get(key);
  }

  remove(key) {
    cookie.remove(key);
  }

}

export default new CookieService();