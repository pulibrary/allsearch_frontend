import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import honeybadgerRollupPlugin from '@honeybadger-io/rollup-plugin';

const rollupOptionsFor = (environmentVariables: Record<string, string>) => {
  if (environmentVariables.VITE_HONEYBADGER_API_KEY) {
    return {
      rollupOptions: {
        plugins: [honeybadgerPluginFor(environmentVariables)]
      }
    };
  } else {
    return {};
  }
};

const honeybadgerPluginFor = (environmentVariables: Record<string, string>) => {
  const options = {
    apiKey: environmentVariables.VITE_HONEYBADGER_API_KEY,
    assetsUrl:
      environmentVariables.VITE_HONEYBADGER_ENV === 'staging'
        ? 'https://allsearch-staging.princeton.edu'
        : 'https://allsearch.princeton.edu'
  };
  return honeybadgerRollupPlugin(options);
};

// https://vitejs.dev/config/
export default ({ mode }) => {
  // values from the .env file that have the VITE_ prefix
  const environmentVariables: Record<string, string> = loadEnv(
    mode,
    process.cwd()
  );

  return defineConfig({
    plugins: [vue()],
    server: {
      cors: false
    },
    build: {
      sourcemap: true,
      ...rollupOptionsFor(environmentVariables)
    }
  });
};
