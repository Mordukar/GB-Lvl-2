<template>
  <div class="cart__item">
    <img class="cart__img" :src=item.img alt="cart_img">
    <h2>{{ item.name }}</h2>
    <span>{{ item.price }}</span>
  </div>
</template>

<script>
  export default  {
    props: {
      item: {
        type: Object,
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