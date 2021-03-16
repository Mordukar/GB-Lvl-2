<template>
  <div id="app">
    <h1>Список товаров</h1>
    <List />
    <h1>Корзина</h1>
    <Cart 
      v-if="getItemsInCart.length"
      :cartData="getItemsInCart"
     />
  </div>
</template>

<script>
import List from "./components/List.vue";
import GoodItem from "./components/GoodItem.vue";
import Cart from "./components/Cart.vue";
import CartItem from "./components/CartItem.vue";
import {mapGetters} from 'vuex'

export default {
  name: "app",
  components: {
    List,
    GoodItem,
    Cart,
    CartItem
  },
  computed: {
    ...mapGetters([
      'getItemsInCart'
    ]),
  }
}
</script>

<style module>

</style>