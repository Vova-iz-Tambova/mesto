export class FormValidator {

  constructor(params, formElement) {
    this._params = params
    this._formElement = formElement
    this._button = this._formElement.querySelector(this._params.submitButtonSelector)
    this._inputs = this._formElement.querySelectorAll(this._params.inputSelector)
  }

  _checkValidity = (input) => {
    this._inputError = this._formElement.querySelector(`#error-${input.id}`)
    if (input.validity.valid) {
      input.classList.remove(this._params.errorClass)
      this._inputError.textContent = ''
    } else {
      input.classList.add(this._params.errorClass)
      this._inputError.textContent = input.validationMessage
    }
  }

  _disableButton = () => {
    this._button.setAttribute('disabled', '')
    this._button.classList.add(this._params.inactiveButtonClass)
  }

  _enableButton = () => {
    this._button.removeAttribute('disabled')
    this._button.classList.remove(this._params.inactiveButtonClass)
  }

  _hasInvalidInput = (formInputs) => {
    formInputs = Array.from(this._inputs)
    return formInputs.some((input) => { return !input.validity.valid })
  }

  _setFormEventListeners() {
    this._inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._checkValidity(input)
        if (this._hasInvalidInput()) {
          this._disableButton()
        } else {
          this._enableButton()
        }
      })
    })
  }

  enableValidation() {
    this._setFormEventListeners()
  }

}