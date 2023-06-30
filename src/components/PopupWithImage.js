import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor({popupSelector}) {
    super(popupSelector)
    this._fullScreenPhotoImage = this._popup.querySelector('.popup__fullscreen-photo')
    this._fullScreenPhotoTitle = this._popup.querySelector('.popup__fullscreen-title')
  }

  open(data) {
    super.open()
    this._fullScreenPhotoImage.src = data.link
    this._fullScreenPhotoImage.alt = data.name
    this._fullScreenPhotoTitle.textContent = data.name
  }
}