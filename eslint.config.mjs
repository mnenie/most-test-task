import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: true,
  },
}).overrideRules({
  'vue/multi-word-component-names': 'off',
  'vue/max-attributes-per-line': [
    'error', { singleline: 5 },
  ],
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-unused-vars': 'warn',
})
