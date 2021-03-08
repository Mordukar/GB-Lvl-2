import GoodItem from './goodItem'

export default class CartItem extends GoodItem {
    constructor ({name, price, img}) {
      super({name, price, img})
    }
    render () {
      const placeToRender = document.querySelector('.cart-list')
      if (placeToRender) {
        const block = document.createElement('div')
        block.innerHTML = `
        Товар ${this._name} = ${this._price}
        <img src = "${this._img}" />
        `
        placeToRender.appendChild(block)
      }
    }
  }