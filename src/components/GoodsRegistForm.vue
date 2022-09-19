<template>
    <div class="card shadow">
        <div class="card-body">
            <div class="row">
                <div class="col">Item Regist.</div>
                <div class="col"></div>
                <div class="col-2">
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
            <div class="row">
                <div class="col-auto">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" v-model="foodCheckRef">
                        <label class="form-check-label" for="inlineCheckbox1">🍔</label>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" v-model="nessesaryCheckRef">
                        <label class="form-check-label" for="inlineCheckbox2">🧴</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="15文字以内で入力" v-model="props.memoRef">
                    </div>
                </div>
                <div class="col-2">
                    <EditButton @edit-click="emit('edit-goods')" :is-edit="isEditRef"></EditButton>
                    <BaseButton color="btn-primary rounded-circle btn--item--add" @on-click="emit('regist-goods')" v-show="!props.isEditRef">
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
import BaseButton from './BaseButton.vue'
import EditButton from './EditButton.vue';

const props = defineProps({
    memoRef: String,
    isEditRef: Boolean
})
const emit = defineEmits()

</script>

<style>

</style>