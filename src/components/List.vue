<template>
  <div class="wrapper-list" id="list">
      <GoodItem
          v-for="idItems in getItemsOnPage"
          :idItems="idItems"
          :key="idItems"
      />
      <Button @clicked="loadMoreData">Загрузить ещё</Button>
  </div>
</template>

<script>
  import GoodItem from "./GoodItem.vue";
  import Button from "./Button.vue";
  import { mapMutations, mapGetters, mapActions } from 'vuex'

  export default  {
    name: 'list',
    components: {
      GoodItem,
      Button
    },
    data () {
      return{
        page: 0,
      }
    },
    methods: {
      ...mapActions([
        'requestData',
      ]),
      loadMoreData () {
        this.page++
        this.requestData(this.page)
      }
      
    },
    computed: {
      ...mapGetters([
        'getItemsOnPage',
        'getFullPrice'
      ]),

    },
    created () {
      this.loadMoreData()
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