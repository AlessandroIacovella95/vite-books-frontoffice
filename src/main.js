import { createApp } from "vue";
import {router} from "./router";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import "./style.scss";

import App from "./App.vue";


createApp(App)
.use(router)
.mount("#app");
