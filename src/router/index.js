import { createRouter, createWebHashHistory } from 'vue-router'

// Importing pages  
import Home from '../pages/Home.vue'

const routes = [
    { path: '/', component: Home, name: 'Home' },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;