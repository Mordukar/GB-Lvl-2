<template>
  <div class="cart__list" id="cart">
      <CartItem
          v-for="item in itemsCart"
          v-bind:item="item"
      />
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";

export default  {
  name: 'cart',
  props: ['itemsCart'],
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