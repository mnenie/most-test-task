import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: true,
  },
}).overrideRules({
  'vue/multi-word-component-names': 'off',
  'vue/max-attributes-per-line': [
    'error', { singleline: 3 },
  ],
})
