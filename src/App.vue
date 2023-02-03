<script setup>
import MainLayout from './layouts/MainLayout.vue'
import CartComponent from './components/CartComponent.vue'
import ProductsListComponent from './components/ProductsListComponent.vue'
</script>
<template>
  <MainLayout>
    <ProductsListComponent class="w-full" title="Products List" />
    <CartComponent class="w-full" title="Cart's List" />
  </MainLayout>
</template>