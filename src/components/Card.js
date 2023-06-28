// import { openPopup } from '../pages/index.js'

export default class Card {
  constructor(cardData, { handleCardClick, delMyCard, toggleLikeCard }, templateSelector) {
    this._card = cardData
    this._name = cardData.name
    this._link = cardData.link
    this._ownerCardId = cardData.owner._id
    this._cardId = cardData._id
    this._templateSelector = templateSelector
    this._handleCardClick = handleCardClick
    this._delMyCard = delMyCard
    this._toggleLikeCard = toggleLikeCard
  }

  generateCard() {
    this._element = this._getTemplate()

    if (this._ownerCardId != '1f6084d9f18c31da24de3250') { // проеврка id автора карточки с моим id
      (this._element.querySelector('.elements__delete-button')).remove()
    } else {
      this._lsnDeleteCardOnList()
    }

    this._element.querySelector('.elements__photo').src = this._link
    this._element.querySelector('.elements__photo').alt = this._name
    this._element.querySelector('.elements__tag').textContent = this._name
    this._element.querySelector('.elements__likecount').textContent = this._card.likes.length
    // this._element.setAttribute('Id', this._cardId)
    this._setEventListeners()
    return this._element
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

  _lsnToggleFavoriteCard() {
    this._element.querySelector('.elements__like').addEventListener('click', () => {
      this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
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