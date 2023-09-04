<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'
import { onMounted } from 'vue'

const counter = useCounterStore()

onMounted(() => {
  console.log('AboutView mounted')
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button class="button" @click="counter.increment()">Count is: {{ counter.count }}</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
  }
}
</style>