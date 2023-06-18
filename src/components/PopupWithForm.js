import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector)
    this._form = popupSelector.querySelector('.popup__form')
    this._handleFormSubmit = handleFormSubmit
    this._inputs = Array.from(this._form.querySelectorAll('.popup__input'))
  }

  _getInputValues() {
    this._formValues = {}
    this._inputs.forEach(input => {
      this._formValues[input.name] = input.value
    })
    return this._formValues
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handleFormSubmit(this._getInputValues())
    })
  }

  close() {
    super.close()
    this._form.reset()
  }
}