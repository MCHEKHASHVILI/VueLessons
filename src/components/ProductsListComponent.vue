<script setup>
import { useStore } from 'vuex'
import ListItem from './ListItem.vue'
import SourceTittle from './SourceTittle.vue'
defineProps({ title: String })
const store = useStore()
const data = store.getters.getProducts;
</script>
<template>
    <div class="flex flex-col space-y-2">
        <SourceTittle :title="title" />
        <ul class="flex flex-col">
            <ListItem v-for="item in data" :key="item.index" :data="item" />
        </ul>
    </div>
</template>