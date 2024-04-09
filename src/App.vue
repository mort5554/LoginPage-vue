<script setup>
import {RouterView} from "vue-router"
import { useUserStore } from '@/stores/user';

const store = useUserStore()
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>

</style>