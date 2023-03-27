import { createApp } from "vue";
import { FontAwesomeIcon } from "./fontawesome";
import ClickOutside from "./directives/clickoutside";
import App from "./App.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("VueDatePicker", VueDatePicker);
app.directive("click-outside", ClickOutside);
app.use(store);
app.use(router);
app.mount("#app");
