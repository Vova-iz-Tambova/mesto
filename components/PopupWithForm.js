import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, popupSubmit) {
    super(popupSelector)
    this._form = this._popupSelector.querySelector('.popup__form')
    this._popupSubmit = popupSubmit
    this._inputs = Array.from(this._form.querySelectorAll('.popup__input'))
  }

  _getInputValues() {
    this._values = {}
    this._inputs.forEach(input => {
      this.values[input.name] = input.value
    })
    return this._values
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._popupSubmit(this._getInputValues())
    })
  }

  close() {
    super.close()
    this._form.reset()
  }
}