import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Configurator from "./pages/Configurator.vue";

const router = createRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home',
        },
        {
            path: '/config',
            component: Configurator,
            name: 'Configurator',
        }
    ],
    history: createWebHashHistory(),
})
const app = createApp(App)
app.use(router)
app.mount('#app')
