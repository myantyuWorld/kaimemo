<template>
    <div class="card shadow">
        <div class="card-body">
            <div class="row">
                <div class="col-9 d-flex align-items-center"><h4>Item Regist.</h4></div>
                <div class="col-2 d-flex align-items-center">
                    <BaseButton color="btn-secondary rounded-circle btn--item--init " @on-click="emit('init-click')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                            <path
                                d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                        </svg>
                    </BaseButton>
                </div>
            </div>
            <hr class="my-1"/>
            <div class="row">
                <div class="col">
                    filter
                </div>
            </div>
            <div class="row">
                <div class="col-auto">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" value="0" v-model="category" >
                        <label class="form-check-label" for="inlineCheckbox1">🍔</label>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" value="1" v-model="category">
                        <label class="form-check-label" for="inlineCheckbox2">🧴</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-9">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="15文字以内で入力" v-model="memoComputed">
                    </div>
                </div>
                <div class="col-2">
                    <EditButton @edit-click="emit('edit-goods')" :is-edit="isEditRef"></EditButton>
                    <BaseButton color="btn-primary rounded-circle btn--item--add" @on-click="emit('regist-goods', category)" v-show="!props.isEditRef">
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
</template>

<script setup>
import {ref, computed, toRefs} from 'vue'
import BaseButton from './btn/BaseButton.vue'
import EditButton from './btn/EditButton.vue';

const category = ref('0') // 初期値は食費


const props = defineProps({
    memoRef: String,
    isEditRef: Boolean
})
const { memoRef } = toRefs(props)

const emit = defineEmits(['update:memo-ref'])
const memoComputed = computed({
    get: () => memoRef.value,
    set: (value) => {
        emit('update:memo-ref', value)
    }
})

</script>

<style>

</style>