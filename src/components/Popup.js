export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector)
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  open() {
    this._popupSelector.classList.add('popup_open')
    document.addEventListener('keydown', this._handleEscClose)
  }

  close() {
    this._popupSelector.classList.remove('popup_open')
    document.removeEventListener('keydown', this._handleEscClose)
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners() {
    this._popupSelector.querySelector('.popup__close').addEventListener('click', () => {
      this.close()
    })

    this._popupSelector.addEventListener('mousedown', (evt) => {
      if (evt.currentTarget === evt.target) {
        this.close()
      }
    })
  }
}