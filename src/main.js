import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
AOS.init();
const app = createApp(App);
app.use(router);
app.mount('#app');
