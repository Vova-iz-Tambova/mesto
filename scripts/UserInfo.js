export default class UserInfo {
  constructor({ name, job }) {
    this._name = document.querySelector(name)
    this._job = document.querySelector(job)
  }

  getUserInfo = () => {
    name: this._name.textContent
    job: this._job.textContent
  }

  setUserInfo({ name, job }) {
    this._name.textContent = name
    this._job.textContent = job
  }
}