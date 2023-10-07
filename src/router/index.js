import { createRouter, createWebHashHistory } from 'vue-router'

// Importing pages  
import Home from '../pages/Home.vue'
import Results from '../pages/Results.vue'

const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/results', component: Results, name: 'Results' },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;