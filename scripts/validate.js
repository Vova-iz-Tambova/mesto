export const enableToValidation = ({ formSelector, ...rest }) => {
  const forms = Array.from(document.querySelectorAll(formSelector))
  forms.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault()
    })
    setFormEventListeners(form, rest)
  })
}

const setFormEventListeners = (formToValidate, { inputSelector, submitButtonSelector, ...rest }) => {
  const formInputs = Array.from(formToValidate.querySelectorAll(inputSelector));
  const formButton = formToValidate.querySelector(submitButtonSelector);
  disableButton(formButton, rest)
  formInputs.forEach((input) => {
    input.addEventListener('input', () => {
      checkValidity(input, rest)
      if (hasInvalidInput(formInputs)) {
        disableButton(formButton, rest)
      }
      else {
        enableButton(formButton, rest)
      }
    }
    )
  })
}

const checkValidity = (input, { inputErrorClass, ...rest }) => {
  const currentInputErrorContainer = document.querySelector(`#${input.id}-error`)
  if (input.validity.valid) {
    currentInputErrorContainer.textContent = ''
    input.classList.remove(inputErrorClass)
  } else {
    currentInputErrorContainer.textContent = input.validationMessage
    input.classList.add(inputErrorClass)
  }
}

const hasInvalidInput = (formInputs) => {
  return formInputs.some((item) => { return !item.validity.valid })
}

const disableButton = (button, { inactiveButtonClass }) => {
  button.classList.add(inactiveButtonClass);
  button.setAttribute('disabled', true)
}

const enableButton = (button, { inactiveButtonClass }) => {
  button.classList.remove(inactiveButtonClass)
  button.removeAttribute('disabled')
}