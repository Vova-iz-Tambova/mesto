export default class Section {
  constructor({ renderer }, selector) {
    this._renderer = renderer
    this._selector = document.querySelector(selector)
  }

  renderer(items) {
    items.forEach((item) => {
      this.addItem(this._renderer(item))
    })
  }

  addItem(cardData) {
    this._selector.prepend(cardData)
  }
}