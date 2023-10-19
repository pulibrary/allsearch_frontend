import { createApp } from 'vue';
import App from './App.vue';
import HoneybadgerVue from '@honeybadger-io/vue';
import config from './config';

const app = createApp(App);

const honeybadgerConfig = {
  apiKey: config.honeybadgerApiKey,
  environemnt: config.honeybadgerEnvironment
};

app.use(HoneybadgerVue, honeybadgerConfig);

app.mount('#app');
