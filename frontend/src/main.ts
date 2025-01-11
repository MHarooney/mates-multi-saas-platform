import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// Set the base URL for API requests
axios.defaults.baseURL = 'http://localhost:8000/api' // Laravel backend URL

const app = createApp(App)
app.use(router)
app.mount('#app')
