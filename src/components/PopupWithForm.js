import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector)
    this._form = this._popupSelector.querySelector('.popup__form')
    this._handleFormSubmit = handleFormSubmit
    this._input = this._form.querySelectorAll('.popup__input')
    this._inputs = Array.from(this._form.querySelectorAll('.popup__input'))
  }

  setInputValues(data) {
    this._inputs.forEach(input => {
      input.value = data[input.name]
    })
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