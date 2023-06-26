// import './index.css'
//===============================================
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
//===============================================
import { initialCards, params } from '../utils/constants.js'
//===============================================
//получение данных профиля
const userInfo = new UserInfo({ profileName: '.profile__name', profileStatus: '.profile__status' })
//создания класса редактирования профиля
const profilePopupWhithForm = new PopupWithForm({
  popupSelector: '.edit-profile',
  handleFormSubmit: (input) => {
    const data = {
      profileName: input['profileName'],
      profileStatus: input['profileStatus']
    }
    userInfo.setUserInfo(data)
    profilePopupWhithForm.close()
  }
})
//обработка событий открытия окна редактирования профиля
document.querySelector('.profile__edit-button').addEventListener('click', () => {
  profilePopupWhithForm.setInputValues(userInfo.getUserInfo())
  editProfilePopupValidate.disableButton()
  profilePopupWhithForm.open()
})
//слушатели попапа редактирования профиля
profilePopupWhithForm.setEventListeners()
// включение валидации редактирования профиля
const editProfilePopupValidate = new FormValidator(params, '.edit-profile')
editProfilePopupValidate.enableValidation()
//===============================================
//открытие фото на весь экран
const openfullScreenImage = new PopupWithImage({ popupSelector: '.fullscreen' })
openfullScreenImage.setEventListeners()
//процедура создания новой карточки с помошью класса
const createCard = (data) => {
  const card = new Card({
    cardData: data,
    handleCardClick: () => {
      openfullScreenImage.open(data)
    }
  }, '.card')
  const cardElement = card.generateCard()
  return cardElement
}
// загрузка карточк из массива
const section = new Section({
  items: initialCards,
  renderer: (cardData) => createCard(cardData)
},
  '.elements')
section.renderer()
//обработка данных формы создания карточки
const cardPopupWhithForm = new PopupWithForm({
  popupSelector: '.new-card',
  handleFormSubmit: (input) => {
    const cardData = {
      name: input['name'],
      link: input['link']
    }
    section.addItem(createCard(cardData))
    cardPopupWhithForm.close()
  }
})
//открытие попапа создания карточки
document.querySelector('.profile__add-button').addEventListener('click', () => {
  newCardPopupValidate.disableButton()
  cardPopupWhithForm.open()
})
//слушатель попапа создание карточки
cardPopupWhithForm.setEventListeners()
// включение валидации добавления карточки
const newCardPopupValidate = new FormValidator(params, '.new-card')
newCardPopupValidate.enableValidation()