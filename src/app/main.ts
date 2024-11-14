import { createApp } from 'vue'

import App from './App.vue'
import { i18n, pinia, router } from './providers'

createApp(App).use(i18n).use(router).use(pinia).mount('#app')
