<template>
  <div class="cart__list" id="cart">
      <CartItem
          v-for="(cartItem, index) in getItemsInCart"
          :cartItem="cartItem"
          :key="cartItem.id + index + cartItem.name"
      />
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapGetters } from 'vuex'

export default  {
  name: 'cart',
  computed: {
    ...mapGetters([
      'getItemsInCart'
    ])
  },
  components: {
    CartItem
  },
}
</script>

<style>
  .cart__list {
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 15px;
    margin: 15px;
  }
</style>