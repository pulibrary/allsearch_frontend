import { createApp } from 'vue';
import { createGtm } from '@gtm-support/vue-gtm';
import App from './App.vue';
import HoneybadgerVue from '@honeybadger-io/vue';
import config from './config';
import 'lux-design-system/dist/style.css';

const app = createApp(App);

const honeybadgerConfig = {
  apiKey: config.honeybadgerApiKey,
  environemnt: config.honeybadgerEnvironment
};

app.use(HoneybadgerVue, honeybadgerConfig);
app.use(
  createGtm({
    id: 'G-90G7R5LX2F'
  })
);
app.mount('#app');
