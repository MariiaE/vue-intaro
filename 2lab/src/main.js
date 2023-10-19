import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';
import App from './App.vue'
const app = createApp(App);
app.use(bootstrap);
app.mount('#app')

