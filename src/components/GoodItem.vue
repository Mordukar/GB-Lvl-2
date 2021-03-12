<template>
  <div class="good__item">
    <img class="good__img" :src=item.img alt="cart_img">
    <h2>{{ item.name }}</h2>
    <span>{{ item.price }}</span>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
      }
    },
  }
</script>

<style>
  .good__item{
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 400px;
    max-width: 300px;
    align-items: center;
    background-color: bisque;
  }
  .good__img{
    width: 100%;
    max-width: 260px;
    min-height: 300px;
    object-fit: cover;
  }
</style>