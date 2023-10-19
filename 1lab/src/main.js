import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import InputNumber from 'primevue/inputnumber';
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';
import App from './App.vue'
const app = createApp(App);
app.use(PrimeVue);
app.use(bootstrap);
app.component("InputNumber", InputNumber);
app.mount('#app')
