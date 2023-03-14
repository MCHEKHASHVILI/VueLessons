import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import store from './store/store'

import axios from "axios"

axios.defaults.withCredentials = true
axios.defaults.baseURL=import.meta.env.VITE_BASE_API_URL
axios.defaults.headers.common['Accept'] = 'Aplication/json'
axios.defaults.headers.common['Content-Type'] = 'Aplication/json'

// console.log(axios.defaults)

axios.get('sanctum/csrf-cookie', { cache: true }).then(response => {
    // axios.defaults.headers.common['X-XSRF-TOKEN'] = 
    console.log(response)
});

createApp(App).use(store).mount('#app')