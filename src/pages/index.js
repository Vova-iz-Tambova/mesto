// import './index.css'
//==============================================================================================
import Api from '../components/Api.js';
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
//==============================================================================================
import { params } from '../utils/constants.js'
//==============================================================================================
// Инициализация подключения api сервера
//==============================================================================================
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: '64dc9e34-29d7-4ec8-8000-7ce1c4906d48',
    'Content-Type': 'application/json'
  }
})
//==============================================================================================
// РАБОТА С ПРОФИЛЕМ
//==============================================================================================
// селекторы данных профиля
const userInfo = new UserInfo({
  profileName: '.profile__name',
  profileStatus: '.profile__status',
  profileAvatar: '.profile__avatar'
})
// загрузка данных профиля с сервера
api.getUserInfo().then((data) => { userInfo.setUserInfo(data) }).catch((err) => { console.log(err) })

// Создания копии класса для редактирования профиля
const profilePopupWhithForm = new PopupWithForm({
  popupSelector: '.edit-profile',
  handleFormSubmit: (input) => {
    const data = {
      name: input['profileName'],
      about: input['profileStatus']
    }
    api.setUserInfo(data).then((res) => {
      userInfo.setUserInfo(res)
      profilePopupWhithForm.close()
    })
      .catch((err) => { console.log(err) })
  }
})

profilePopupWhithForm.setEventListeners() // включение его слушателей
// Создания копии класса для смены аватара и включение его слушателей
const avatarPopupWhithForm = new PopupWithForm({
  popupSelector: '.avatar-change',
  handleFormSubmit: (input) => {
    const data = {
      avatar: input['profileAvatar']
    }
    api.setUserAvatar(data).then((res) => {
      userInfo.setUserInfo(res)
      avatarPopupWhithForm.close()
    })
      .catch((err) => { console.log(err) })
  }
})
avatarPopupWhithForm.setEventListeners() // включение слушателей

// Создание копии класса валидации редактирования профиля
const editProfilePopupValidate = new FormValidator(params, '.edit-profile')
editProfilePopupValidate.enableValidation() // включение валидации формы редактирования профиля

// Создание копии класса валидации для формы смены аватара
const avatarPopupValidate = new FormValidator(params, '.avatar-change')
avatarPopupValidate.enableValidation() // включение валидации формы смены аватара

// Слушатель для открытия формы редактирования профиля
document.querySelector('.profile__edit-button').addEventListener('click', () => {
  profilePopupWhithForm.setInputValues(userInfo.getUserInfo())
  editProfilePopupValidate.disableButton()
  profilePopupWhithForm.open()
})

// Слушатель для открытия формы смены аватара
document.querySelector('.profile__avatar-button').addEventListener('click', () => {
  avatarPopupValidate.disableButton()
  avatarPopupWhithForm.open()
})
//==============================================================================================
// РАБОТА С КАРТОЧКАМИ
//==============================================================================================

// разметка карточки в секцию
const section = new Section({ renderer: (cardData) => createCard(cardData) }, '.elements')
// загрузка карточек с сервера
api.getInitialCards().then((data) => { section.renderer(data) }).catch((err) => { console.log(err) })

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
