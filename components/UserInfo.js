export default class UserInfo {
  constructor({ profileName, profileStatus }) {
    this._profileName = profileName
    this._profileStatus = profileStatus
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