export default class Section {
  constructor({ renderer }, selector) {
    this._renderer = renderer
    this._selector = document.querySelector(selector)
  }

  rendererAll(items) {
    items.forEach((item) => {
      this._selector.append(this._renderer(item))
    })
  }

  addItem(cardData) {
    this._selector.prepend(cardData)
  }
}