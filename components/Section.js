export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items
    this._renderer = renderer
    // this._selector = document.querySelector(selector)
    this._selector = selector
  }

  renderer() {
    this._items.forEach((item) => {
      this._renderer(item)
    })
  }

  addItem(cardData) {
    this._selector.prepend(this._renderer(cardData))
  }
}