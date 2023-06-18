export default class Card {
  constructor({data, handleCardClick}, templateSelector) { // конструктор получает объект
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick
  }

  _getTemplate() { // это метод, который возвращает разметку классу Card, забирает ее из HTML и клонирует элемент
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement; // возвращает DOM-элемент
  }

  generateCard() { // метод готовит карточку к публикации
    this._element = this._getTemplate(); // здесь запишем разметку
    this._elementMask = this._element.querySelector('.card__mask');
    this._elementMask.src = this._link; // добавление данных
    this._elementMask.alt = this._name;
    this._element.querySelector('.card__place').textContent = this._name;
    this._elementHurt = this._element.querySelector('.card__hurt');
    this._elementBasket = this._element.querySelector('.card__basket');
    this._setEventListeners();
    return this._element // возврат элемента наружу
  }

  _setEventListeners() {
    this._elementHurt.addEventListener('click',this._toggleLike);
    this._elementBasket.addEventListener('click',this._removeMesto);
    this._elementMask.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _toggleLike = () => { // метод лайки
    this._elementHurt.classList.toggle('card__hurt_active');
  }

  _removeMesto = () => { // метод корзина
    this._element.remove();
    this._element = null;
  }
}