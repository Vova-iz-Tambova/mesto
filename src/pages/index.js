// import './index.css'
//===============================================
import Api from '../components/Api.js';
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
//===============================================
import { params } from '../utils/constants.js'
//===============================================
// инициализация подключения api сервера
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: '64dc9e34-29d7-4ec8-8000-7ce1c4906d48',
    'Content-Type': 'application/json'
  }
})
// селекторы данных профиля
const userInfo = new UserInfo({
  profileName: '.profile__name',
  profileStatus: '.profile__status',
  profileAvatar: '.profile__avatar'
})
// загрузка данных профиля с сервера
api.getUserInfo().then((data) => {userInfo.setUserInfo(data)})
//===============================================
// открытие фото на весь экран
const openfullScreenImage = new PopupWithImage({ popupSelector: '.fullscreen' })
openfullScreenImage.setEventListeners()
//процедура создания копии класса карточки
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
// разметка карточки в секцию
const section = new Section({renderer: (cardData) => createCard(cardData)},'.elements')
// загрузка карточек с сервера
api.getInitialCards().then((data) => {section.renderer(data)})
// создания класса редактирования профиля
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
// обработка событий открытия окна редактирования профиля
document.querySelector('.profile__edit-button').addEventListener('click', () => {
  profilePopupWhithForm.setInputValues(userInfo.getUserInfo())
  editProfilePopupValidate.disableButton()
  profilePopupWhithForm.open()
})
// слушатели попапа редактирования профиля
profilePopupWhithForm.setEventListeners()
// включение валидации редактирования профиля
const editProfilePopupValidate = new FormValidator(params, '.edit-profile')
editProfilePopupValidate.enableValidation()
// обработка данных формы создания карточки
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
// открытие попапа создания карточки
document.querySelector('.profile__add-button').addEventListener('click', () => {
  newCardPopupValidate.disableButton()
  cardPopupWhithForm.open()
})
// слушатель попапа создание карточки
cardPopupWhithForm.setEventListeners()
// включение валидации добавления карточки
const newCardPopupValidate = new FormValidator(params, '.new-card')
newCardPopupValidate.enableValidation()