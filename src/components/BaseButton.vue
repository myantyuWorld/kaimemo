<template>
    <button class="btn" :class="props.color" @click="onClick"><slot/></button>
</template>

<script setup>
    const props = defineProps({color: String})
    const emit = defineEmits(['on-click'])
    const onClick = () => {
        emit('on-click')
    }
    
    const aaa = () => {}
</script>