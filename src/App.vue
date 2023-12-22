<script lang="ts" setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="view">
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped></style>