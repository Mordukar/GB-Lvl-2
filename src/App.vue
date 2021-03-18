<template>
  <div id="app">
    <h1>Список товаров</h1>
    <List />
    <AddForm />
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
import AddForm from "./components/AddForm.vue";
import {mapGetters} from 'vuex'

export default {
  name: "app",
  components: {
    List,
    GoodItem,
    Cart,
    CartItem,
    AddForm
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