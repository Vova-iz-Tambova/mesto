// import { openPopup } from '../pages/index.js'

export default class Card {
  constructor({ cardData, handleCardClick }, templateSelector) {
    this._name = cardData.name
    this._link = cardData.link
    this._templateSelector = templateSelector
    this._handleCardClick = handleCardClick
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

  _lsnDeleteCardOnList() {
    this._element.querySelector('.elements__delete-button').addEventListener('click', () => {
      this._element.remove();
    })
  }

  _lsnFullscreenCardImage() {
    this._element.querySelector('.elements__photo').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    })
  }

  _setEventListeners() {
    this._lsnToggleFavoriteCard()
    this._lsnDeleteCardOnList()
    this._lsnFullscreenCardImage()
  }

  generateCard() {
    this._element = this._getTemplate()
    this._element.querySelector('.elements__photo').src = this._link
    this._element.querySelector('.elements__photo').alt = this._name
    this._element.querySelector('.elements__tag').textContent = this._name
    this._setEventListeners()
    return this._element
  }

}