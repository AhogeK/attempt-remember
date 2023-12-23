<script lang="ts" setup>
import IconSum from '@/components/icons/VTIconSun.vue'
import IconMoon from '@/components/icons/VTIconMoon.vue'
import { ref } from 'vue'

const storageKey = 'theme-appearance'
const { toggle } =
  typeof localStorage !== 'undefined'
    ? useAppearance()
    : {
        toggle: () => {}
      }

function useAppearance() {
  let userPreference = localStorage.getItem(storageKey) || 'auto'
  const query = window.matchMedia(`(prefers-color-scheme: dark)`)
  const classList = document.documentElement.classList
  const isDark = ref(userPreference === 'auto' ? query.matches : userPreference === 'dark')
  const setClass = (dark: boolean) => classList[dark ? 'add' : 'remove']('dark')

  query.onchange = (e) => {
    if (userPreference === 'auto') {
      setClass((isDark.value = e.matches))
    }
  }

  const toggle = () => {
    setClass((isDark.value = !isDark.value))
    localStorage.setItem(
      storageKey,
      (userPreference = isDark.value
        ? query.matches
          ? 'auto'
          : 'dark'
        : query.matches
          ? 'light'
          : 'auto')
    )
  }

  return { isDark, toggle }
}
</script>
<template>
  <button class="switch-button" role="switch" type="button" @click="toggle">
    <span class="switch-check">
      <span class="switch-icon">
        <IconSum class="switch-sun" />
        <IconMoon class="switch-moon" />
      </span>
    </span>
  </button>
</template>
<style scoped>
.switch-button {
  position: relative;
  border-radius: 0.6875rem;
  display: block;
  width: 2.5rem;
  height: 1.375rem;
  flex-shrink: 0;
  border: 0.0625rem solid var(--vt-c-divider);
  background-color: var(--vt-c-bg-mute);
  transition:
    border-color 0.25s,
    background-color 0.25s;
}

.switch-button:hover {
  border-color: var(--vt-c-gray);
}

.switch-check {
  position: absolute;
  top: 0.0625rem;
  left: 0.0625rem;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 50%;
  background-color: var(--vt-c-white);
  box-shadow: var(--vt-shadow-1);
  transition:
    background-color 0.25s,
    transform 0.25s;
}

.switch-icon {
  position: relative;
  display: block;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 50%;
  overflow: hidden;
}

.switch-sun {
  opacity: 1;
}

.switch-moon {
  opacity: 0;
}

.switch-icon svg {
  position: absolute;
  top: 0.1875rem;
  left: 0.1875rem;
  width: 0.75rem;
  height: 0.75rem;
  fill: var(--vt-c-text-2);
}

.dark .switch-check {
  background-color: var(--vt-c-black);
}

.dark .switch-icon svg {
  fill: var(--vt-c-text-1);
  transition: opacity 0.25s;
}

.dark .switch-sun {
  opacity: 0;
}

.dark .switch-moon {
  opacity: 1;
}

.dark .switch-button .switch-check {
  transform: translateX(1.125rem);
}
</style>