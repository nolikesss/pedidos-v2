import "./assets/scss/theme.scss";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import { createApp } from "vue";
import router from "./plugins/router";
import PrimeVue from "primevue/config";

import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(PrimeVue);

app.mount("#app");
