export default class UserInfo {
  constructor({ profileName, profileStatus, profileAvatar }) {
    this._profileName = document.querySelector(profileName)
    this._profileStatus = document.querySelector(profileStatus)
    this._profileAvatar = document.querySelector(profileAvatar)
  }

  getUserInfo() {
    return {
      profileName: this._profileName.textContent,
      profileStatus: this._profileStatus.textContent,
      profileAvatar: this._profileAvatar.src
    }
  }

  setUserInfo({ name, about, avatar }) {
    this._profileName.textContent = name
    this._profileStatus.textContent = about
    this._profileAvatar.src = avatar
  }
}