import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'


const app = createApp(App)

axios.defaults.baseURL = 'http://127.0.0.1:5000'; 
app.config.globalProperties.$ajax = axios;
app.mount('#app') 