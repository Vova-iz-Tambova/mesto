export default class Card {
  constructor(userId, cardData, { handleCardClick, delMyCard, setMyLikeCard, templateSelector }) {
    this._userId = userId
    this._card = cardData
    this._name = cardData.name
    this._link = cardData.link
    this._cardId = cardData._id
    this._likes = cardData.likes
    this._ownerCardId = cardData.owner._id

    this._handleCardClick = handleCardClick
    this._delMyCard = delMyCard
    this._setMyLikeCard = setMyLikeCard
    this._templateSelector = templateSelector
  }
  //======================================================================================
  // Получает список всех элементов шаблона
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.elements__element')
      .cloneNode(true);
    return cardElement;
  }

  // Функция создания карточки с учетом получаемых данных
  generateCard() {
    this._element = this._getTemplate()
    // селекторы для элементов карточки
    this._likeButtonCardElement = this._element.querySelector('.elements__like')
    this._likeCounterCardElement = this._element.querySelector('.elements__likecount')
    this._fullscreenImageElement = this._element.querySelector('.elements__photo')
    this._fullscreenTagElement = this._element.querySelector('.elements__tag')
    // закрашивает отмеченные пользоватеем карточеки с сервера
    if (this.hasMyLike = this._likes.some((like) => like._id === this._userId)) {
      this._likeButtonCardElement.classList.add('elements__like_active')
    }
    // удаление элемента корзины с карточек если id владельца не совпадает с id пользователя
    // если совпадает то на крзину вешается слушатель клика
    if (this._ownerCardId != this._userId) {
      (this._element.querySelector('.elements__delete-button')).remove()
    } else {
      this._lsnDeleteCardOnList()
    }
    this._fullscreenImageElement.src = this._link
    this._fullscreenImageElement.alt = this._name
    this._fullscreenTagElement.textContent = this._name
    this._likeCounterCardElement.textContent = this._likes.length

    this._setEventListeners()
    return this._element
  }
  //======================================================================================
  // Группа процедур для обратного вызова
  deleteCard() {
    this._element.remove()
  }

  checkMyLike() {
    return this._likes.some((like) => like._id === this._userId)
  }

  refreshLikeCounter(data) {
    this._likes = data.likes
    this._likeCounterCardElement.textContent = this._likes.length
    this._likeButtonCardElement.classList.toggle('elements__like_active')
  }
  //======================================================================================
  // Группа слушателей для элементов карточки
  _lsnToggleFavoriteCard() {
    this._likeButtonCardElement.addEventListener('click', () => {
      this._setMyLikeCard(this._element)
    })
  }

  _lsnDeleteCardOnList() {
    this._element.querySelector('.elements__delete-button').addEventListener('click', () => {
      this._delMyCard()
    })
  }

  _lsnFullscreenCardImage() {
    this._element.querySelector('.elements__photo').addEventListener('click', () => {
      this._handleCardClick({ name: this._name, link: this._link })
    })
  }

  _setEventListeners() {
    this._lsnToggleFavoriteCard()
    this._lsnFullscreenCardImage()
  }
}