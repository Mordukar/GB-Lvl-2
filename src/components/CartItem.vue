<template>
  <div class="cart__item">
    <img class="cart__img" :src=getItemCart.img alt="cart_img">
    <h2>{{ getItemCart.name }}</h2>
    <span>{{ getItemCart.price }}</span>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default  {
    props: {
      idCart: Number
    },
    computed: {
      ...mapGetters([
        'getItemsInCart'
      ]),
      getItemCart () {
        return this.getItemsInCart[this.idCart]
      }
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