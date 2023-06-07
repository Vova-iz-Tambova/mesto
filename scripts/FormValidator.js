class FormValidator {
  constructor(params, formElement) {
    this._params = params
    this._formElement = formElement
    this._inputs = this._formElement.querySelectorAll(this._params.inputSelector);
    this._button = this._formElement.querySelector(this._params.submitButtonSelector);
  }

  _checkValidity = (input) => {
    this._currentInputErrorContainer = document.querySelector(`#${input.id}-error`)
    if (input.validity.valid) {
      this._currentInputErrorContainer.textContent = ''
      this._currentInputErrorContainer.classList.remove(this._params._errorClass)
    } else {
      this._currentInputErrorContainer.textContent = input.validationMessage
      this._currentInputErrorContainer.classList.add(this._params._errorClass)
    }
  }

  _setFormEventListeners = () => {
    this._inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._checkValidity(input)
        if (this._hasInvalidInput()) {
          this.disableButton()
        } else {
          this._enableButton()
        }
      })
    })
  }

  _hasInvalidInput = (formInputs) => {
    formInputs = Array.from(this._inputs)
    return formInputs.some((input) => { return !input.validity.valid })
  }

  disableButton = () => {
    this._button.classList.add(this._params.inactiveButtonClass);
    this._button.setAttribute('disabled', true)
  }

  _enableButton = () => {
    this._button.classList.remove(this._params.inactiveButtonClass)
    this._button.removeAttribute('disabled')
  }
  enableValidation = () => {
    this._setFormEventListeners()
  }
}

export {FormValidator}