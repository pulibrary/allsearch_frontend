import { createApp } from "vue";
import App from "./App.vue";
import HoneybadgerVue from "@honeybadger-io/vue";

const app = createApp(App);

const config = {
  apiKey: import.meta.env.VITE_HONEYBADGER_API_KEY,
  environment: import.meta.env.VITE_HONEYBADGER_ENV,
};

app.use(HoneybadgerVue, config);

app.mount("#app");
