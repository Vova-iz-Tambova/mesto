export class FormValidator {
  constructor(params, popup) {
    this._formSelector = params.formSelector;
    this._form = popup.querySelector(this._formSelector);
    this._inputSelector = params.inputSelector;
    this._inputs = popup.querySelectorAll(this._inputSelector);
    this._submitButtonSelector = popup.querySelector(params.submitButtonSelector);
    this._inactiveButtonClass = params.inactiveButtonClass;
    this._errorClass = params.errorClass;
  }

  _checkValidity = (input) => {
    this._input = input
    this._currentInputErrorContainer = document.querySelector(`#${input.id}-error`)
    if (this._input.validity.valid) {
      this._currentInputErrorContainer.textContent = ''
      this._currentInputErrorContainer.classList.remove(this._errorClass)
    } else {
      this._currentInputErrorContainer.textContent = input.validationMessage
      this._currentInputErrorContainer.classList.add(this._errorClass)
      // this._disableButton(this._submitButtonSelector)
    }
  }

  _setFormEventListeners() {
    this._inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._checkValidity(input)
        if (this._hasInvalidInput()) {
          this._disableButton(this._submitButtonSelector)
        } else {
          this._enableButton(this._submitButtonSelector)
        }
      })
    })
  }

  _hasInvalidInput = (formInputs) => {
    formInputs = Array.from(this._inputs)
    return formInputs.some((input) => { return !input.validity.valid })
  }

  _disableButton = (button) => {
    button.classList.add(this._inactiveButtonClass);
    button.setAttribute('disabled', true)
  }

  _enableButton = (button) => {
    button.classList.remove(this._inactiveButtonClass)
    button.removeAttribute('disabled')
  }
  enableValidation = () => {
    this._setFormEventListeners()
  }
}