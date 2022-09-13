<template>
    <div class="card shadow">
        <div class="card-body">
            <div>
                <h3>ITEM REGIST.</h3>
            </div>
            <div class="row">
                <div class="col-auto">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" v-model="foodCheckRef">
                        <label class="form-check-label" for="inlineCheckbox1">FOODS</label>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" v-model="nessesaryCheckRef">
                        <label class="form-check-label" for="inlineCheckbox2">NESSESARY</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="15文字以内で入力" v-model="memoRef">
                    </div>
                </div>
                <div class="col-2">
                    <button type="submit" class="btn btn-info" @click="editGoods" v-show="isEditRef">編</button>
                    <button type="submit" class="btn btn-primary" @click="registGoods" v-show="!isEditRef">追</button>
                </div>
            </div>
        </div>
    </div>
    <div class="card shadow">
        <div class="card-body">
            <div class="" v-for="item in memoList" :key="item.id">
                <div class="row">
                    <div class="col-1">
                        <input type="checkbox" class="check"/>
                    </div>
                    <div class="col-8">
                        <label>{{ item.memo}}</label>
                    </div>
                    <div class="col-2">
                        <button class="btn btn-info" @click="showTodo(item.id)">編</button>
                    </div>
                    <div class="col-2">
                        <button class="btn btn-danger">削</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const memoRef = ref('')
const foodCheckRef = ref(true)
const nessesaryCheckRef = ref(true)
const isEditRef = ref(false)
const memoList = ref([])

let editId = ''

const ls  = localStorage.memoList
memoList.value = ls ? JSON.parse(ls) : [];

const registGoods = () => {
    const id = new Date().getTime()

    memoList.value.push({id: id, memo: memoRef.value})
    localStorage.memoList = JSON.stringify(memoList.value)
    memoRef.value = ''
}

/**
 * 一覧で選択した買い物品を入力欄に表示する
 * @param id 
 */
const showTodo = (id) => {
    console.log(id);

    const item = memoList.value.find((x) => x.id === id)

    memoRef.value = item.memo
    editId = id
    isEditRef.value = true
}

const editGoods = () => {
    const item = memoList.value.find((item) => item.id === editId)
    const idx = memoList.value.findIndex((item) => item.id === editId)

    item.memo = memoRef.value
    memoList.value.splice(idx, 1, item)

    localStorage.memoList = JSON.stringify(memoList.value)

    isEditRef.value = false
    memoRef.value = ''
}
</script>

<style></style>