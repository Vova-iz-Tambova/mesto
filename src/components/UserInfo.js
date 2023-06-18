export default class UserInfo {
  constructor({ profileName, profileStatus }) {
    this._profileName = document.querySelector(profileName)
    this._profileStatus = document.querySelector(profileStatus)
  }

  getUserInfo() {
    return {
      profileName: this._profileName.textContent,
      profileStatus: this._profileStatus.textContent
    }
  }

  setUserInfo(data) {
    this._profileName.textContent = data.profileName,
    this._profileStatus.textContent = data.profileStatus
  }
}