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
                <div class="col-auto">
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="15文字以内で入力" v-model="memoRef">
                    </div>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary" @click="registGoods">ADD</button>
                </div>
            </div>
        </div>
        {{foodCheckRef}}
        {{nessesaryCheckRef}}
        {{memoRef}}
    </div>
</template>

<script setup>
import { ref } from 'vue';

const memoRef = ref('')
const foodCheckRef = ref(true)
const nessesaryCheckRef = ref(true)
const memoList = ref([])

const registGoods = () => {
    const id = new Date().getTime()

    memoList.value.push({id: id, memo: memoRef.value})
    localStorage.memoList = JSON.stringify(memoList.value)
    memoRef.value = ''
}
</script>

<style></style>