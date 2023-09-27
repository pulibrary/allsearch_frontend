module.exports = {
    env: {
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      ["plugin:vuejs-accessibility/recommended"],
      'prettier'
    ],
    rules: {
        "vue/require-default-prop": "off",
        "vuejs-accessibility/rule-name": "error"
    }
  }