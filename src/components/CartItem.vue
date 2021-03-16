<template>
  <div class="cart__item">
    <img class="cart__img" :src=cartItem.img alt="cart_img">
    <h2>{{ cartItem.name }}</h2>
    <span>{{ cartItem.price }}</span>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default  {
    props: {
      cartItem: Object
    },
  }
</script>

<style>
  .cart__item{
    background-color: darkgray;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 400px;
    max-width: 300px;
  }
  .cart__img{
    width: 100%;
    max-width: 260px;
    min-height: 300px;
    object-fit: cover;
  }
</style>