<script setup>
import { useStore } from 'vuex'
import ListItem from './ListItem.vue'
import SourceTittle from './SourceTittle.vue'
defineProps({ title: String })
const store = useStore()
const data = store.getters.getCart
</script>
<template>
    <div class="flex flex-col space-y-2">
        <SourceTittle :title="title" />
        <ul>
            <ListItem v-for="item in data" :key="item.index" :data="item" action="delete"/>
        </ul>
    </div>
</template>