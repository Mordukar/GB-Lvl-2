<template>
  <div class="wrapper" @click="$emit('clicked')"><slot></slot></div>
</template>

<script>
export default {

}
</script>

<style>
  .wrapper {
    display: inline-block;
    padding: 5px;
    background: #ccc;
    color: black;
    text-align: center;
    grid-column: 2;
    max-width: 320px;
  }
</style>