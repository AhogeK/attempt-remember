import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.errorHandler = (err, vm, info) => {
  console.error('Global error:', err)
  console.log('Vue instance:', vm)
  console.log('Error info:', info)
}

app.mount('#app')
