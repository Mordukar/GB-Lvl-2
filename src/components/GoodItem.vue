<template>
  <div class="good__item">
    <!-- <img class="good__img" :src=key.img alt="cart_img"> -->
    <h2>{{ getItemData }}</h2>
    <!-- <span>{{ key.price }}</span> -->
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: {
      id: Number
    },
    computed: {
      ...mapGetters([
        'getData'
      ]),
      getItemData () {
        return this.getData[this.id]
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