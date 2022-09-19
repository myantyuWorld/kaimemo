<template>
  <div class="wrapper">
    <router-link to="/second">次のページ</router-link>
    <div class="">
      <h1 class="title">KAIMEMO!</h1>
      <GoodsRegistForm 
      v-model:memo-ref="memoComputed"
      :is-edit-ref="isEditRef"
      @init-click="initRegist" 
      @edit-goods="editGoods" 
      @regist-goods="registGoods" />

      <GoodsListVue 
      :memo-list-ref="memoListRef" 
      @show-memo="showMemo"
      @change-check="changeCheck"
      @delete-goods="deleteGoods"/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import GoodsRegistForm from "../components/GoodsRegistForm.vue";
import GoodsListVue from "../components/GoodsList.vue";
import { useMemoList } from '../composables/useMemoList'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const memoRef = ref('')
const isEditRef = ref(false)

// 
const memoComputed = computed({
  get: () => memoRef.value,
  set: (value) => (memoRef.value = value),
})
// ---- メモサービス

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

const registGoods = (category) => {
  console.log("call regist goods")
  console.log(memoRef.value)

  add(memoRef.value, category)
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