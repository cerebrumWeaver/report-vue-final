import { createApp } from "vue";
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


// createApp(App).use(VueAxios, axios).use(ElementPlus).use(store).use(router).mount("#app");
const app = createApp(App)
app.use(VueAxios, axios).use(ElementPlus).use(store).use(router).mount("#app");