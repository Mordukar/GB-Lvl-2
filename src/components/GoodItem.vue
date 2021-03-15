<template>
  <div class="good__item">
    <img class="good__img" :src=getItemData.img alt="cart_img">
    <h2>{{ getItemData.name }}</h2>
    <span>{{ getItemData.price }}</span>
    <button @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: {
      id: String
    },
    computed: {
      ...mapGetters([
        'getData'
      ]),
      getItemData () {
        return this.getData[this.id]
      }
    },
    methods: {
      addToCart() {
        this.$emit('addToCart',this.getItemData)
      }
    }
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