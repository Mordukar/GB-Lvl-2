import GoodItem from './goodItem'

export default class List {
  _items = []

  constructor (cartInstance) {
    this.fetchGoods()
      .then(res => {
        return res.json()
      })
      .then(data => {
        const goods = data.data.map(item => {
          return new GoodItem(item, cartInstance)
        })
        this._items = goods
        this.render()
      })
  }

  fetchGoods () {
    const url = `./database/items.json`;
    return fetch(url);
  }

  render () {
    this._items.forEach(Good => {
      Good.render()
    })
  }
}