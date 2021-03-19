<template>
  <div class="good__item">
    <img class="good__img" :src=getItemData.img alt="cart_img">
    <h2>{{ getItemData.name }}</h2>
    <span>{{ getItemData.price }}</span>
    <button @click="addToCart(getItemData)">Add to cart</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    props: {
      idItems: String
    },
    methods: {
      ...mapActions([
        'requestToCart',
        'addCart'
      ]),
      addToCart(data) {
        console.log(data)
        this.requestToCart(data)
        this.addCart(data)
      },

    },
    computed: {
      ...mapGetters([
        'getData'
      ]),
      getItemData () {
        return this.getData[this.idItems]
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