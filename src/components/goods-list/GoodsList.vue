<template>
    <div class="">
        <div class="card">
            <div class="card-body shadow">
                <div class="row">
                    <div class="col-9  d-flex align-items-center">
                        SHOPPING ITEMS.
                    </div>
                    <div class="col-2 d-flex align-items-center">
                        <button class="btn btn-danger">+</button>
                    </div>
                </div>
                <hr class="my-1">
                <div class="row">
                    <div class="col">
                        filter
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
                <hr class="my-1">
                <transition-group name="list-complete">
                    <div class="list-complete-item" v-for="item in memoListRef" :key="item.id">
                        <GoodsListItem :item="item" 
                        @change-check="emit('change-check', item.id)" 
                        @show-memo="emit('show-memo', item.id)"
                        @delete-goods="emit('delete-goods', item.id)" />
                        <hr />
                    </div>
                </transition-group>
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
.list-complete-item {
  transition: all 0.8s ease;
  display: inline-block;
  margin-right: 30px;
  width: 85%;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}
</style>
