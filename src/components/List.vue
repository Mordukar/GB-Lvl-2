<template>
  <div class="wrapper-list" id="list">
      <GoodItem
          v-for="idItems in getItemsOnPage"
          :idItems="idItems"
          :key="idItems"
          @addToCart="addToCart"
      />
  </div>
</template>

<script>
  import GoodItem from "./GoodItem.vue";
  import { mapMutations, mapGetters, mapActions } from 'vuex'

  export default  {
    name: 'list',
    components: {
      GoodItem
    },
    methods: {
      ...mapActions([
        'requestData',
      ]),
      
    },
    computed: {
      ...mapGetters([
        'getItemsOnPage',
        'getFullPrice'
      ]),

    },
    created () {
      this.requestData(1)
    }
  }
</script>

<style>
  .wrapper-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 15px;
    margin: 15px;
  }
</style>