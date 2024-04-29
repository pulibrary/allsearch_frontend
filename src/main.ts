import { createApp } from 'vue';
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

app.mount('#app');
