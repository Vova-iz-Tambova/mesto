const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  errorClass: 'popup__error'
}

const form = document.querySelector(config.formSelector)

const enableValidation = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault()
  })
  setEventListeners(form);
}

const setEventListeners = (formToValidate) => {
  const formInputs = Array.from(formToValidate.querySelectorAll(config.inputSelector))
  const formButton = formToValidate.querySelector(config.submitButtonSelector)
  disableButton(formButton)
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      checkInputValidity(input)
      if (hasInvalidInput(formInputs)) {
        disableButton(formButton)
      } else {
        enableButton(formButton)
      }})
    })
  }


const checkInputValidity = (input) => {
  const currentInputErrorSpan = form.querySelector(`#${input.id}-error`)
  if (input.checkValidity()) {
    currentInputErrorSpan.textContent = ''
  } else {
    currentInputErrorSpan.textContent = input.validationMessage
  }
}

const hasInvalidInput = (formInputs) => {
  return formInputs.some(item => !item.validity.valid)
}

const enableButton = (button) => {
  button.classList.remove(config.inactiveButtonClass)
  button.removeAttribute('disabled')
}

const disableButton = (button) => {
  button.classList.add(config.inactiveButtonClass)
  button.setAttribute('disabled', true)
}

enableValidation(config)