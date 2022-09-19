<template>
  <div class="wrapper">
    <div class="">
      <h1 class="title">KAIMEMO!</h1>

      <GoodsRegistForm 
      :memo-ref="memoRef" 
      @init-click="initRegist" 
      @edit-goods="editGoods" 
      @regist-goods="registGoods" />

      <GoodsListVue 
      :memo-list-ref="memoListRef" 
      @show-memo="showMemo"
      @delete-goods="deleteGoods"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GoodsRegistForm from "./components/GoodsRegistForm.vue";
import GoodsListVue from "./components/GoodsList.vue";
import { useMemoList } from './composables/useMemoList'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const memoRef = ref('')
const foodCheckRef = ref(true)
const nessesaryCheckRef = ref(true)
const isEditRef = ref(false)

const {
  memoListRef,
  add,
  show,
  edit,
  del,
  check,
} = useMemoList()

const initRegist = () => {
  console.log("call init regist!")
  isEditRef.value = false
  memoRef.value = ''
}

const registGoods = () => {
  console.log("call regist goods")
  add(memoRef.value)
  memoRef.value = ''
}

const showMemo = (id) => {
  console.log("call show memo")
  console.log(id)


  memoRef.value = show(id)
  isEditRef.value = true
}

const editGoods = () => {
  edit(memoRef.value)

  isEditRef.value = false
  memoRef.value = ''
}

const deleteGoods = (id) => {
  del(id)
}

const changeCheck = (id) => {
  check(id)
}
</script>

<style>

</style>