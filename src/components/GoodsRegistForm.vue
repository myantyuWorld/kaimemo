<template>
    <div class="card shadow">
        <div class="card-body">
            <div>
                <h3>ITEM REGIST.<button class="btn btn-secondary" @click="initRegist">初期化</button></h3>
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
            <div class="" v-for="item in memoListRef" :key="item.id">
                <div class="row">
                    <div class="col">
                        <input type="checkbox" class="check"/>
                    </div>
                    <div class="col-6">
                        <label>{{ item.memo}}</label>
                    </div>
                    <div class="col">
                        <button class="btn btn-info" @click="showMemo(item.id)">編</button>
                    </div>
                    <div class="col">
                        <button class="btn btn-danger" @click="deleteGoods(item.id)">削</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMemoList } from '../composables/useMemoList'

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
} = useMemoList()

const initRegist = () => {
    isEditRef.value = false
    memoRef.value = ''
}

const registGoods = () => {
    add(memoRef.value)
    memoRef.value = ''
}

const showMemo = (id) => {
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
</script>

<style></style>