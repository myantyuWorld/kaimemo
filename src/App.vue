<template>
  <div class="wrapper">
    <div class="container">
      <h1>KAIMEMO!</h1>
      <GoodsRegistForm/>
      <!-- <GoodsListVue/>     -->
    </div>
  </div>
  
</template>

<script setup>
  import GoodsRegistForm from "./components/GoodsRegistForm.vue";
  import GoodsListVue from "./components/GoodsList.vue";

  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
</script>

<style>

</style>