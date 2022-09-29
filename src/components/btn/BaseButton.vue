<template>
    <button class="btn btn-xs box-shadow--16dp" :class="props.color" @click="onClick"><slot/></button>
</template>

<script setup>
    const props = defineProps({color: String})
    const emit = defineEmits(['on-click'])
    const onClick = () => {
        emit('on-click')
    }
</script>

<style>
    .box-shadow--8dp {
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .2)
}
.box-shadow--16dp {
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2)
}
</style>