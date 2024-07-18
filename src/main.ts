import { createApp } from 'vue';
import 'lux-design-system/dist/style.css';
import App from './App.vue';
import HoneybadgerVue from '@honeybadger-io/vue';
import config from './config';

const app = createApp(App);

const honeybadgerConfig = {
  apiKey: config.honeybadgerApiKey,
  environment: config.honeybadgerEnvironment
};

app.use(HoneybadgerVue, honeybadgerConfig);

app.mount('#app');
