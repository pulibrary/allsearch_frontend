export default {
  allsearchApiUrl:
    import.meta.env.VITE_ALLSEARCH_API_URL ||
    'https://allsearch-api.princeton.edu',
  bibdataUrl:
    import.meta.env.VITE_BIBDATA_URL ||
    'https://bibdata-staging.lib.princeton.edu',
  honeybadgerApiKey: import.meta.env.VITE_HONEYBADGER_API_KEY,
  honeybadgerEnvironment: import.meta.env.VITE_HONEYBADGER_ENV
};
