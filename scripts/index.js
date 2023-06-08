import { Card } from './Aard.js'
import { FormValidator } from './FormValidator.js'

const items = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]

const params = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  errorClass: 'popup__error'
}
//попап редактирования профиля
const editProfilePopup = document.querySelector('.edit-profile');
const popupProfileButtonElement = document.querySelector('.profile__edit-button');
const valueNameFormProfile = document.querySelector('.profile__name');
const valueJobFormProfile = document.querySelector('.profile__status');
const inputNameFormProfile = editProfilePopup.querySelector('.popup__input_profile_name');
const inputJobFormProfile = editProfilePopup.querySelector('.popup__input_profile_job');
const formPopupProfile = editProfilePopup.querySelector('.popup__form');
// const profileEditSubmitButton = editProfilePopup.querySelector('.popup__submit');

//попап добавления карточки
const newCardPopup = document.querySelector('.new-card');
const newCardButton = document.querySelector('.profile__add-button');
const newCardForm = newCardPopup.querySelector('.popup__form');
// const newCardFormSubmit = newCardForm.querySelector('.popup__submit')
const nameInput = newCardForm.querySelector('.popup__input_mesto_name');
const linkInput = newCardForm.querySelector('.popup__input_mesto_link');

const templateSelector = document.querySelector('.card');

// создание новой карточки
const addNewClassCard = (name, link, templateSelector) => {
  const card = new Card(name, link, templateSelector);
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
}
// загрузка карточк из базы
items.forEach((item) => {
  addNewClassCard(item.name, item.link, templateSelector)
})
// включение валидации
const editProfilePopupValidate = new FormValidator(params, editProfilePopup)
editProfilePopupValidate.enableValidation()

const newCardPopupValidate = new FormValidator(params, newCardPopup)
newCardPopupValidate.enableValidation()

export const openPopup = (popup) => {
  popup.classList.add('popup_open')
  document.addEventListener('keydown', closePopupByEsc)
  document.addEventListener('click', closePopupButtonOverlay)
}

function closePopup() {
  const popup = document.querySelector('.popup_open')
  popup.classList.remove('popup_open')
  document.removeEventListener('keydown', closePopupByEsc)
  document.removeEventListener('click', closePopupButtonOverlay)
}

const closePopupByEsc = (evt) => {
  if (evt.key === 'Escape') {
    closePopup()
  }
}

const closePopupButtonOverlay = (evt) => {
  if ((evt.target.classList.contains('popup__close'))
    || (evt.target.classList.contains('popup_open'))) {
    closePopup()
  }
}

//обработка событий открытия окна редактирования профиля
popupProfileButtonElement.addEventListener('click', () => {
  inputNameFormProfile.value = valueNameFormProfile.textContent
  inputJobFormProfile.value = valueJobFormProfile.textContent
  editProfilePopupValidate.disableButton()
  openPopup(editProfilePopup)

});
//обработка событий отправки данных редактирования профиля
formPopupProfile.addEventListener('submit', function (event) {
  event.preventDefault();
  valueNameFormProfile.textContent = inputNameFormProfile.value;
  valueJobFormProfile.textContent = inputJobFormProfile.value;
  closePopup();
});

newCardButton.addEventListener('click', () => {
  newCardForm.reset();
  newCardPopupValidate.disableButton()
  openPopup(newCardPopup)

})

const handleNewCardSubmit = (event) => {
  event.preventDefault();
  addNewClassCard(nameInput.value, linkInput.value);
  closePopup();
}

newCardForm.addEventListener('submit', handleNewCardSubmit)