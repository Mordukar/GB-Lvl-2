import Button from './button'

export default class GoodItem {
  _name = ''
  _price = 0
  _img = 0
  _cartInstance = null

  constructor ({name, price, img}, cartInstance) {
    this._name = name
    this._price = price
    this._img = img
    this._cartInstance = cartInstance
  }

  addToCart () {
    console.log(this);
    this._cartInstance.add({name: this._name, price: this._price, img: this._img})
    console.log('Added!', this._name);
  }

  render () {
    const placeToRender = document.querySelector('.goods-list')
    if (placeToRender) {
      const block = document.createElement('div')
      block.innerHTML = `
      Товар ${this._name} = ${this._price}
      <img src = "${this._img}" />
      `
      const btn = new Button('Добавить в корзину', this.addToCart.bind(this))
      btn.render(block)
      placeToRender.appendChild(block)
    }
  }
}