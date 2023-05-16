import "./style.css";
import { createApp } from "vue";
import naive from "naive-ui/es/preset";
import { router } from "./common/router";
import App from "./App.vue";

const app = createApp(App);

app.use(naive);
app.use(router);

app.mount("#app");
