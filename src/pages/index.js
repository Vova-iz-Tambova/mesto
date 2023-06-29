import './index.css'
//==============================================================================================
import Api from '../components/Api.js';
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithConfirm from '../components/PopupWithConfirm.js'
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

let userId

// загрузка данных профиля и карточек с сервера
Promise.all([
  api.getUserInfo(),
  api.getInitialCards()
])
  .then(([info, cards]) => {
    userId = info._id
    userInfo.setUserInfo(info)
    section.rendererAll(cards)
  }).catch((err) => { console.log(err) })

//==============================================================================================
// РАБОТА С ПРОФИЛЕМ
//==============================================================================================
// селекторы данных профиля
const userInfo = new UserInfo({
  profileName: '.profile__name',
  profileStatus: '.profile__status',
  profileAvatar: '.profile__avatar'
})

// Создания копии класса для редактирования профиля
const profilePopupWhithForm = new PopupWithForm({
  popupSelector: '.edit-profile',
  handleFormSubmit: (input) => {
    const data = {
      name: input['profileName'],
      about: input['profileStatus']
    }
    profilePopupWhithForm.renderLoading(true)
    api.setUserInfo(data).then((res) => {
      userInfo.setUserInfo(res)
      profilePopupWhithForm.close()
    })
      .catch((err) => { console.log(err) })
      .finally(() => {
        profilePopupWhithForm.renderLoading(false)
      })
  }
})
profilePopupWhithForm.setEventListeners() // включение его слушателей

// Создания копии класса для смены аватара
const avatarPopupWhithForm = new PopupWithForm({
  popupSelector: '.avatar-change',
  handleFormSubmit: (input) => {
    const data = {
      avatar: input['profileAvatar']
    }
    avatarPopupWhithForm.renderLoading(true)
    api.setUserAvatar(data).then((res) => {
      userInfo.setUserInfo(res)
      avatarPopupWhithForm.close()
    })
      .catch((err) => { console.log(err) })
      .finally(() => {
        avatarPopupWhithForm.renderLoading(false)
      })
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
  editProfilePopupValidate.resetValidation()
  profilePopupWhithForm.open()
})

// Слушатель для открытия формы смены аватара
document.querySelector('.profile__avatar-button').addEventListener('click', () => {
  avatarPopupValidate.resetValidation()
  avatarPopupWhithForm.open()
})
//==============================================================================================
// РАБОТА С КАРТОЧКАМИ
//==============================================================================================
// создание копии класса формы удаления
const confirmDelMyCard = new PopupWithConfirm('.confirm-delete')
confirmDelMyCard.setEventListeners()

//процедура создания копии класса карточки
function createCard(data) {
  const card = new Card(userId, data, {
    handleCardClick: () => {  // открытие картинки на весь экран
      const openfullScreenImage = new PopupWithImage({ popupSelector: '.fullscreen' })
      openfullScreenImage.setEventListeners()
      openfullScreenImage.open(data)
    },
    delMyCard: () => { // удаление карточки с сервера + DOM через форму подтверждения
      confirmDelMyCard.open()
      confirmDelMyCard.submitCallback(() => {
        api.delMyCard(data._id).then((res) => {
          card.deleteCard(res)
          confirmDelMyCard.close()
        })
          .catch((err) => { console.log(err) })
      })
    },
    setMyLikeCard: () => { // проверяет был ли мой лайк на сервере и делает противоположный запрос
      if (card.checkMyLike()) {
        api.clearMyLike(data._id)
          .then((res) => {
            card.refreshLikeCounter(res)
          })
          .catch((err) => { console.log(err) })
      } else {
        api.setMyLike(data._id)
          .then((res) => {
            card.refreshLikeCounter(res)
          })
          .catch((err) => { console.log(err) })
      }
    }
    , templateSelector: '.card'
  })

  const cardElement = card.generateCard()
  return cardElement
}

// разметка карточки в секцию
const section = new Section({ renderer: (cardData) => createCard(cardData) }, '.elements')

// обработка данных формы создания карточки
const cardPopupWhithForm = new PopupWithForm({
  popupSelector: '.new-card',
  handleFormSubmit: (input) => {
    const data = {
      name: input['name'],
      link: input['link']
    }
    cardPopupWhithForm.renderLoading(true)
    api.setNewCard(data).then((res) => {
      section.addItem(createCard(res))
      cardPopupWhithForm.close()
    })
      .catch((err) => { console.log(err) })
      .finally(() => {
        cardPopupWhithForm.renderLoading(false)
      })
  }
})

// открытие попапа создания карточки
document.querySelector('.profile__add-button').addEventListener('click', () => {
  newCardPopupValidate.resetValidation()
  cardPopupWhithForm.open()
})
// слушатель попапа создание карточки
cardPopupWhithForm.setEventListeners()
// включение валидации добавления карточки
const newCardPopupValidate = new FormValidator(params, '.new-card')
newCardPopupValidate.enableValidation()
