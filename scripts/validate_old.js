const isValid = inputElement => inputElement.validity.valid;

const activateError = (inputElement, message) => {}
const resetError = (inputElement) => {}

function enableValidation ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) {
const formList = Array.from(document.querySelectorAll(formSelector));
console.log(formList);}
//const inputList = Array.from(document.querySelectorAll(inputSelector));
//formList.forEach(console.log(formList)) => {
//inputList.forEach(inputElement => {
//  console.log(inputElement.validity.valid, inputElement.name);
//  console.log(formList);
//})
//})
//};

enableValidation ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__input');

// Слушатель события input
formInput.addEventListener('input', function (evt) {
  // Выведем в консоль значение свойства validity.valid поля ввода,
  // на котором слушаем событие input
  console.log(evt.target.validity.valid);
});