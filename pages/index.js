// import './index.css'
//===============================================
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import Popup from '../components/Popup.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
//===============================================
const initialCards = [
  {
    name: 'Архыз', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]
//===============================================
const params = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  errorClass: 'popup__error'
}
//===============================================
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

const fullScreenPhotoPopup = document.querySelector('.fullscreen')
// const cardTemplate = document.querySelector('.card')


const sectionCardElement = document.querySelector('.elements')
// const car = document.querySelector('.elements')


//===============================================
//получение данных профиля
const userInfo = new UserInfo({
  profileName: valueNameFormProfile,
  profileStatus: valueJobFormProfile
})
//создания класса редактирования профиля
const profilePopupWhithForm = new PopupWithForm({
  popupSelector: editProfilePopup,
  handleFormSubmit: (input) => {
    const data = {
      profileName: input['nameOwner'],
      profileStatus: input['job']
    }
    userInfo.setUserInfo(data)
    profilePopupWhithForm.close()
  }
})
//обработка событий открытия окна редактирования профиля
popupProfileButtonElement.addEventListener('click', () => {
  const data = userInfo.getUserInfo()
  inputNameFormProfile.value = data.profileName
  inputJobFormProfile.value = data.profileStatus
  editProfilePopupValidate.disableButton()
  profilePopupWhithForm.open()
})
//слушатели попапа редактирования профиля
profilePopupWhithForm.setEventListeners()
// включение валидации редактирования профиля
const editProfilePopupValidate = new FormValidator(params, editProfilePopup)
editProfilePopupValidate.enableValidation()

//===============================================
const openfullScreenImage = new PopupWithImage({ popupSelector: fullScreenPhotoPopup })
//процедура создания новой карточки с помошью класса
const createCard = (data) => {
  const card = new Card({
    cardData: data,
    handleCardClick: () => {
      openfullScreenImage.open(data)
    }
  }, '.card')
  const cardElement = card.generateCard()
  sectionCardElement.prepend(cardElement)
}
// загрузка карточк из массива
const section = new Section({ items: initialCards, renderer: createCard }, sectionCardElement)
section.renderer()
//обработка данных формы создания карточки
const cardPopupWhithForm = new PopupWithForm({
  popupSelector: newCardPopup,
  handleFormSubmit: (input) => {
    const cardData = {
      name: input['name'],
      link: input['link']
    }
    section.addItem(cardData)
    cardPopupWhithForm.close()
  }
})
//открытие попапа создания карточки
newCardButton.addEventListener('click', () => {
  newCardPopupValidate.disableButton()
  cardPopupWhithForm.open()

})
//слушатель попапа создание карточки
cardPopupWhithForm.setEventListeners()
// включение валидации добавления карточки
const newCardPopupValidate = new FormValidator(params, newCardPopup)
newCardPopupValidate.enableValidation()