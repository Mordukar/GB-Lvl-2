<template>
  <div id="app">
    <h1>Список товаров</h1>
    <List v-bind:items="items"/>
    <h1>Корзина</h1>
    <Cart v-bind:itemsCart="itemsCart"/>
  </div>
</template>

<script>
import List from "./components/List.vue";
import GoodItem from "./components/GoodItem.vue";
import Cart from "./components/Cart.vue";
import CartItem from "./components/CartItem.vue";

export default {
  name: "app",
  data() {
    return {
      items: [
        {name: 'Shirt', price: 250, img: './img/cart-img-1.png' },
        {name: 'Shorts', price: 150, img: './img/cart-img-2.png' },
        {name: 'Jacket', price: 300, img: './img/cart-img-3.png'},
        {name: 'Shirt', price: 400, img: './img/cart-img-1.png'},
        {name: 'Shorts', price: 350, img: './img/cart-img-2.png'},
        {name: 'Jacket', price: 500, img: './img/cart-img-3.png'}
      ],
      itemsCart: [
        {name: 'Shirt', price: 250, img: './img/cart-img-1.png' },
        {name: 'Shorts', price: 150, img: './img/cart-img-2.png' },
        {name: 'Jacket', price: 300, img: './img/cart-img-3.png' },
      ]
    }
  },
  components: {
    List,
    GoodItem,
    Cart,
    CartItem
  }
}
</script>

<style module>

</style>