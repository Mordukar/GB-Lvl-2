class List {
  _items = []

  constructor (CartInstance) {
    let goods = this.fetchGoods()
    goods = goods.map(item => {
      return new GoodItem(item, CartInstance)
    })
    this._items = goods
    this.render()
  }

  fetchGoods () {
    return [
      {name: 'Shirt', price: 150, img: './img/cart-img-1.png' },
      {name: 'Socks', price: 150, img: './img/cart-img-1.png' },
      {name: 'Jacket', price: 150, img: './img/cart-img-1.png'},
    ]
  }
 
  render () {
    this._items.forEach(Good => {
      Good.render()
    })
  }
}

class GoodItem {
  _name = ''
  _price = 0
  _img = 0
  _CartInstance = null

  constructor ({name, price, img}, CartInstance) {
    this._name = name
    this._price = price
    this._img = img
    this._CartInstance = CartInstance
  }

  addToCart () {
    this._CartInstance.add(this)
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

class Cart {
  _items = []

  constructor () {
    let goods = this.fetchGoods()
    goods = goods.map(item => {
      return new GoodItem(item)
    })
    this._items = goods
    this.render()
  }

  add () {

  }

  fetchGoods () {
    return [
      {name: 'Shirt', price: 150, img: './img/cart-img-1.png' },
      {name: 'Socks', price: 150, img: './img/cart-img-1.png' },
      {name: 'Jacket', price: 150, img: './img/cart-img-1.png'},
    ]
  }
 
  render () {
    this._items.forEach(Good => {
      Good.render()
    })
  }
}

class CartItem extends GoodItem {
  constructor ({name, price, img}) {
    super({name, price, img})
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

new List();

const CartInstance = new Cart()
new List(CartInstance)


