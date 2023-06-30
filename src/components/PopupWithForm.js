import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector)
    this._form = this._popup.querySelector('.popup__form')
    this._handleFormSubmit = handleFormSubmit
    this._inputs = Array.from(this._form.querySelectorAll('.popup__input'))
    this._submitBtn = this._form.querySelector('.popup__submit')
    this._submitBtnText = this._submitBtn.textContent
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

  renderLoading(isLoading, loadingText='Сохранение...') {
    if (isLoading) {
      this._submitBtn.textContent = loadingText
    } else {
      this._submitBtn.textContent = this._submitBtnText
    }
  }

  close() {
    super.close()
    this._form.reset()
  }
}