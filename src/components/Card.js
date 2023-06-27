// import { openPopup } from '../pages/index.js'

export default class Card {
  constructor(cardData, handleCardClick, {delMyCard}, templateSelector) {
    this._name = cardData.name
    this._link = cardData.link
    this._ownerId = cardData.owner._id
    this._cardId = cardData._id
    this._templateSelector = templateSelector
    this._handleCardClick = handleCardClick
    this._delMyCard = delMyCard
  }

  generateCard() {
    this._element = this._getTemplate()

    if (this._ownerId != '1f6084d9f18c31da24de3250') {
      (this._element.querySelector('.elements__delete-button')).remove()
    } else {
      this._lsnDeleteCardOnList()
    }

    this._element.querySelector('.elements__photo').src = this._link
    this._element.querySelector('.elements__photo').alt = this._name
    this._element.querySelector('.elements__tag').textContent = this._name
    this._setEventListeners()
    return this._element
  }

  _lsnDeleteCardOnList() {
    this._element.querySelector('.elements__delete-button').addEventListener('click', () => {
      this._element.remove()
      this._delMyCard(this._cardId)
    })
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
      this._handleCardClick({name: this._name, link: this._link})
    })
  }

  _setEventListeners() {
    this._lsnToggleFavoriteCard()
    // this._lsnDeleteCardOnList()
    this._lsnFullscreenCardImage()
  }
}