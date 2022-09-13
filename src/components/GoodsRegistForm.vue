<template>
    <div class="card shadow">
        <div class="card-body">
            <div>
                <h3>ITEM REGIST.
                    <BaseButton color="btn-secondary" @on-click="initRegist">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                            <path
                                d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                        </svg>
                    </BaseButton>
                </h3>
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
                    <EditButton @edit-click="editGoods" :is-edit="isEditRef"></EditButton>
                    <BaseButton color="btn-primary" @on-click="registGoods" v-show="!isEditRef">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </BaseButton>
                </div>
            </div>
        </div>
    </div>
    <div class="card shadow">
        <div class="card-body">
            <div class="" v-for="item in memoListRef" :key="item.id">
                <div class="row" :class="{fin: item.checked}">
                    <div class="col">
                        <input type="checkbox" class="check" @click="changeCheck(item.id)" :checked="item.checked" />
                    </div>
                    <div class="col-6">
                        <label :class="{fin: item.checked}">{{ item.memo}}</label>
                    </div>
                    <div class="col">
                        <EditButton @edit-click="showMemo(item.id)" :is-edit="true"></EditButton>
                    </div>
                    <div class="col">
                        <BaseButton color="btn-danger" @on-click="deleteGoods(item.id)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M6.5 1a.5.5 0 0 0-.5.5v1h4v-1a.5.5 0 0 0-.5-.5h-3ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1H3.042l.846 10.58a1 1 0 0 0 .997.92h6.23a1 1 0 0 0 .997-.92l.846-10.58Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                            </svg>
                        </BaseButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMemoList } from '../composables/useMemoList'
import BaseButton from './BaseButton.vue'
import EditButton from './EditButton.vue';

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

// -----
const test = () => {
    console.log("call test!")
}



// -----

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

const changeCheck = (id) => {
    check(id)
}
</script>

<style>

</style>