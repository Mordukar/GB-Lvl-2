class List {
  _items = []

  constructor (cartInstance) {
    let goods = this.fetchGoods()
    goods = goods.map(item => {
      return new GoodItem(item, cartInstance)
    })
    this._items = goods
    this.render()
  }

  fetchGoods () {
    return [
      {name: 'Shirt', price: 250, img: './img/cart-img-1.png' },
      {name: 'Shorts', price: 150, img: './img/cart-img-2.png' },
      {name: 'Jacket', price: 300, img: './img/cart-img-3.png'},
      {name: 'Shirt', price: 400, img: './img/cart-img-1.png'},
      {name: 'Shorts', price: 350, img: './img/cart-img-2.png'},
      {name: 'Jacket', price: 500, img: './img/cart-img-3.png'},
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

class Cart {
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

class CartItem extends GoodItem {
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

const cartInstance = new Cart()
new List(cartInstance)

