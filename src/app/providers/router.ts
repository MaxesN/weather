import { createMemoryHistory, createRouter } from 'vue-router'

import FavoritePage from '@/pages/FavoritePage/FavoritePage.vue'
import HomePage from '@/pages/HomePage/HomePage.vue'


const routes = [
  { path: '/', component: HomePage },
  { path: '/favorite', component: FavoritePage },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})