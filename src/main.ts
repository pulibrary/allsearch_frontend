import { createApp, Plugin } from 'vue';
import 'lux-design-system/dist/style.css';
import { LuxIconSearch } from 'lux-design-system';
import App from './App.vue';
import HoneybadgerVue from '@honeybadger-io/vue/dist/honeybadger-vue.esm.js';
import config from './config';
import { processException } from './config/HoneybadgerNotice';
import { Notice } from '@honeybadger-io/core/build/src/types.js';

const app = createApp(App);

const honeybadgerConfig = {
  apiKey: config.honeybadgerApiKey,
  environment: config.honeybadgerEnvironment
};

app.component('LuxIconSearch', LuxIconSearch);
app.use(HoneybadgerVue as Plugin, honeybadgerConfig);
app.config.globalProperties.$honeybadger.beforeNotify(
  (exception: Notice | undefined) => processException(exception)
);

app.mount('#app');
