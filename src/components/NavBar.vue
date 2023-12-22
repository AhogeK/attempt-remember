<script lang="ts" setup>
import ThemeSwitchToggle from '@/components/ThemeSwitchToggle.vue'
</script>
<template>
  <div class="nav-bar">
    <div>
      <slot></slot>
    </div>
    <ThemeSwitchToggle class="theme-switch-toggle">这里是主题切换区</ThemeSwitchToggle>
  </div>
</template>
<style scoped>
.nav-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .theme-switch-toggle {
    margin-right: 20px;
  }
}
</style>
