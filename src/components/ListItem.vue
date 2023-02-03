<script setup>
import ActionButton from './ActionButton.vue'
defineProps({
    data: { type: Object, required: false, default: null },
    action: { type: String, required: false, default: 'add' }
})
</script>

<template>
    <li class="text-xl text-gray-800 flex flex-row justify-between max-w-md mb-2">
        <span>{{ data.name }}</span>
        <ActionButton :itemId="data.id" :action="action" />
    </li>
</template>