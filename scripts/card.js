const items = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

import { openPopup } from './index.js'

class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('.card')
      .content
      .querySelector('.elements__element')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    // слушатель лайка
    this._element.querySelector('.elements__like').addEventListener('click', () => {
      this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
    });
    // слушатель корзины
    this._element.querySelector('.elements__delete-button').addEventListener('click', () => {
      this._element.remove();
    });
    // слушатель картинки
    this._element.querySelector('.elements__photo').addEventListener('click', () => {
      const fullScreenPhotoPopup = document.querySelector('.fullscreen');
      const fullScreenPhotoData = fullScreenPhotoPopup.querySelector('.popup__fullscreen-photo');
      const fullScreenTitleData = fullScreenPhotoPopup.querySelector('.popup__fullscreen-title');
      fullScreenPhotoData.src = this._link;
      fullScreenPhotoData.alt = this._name;
      fullScreenTitleData.textContent = this._name;
      openPopup(fullScreenPhotoPopup);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.elements__photo').src = this._link;
    this._element.querySelector('.elements__tag').textContent = this._name;
    this._setEventListeners(); // слушатели
    return this._element;
  }
}

items.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();
  document.querySelector('.elements').append(cardElement);
});