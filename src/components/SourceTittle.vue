<script>
export default {
    name: "SourceTitle",
    props: {
        title: String
    }
}
</script>
<template>
    <h1 class="font-bold text-3xl text-green-600 mb-4">{{ title }}</h1>
</template>