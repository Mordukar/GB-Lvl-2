import CartItem from './cartItem'

export default class Cart {
  _items = []

  constructor (items = []) {
    this._items = items
  }

  add (item) {
    const cartItemInstance = new CartItem(item)
    cartItemInstance.render()
    this._items.push(cartItemInstance)
  }

  render () {
    this._items.forEach(item => {
      item.render()
    }) 
  }
}