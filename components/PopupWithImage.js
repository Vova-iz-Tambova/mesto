import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._fullScreenPhotoImage = document.querySelector('.popup__fullscreen-photo')
    this._fullScreenPhotoTitle = document.querySelector('.popup__fullscreen-title')
  }

  open(name, link) {
    super.open()
    this._fullScreenPhotoImage.src = link
    this._fullScreenPhotoImage.alt = name
    this._fullScreenPhotoTitle.textContent = name
  }

  // setEventListeners() {
  //   super.setEventListeners()
  //   document.querySelector('.elements__photo').addEventListener('click', () => {
  //     this.open()
  //   })
  // }
}