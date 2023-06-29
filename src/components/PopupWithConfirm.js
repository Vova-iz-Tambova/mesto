import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._form = this._popupSelector.querySelector('.popup__form')
  }

  submitCallback(handleFormSubmit) {
    this._handleFormSubmit = handleFormSubmit
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handleFormSubmit()
    })
  }
}