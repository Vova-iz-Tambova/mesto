import { enableToValidation } from './validate.js'

class FormValidator {
  constructor (popup) {
    this._popup = popup
  }

_getPopupToValidate() {
  const popupElementValid = popup
  .querySelector('.card')
  .content
  .querySelector('.elements__element')
  .cloneNode(true);
return popupElementValid;

}
}

export const enableValidation = (popup) => {
  const popupValidate = new FormValidator(popup)
  enableToValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__error',
    errorClass: 'error'
  })
}