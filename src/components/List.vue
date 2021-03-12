<template>
  <div class="wrapper-list" id="list">
      <GoodItem
          v-for="item in items"
          v-bind:item="item"
      />
  </div>
</template>

<script>
import GoodItem from "./GoodItem.vue";

export default  {
  name: 'list',
  props: ['items'],
  components: {
    GoodItem
  },
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