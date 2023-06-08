import { openPopup } from './index.js'

export class Card {
  constructor(name, link, templateSelector) {
    this._name = name
    this._link = link
    this._templateSelector = templateSelector
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('.card')
      .content
      .querySelector('.elements__element')
      .cloneNode(true);

    return cardElement;
  }

  _openFullScreenImage() {
    const fullScreenPhotoPopup = document.querySelector('.fullscreen');
    const fullScreenPhotoData = fullScreenPhotoPopup.querySelector('.popup__fullscreen-photo');
    const fullScreenTitleData = fullScreenPhotoPopup.querySelector('.popup__fullscreen-title');
    fullScreenPhotoData.src = this._link;
    fullScreenPhotoData.alt = this._name;
    fullScreenTitleData.textContent = this._name;
    openPopup(fullScreenPhotoPopup);
  }

  _lsnToggleFavoriteCard() {
    this._templateSelector.querySelector('.elements__like').addEventListener('click', () => {
      this._templateSelector.querySelector('.elements__like').classList.toggle('elements__like_active');
    })
  }

  _lsnDeleteCardOnList() {
    this._templateSelector.querySelector('.elements__delete-button').addEventListener('click', () => {
      this._templateSelector.remove();
    })
  }

  _lsnFullscreenCardImage() {
    this._templateSelector.querySelector('.elements__photo').addEventListener('click', () => {
      this._openFullScreenImage()
    })
  }

  _setEventListeners() {
    this._lsnToggleFavoriteCard()
    this._lsnDeleteCardOnList()
    this._lsnFullscreenCardImage()
  }

  generateCard() {
    this._templateSelector = this._getTemplate();
    this._templateSelector.querySelector('.elements__photo').src = this._link;
    this._templateSelector.querySelector('.elements__photo').alt = this._name;
    this._templateSelector.querySelector('.elements__tag').textContent = this._name;
    this._setEventListeners(); // слушатели
    return this._templateSelector;
  }
}