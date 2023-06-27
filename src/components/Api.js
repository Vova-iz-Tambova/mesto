export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl
    this._headers = options.headers
  }
  // Проверка ответа сервера
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
  // Получение данныех пользователя с сервера
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      // method: 'GET',
      headers: this._headers
    })
      .then(this._checkResponse);
  }
  // отправка новых данных пользователя на сервер
  setUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this._checkResponse)
  }

  setUserAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this._checkResponse)
  }

  // Получение списка карточек с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      // method: 'GET',
      headers: this._headers
    })
      .then(this._checkResponse)
  }

}
