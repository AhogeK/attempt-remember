const storageKey: string = 'theme-appearance'
const userPreference: string | null = localStorage.getItem(storageKey) || 'auto'
const query: MediaQueryList = window.matchMedia(`(prefers-color-scheme: dark)`)
const isDark: boolean = userPreference === 'auto' ? query.matches : userPreference === 'dark'

function setTheme(isDark: boolean): void {
  const classList: DOMTokenList = document.documentElement.classList
  classList[isDark ? 'add' : 'remove']('dark')
}

function setTransition(enable: boolean): void {
  const classList: DOMTokenList = document.documentElement.classList
  if (enable) {
    classList.add('transition-colors')
  } else {
    classList.remove('transition-colors')
  }
}

setTransition(false)
setTheme(isDark)
setTimeout(() => setTransition(true), 50)
