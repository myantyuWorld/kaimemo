<template>
    <div class="mt-2">
        <div class="card">
            <div class="card-body shadow">
                <div class="row">
                    <div class="col">
                        SHOPPING ITEMS.
                    </div>
                    <div class="col"></div>
                    <div class="col-2">
                        <button class="btn btn-danger" @click="emit('move-total-ammount')">+</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-auto">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox">
                            <label class="form-check-label" for="inlineCheckbox1">🍔</label>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox">
                            <label class="form-check-label" for="inlineCheckbox2">🧴</label>
                        </div>
                    </div>
                </div>
                <div class="" v-for="item in memoListRef" :key="item.id">
                    <GoodsListItem :item="item" 
                    @change-check="emit('change-check', item.id)" 
                    @show-memo="emit('show-memo', item.id)"
                    @delete-goods="emit('delete-goods', item.id)" />
                    <hr />
                </div>
            </div>

        </div>
    </div>


</template>

<script setup>
import GoodsListItem from './GoodsListItem.vue';

const props = defineProps({ memoListRef: Object })
const emit = defineEmits()


</script>

<style>

</style>
