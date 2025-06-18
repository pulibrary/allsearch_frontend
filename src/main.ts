import { createApp } from 'vue';
import 'lux-design-system/dist/style.css';
import { LuxIconSearch } from 'lux-design-system';
import App from './App.vue';
import HoneybadgerVue from '@honeybadger-io/vue';
import config from './config';
import { processException } from './config/HoneybadgerNotice';

const app = createApp(App);

const honeybadgerConfig = {
  apiKey: config.honeybadgerApiKey,
  environment: config.honeybadgerEnvironment
};

app.component('LuxIconSearch', LuxIconSearch);
app.use(HoneybadgerVue, honeybadgerConfig);
app.$honeybadger.beforeNotify(exception => processException(exception));

app.mount('#app');
