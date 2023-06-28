export default class Card {
  constructor(cardData, { handleCardClick, delMyCard, setMyLikeCard, templateSelector }) {
    this._userId = '1f6084d9f18c31da24de3250'
    this._card = cardData
    this._name = cardData.name
    this._link = cardData.link
    this._ownerCardId = cardData.owner._id
    this._cardId = cardData._id
    this._likes = cardData.likes

    this._templateSelector = templateSelector
    this._handleCardClick = handleCardClick
    this._delMyCard = delMyCard
    this._setMyLikeCard = setMyLikeCard
  }

  getMyFovoriteCards() {
    if (this.hasMyLike = this._likes.some((like) => like._id === this._userId)) {
      this._element.querySelector('.elements__like').classList.add('elements__like_active')
    }
  }

  refreshLikeCounter(data) {
    this._likes = data.likes;
    this._element.querySelector('.elements__likecount').textContent = this._likes.length
  }

  checkMyLike() {
    return this._likes.some((like) => like._id === this._userId)
  }


  generateCard() {
    this._element = this._getTemplate()
    this.getMyFovoriteCards()

    if (this._ownerCardId != this._userId) { // удаление елемента корзины с карточек баз моего id
      (this._element.querySelector('.elements__delete-button')).remove()
    } else {
      this._lsnDeleteCardOnList()
    }

    this._element.querySelector('.elements__likecount').textContent = this._likes.length
    this._element.querySelector('.elements__photo').src = this._link
    this._element.querySelector('.elements__photo').alt = this._name
    this._element.querySelector('.elements__tag').textContent = this._name

    this._setEventListeners()
    return this._element
  }

  _lsnToggleFavoriteCard() {
    this._element.querySelector('.elements__like').addEventListener('click', () => {
      this._element.querySelector('.elements__like').classList.toggle('elements__like_active')
      this._setMyLikeCard(this._element)

    })
  }

  _lsnDeleteCardOnList() {
    this._element.querySelector('.elements__delete-button').addEventListener('click', () => {
      this._delMyCard(this._cardId)
    })
  }

  deleteCard() {
    this._element.remove()
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.elements__element')
      .cloneNode(true);
    return cardElement;
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