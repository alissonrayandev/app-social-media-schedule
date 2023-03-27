import { createApp } from "vue";
import ClickOutside from "@/directives/clickoutside";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.directive("click-outside", ClickOutside);
app.use(store);
app.use(router);
app.mount("#app");
