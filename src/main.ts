import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import HoneybadgerVue from "@honeybadger-io/vue"
import Honeybadger from "@honeybadger-io/js";

const app = createApp(App)

const config = {
    apiKey: import.meta.env.VITE_HONEYBADGER_API_KEY,
    environment: "production"
}

app.use(HoneybadgerVue, config)

app.mount("#app")
Honeybadger.notify("Testing Honeybadger!");
