import './assets/main.css'

import { createApp } from 'vue'
import {createPinia} from "pinia"
import router from "./router/index.js"
import App from './App.vue'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(Toast)

app.mount('#app')
