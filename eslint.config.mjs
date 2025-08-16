// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/html-self-closing": "off",
    "vue/no-v-html": "off",
    "vue/require-default-prop": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
});
// Your custom configs here
