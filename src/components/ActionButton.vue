<script setup>
import { useStore } from 'vuex'
const props = defineProps({
    itemId: { type: Number, required: true },
    action: { type: String, required: true }
})
const store = useStore()
const primaryButtonClasses = store.getters.getPrimaryButtonClasses
const dangerButtonClasses = store.getters.getDangerButtonClasses
</script>
<template>
    <button v-if="action === 'add'" @click.prevet="store.dispatch('ADD_ITEM_TO_CART', props.itemId)" type="button"
        :class="primaryButtonClasses">Add Item to Cart</button>
    <button v-else @click.prevet="store.dispatch('REMOVE_ITEM_FROM_CART', props.itemId)" type="button"
        :class="dangerButtonClasses">Remove From Cart</button>
</template>