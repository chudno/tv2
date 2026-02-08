/* eslint-env node */
// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    'selector-class-pattern': [
      '^([a-z0-9]+(-[a-z0-9]+)*)(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$',
      {
        message: 'Selector should be BEM and kebab-case (block__element--modifier)',
      },
    ],
    'custom-property-empty-line-before': null,
    'custom-property-pattern': null,
    'no-descending-specificity': null,
    'scss/dollar-variable-pattern': '^([a-z][a-zA-Z0-9]*)$',
    'scss/percent-placeholder-pattern': '^([a-z][a-zA-Z0-9]*)$',
  },
  ignoreFiles: ['node_modules/**', 'dist/**'],
}
