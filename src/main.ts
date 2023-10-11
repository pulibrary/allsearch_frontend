import { createApp } from "vue";
import App from "./App.vue";
import HoneybadgerVue from "@honeybadger-io/vue";
// Example use of Honeybadger: Honeybadger.notify("Testing Honeybadger!");
// eslint-disable-next-line no-unused-vars
import Honeybadger from "@honeybadger-io/js";

const app = createApp(App);

const config = {
  apiKey: import.meta.env.VITE_HONEYBADGER_API_KEY,
  environment: import.meta.env.VITE_HONEYBADGER_ENV,
};

app.use(HoneybadgerVue, config);

app.mount("#app");
