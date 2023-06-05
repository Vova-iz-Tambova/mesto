//попап редактирования профиля
const editProfilePopup = document.querySelector('.edit-profile');
const popupProfileButtonElement = document.querySelector('.profile__edit-button');
const profileElement = document.querySelector('.profile__profile-info');
const nameVar = profileElement.querySelector('.profile__name');
const jobVar = profileElement.querySelector('.profile__status');
const popupProName = editProfilePopup.querySelector('.popup__input_profile_name');
const popupProJob = editProfilePopup.querySelector('.popup__input_profile_job');
const profileEditSubmit = editProfilePopup.querySelector('.popup__form');
const profileEditSubmitButton = editProfilePopup.querySelector('.popup__submit');

//попап добавления карточки
const newCardPopup = document.querySelector('.new-card');
const newCardButton = document.querySelector('.profile__add-button');
const newCardForm = newCardPopup.querySelector('.popup__form');
const newCardFormSubmit = newCardForm.querySelector('.popup__submit')
const nameInput = newCardForm.querySelector('.popup__input_mesto_name');
const linkInput = newCardForm.querySelector('.popup__input_mesto_link');

import { addNewClassCard } from './card.js'
import { enableValidation } from './FormValidator.js'

enableValidation(editProfilePopup)
enableValidation(newCardPopup)

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
  popupProName.value = nameVar.textContent;
  popupProJob.value = jobVar.textContent;
  profileEditSubmitButton.classList.add('popup__submit_disabled');
  profileEditSubmitButton.setAttribute('disabled', true)
  openPopup(editProfilePopup);
});
//обработка событий отправки данных редактирования профиля
profileEditSubmit.addEventListener('submit', function (event) {
  event.preventDefault();
  nameVar.textContent = popupProName.value;
  jobVar.textContent = popupProJob.value;
  closePopup();
});

newCardButton.addEventListener('click', () => {
  newCardForm.reset();
  newCardFormSubmit.classList.add('popup__submit_disabled');
  newCardFormSubmit.setAttribute('disabled', true)
  openPopup(newCardPopup)
})

const handleNewCardSubmit = (event) => {
  event.preventDefault();
  addNewClassCard(nameInput.value, linkInput.value);
  closePopup();
};

newCardForm.addEventListener('submit', handleNewCardSubmit);