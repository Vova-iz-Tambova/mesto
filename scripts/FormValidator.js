const validationList = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  errorClass: 'popup__error'
}

class FormValidator {
  constructor(validationList, popup) {
    this._formSelector = validationList.formSelector;
    this._form = popup.querySelector(this._formSelector);
    this._inputSelector = validationList.inputSelector;
    this._inputs = popup.querySelectorAll(this._inputSelector);
    this._submitButtonSelector = popup.querySelector(validationList.submitButtonSelector);
    this._inactiveButtonClass = validationList.inactiveButtonClass;
    this._errorClass = validationList.errorClass;
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
      this._disableButton(this._submitButtonSelector)
    }
  }

  _setFormEventListeners() {
    this._inputs.forEach(input => {
      input.addEventListener('input', (evt) => {
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
}

// =============================
export const enableValidation = (popup) => {
  const newValidateClass = new FormValidator(validationList, popup)
  newValidateClass._setFormEventListeners()
  console.log(newValidateClass._form)
}