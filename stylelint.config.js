module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': ['dollar-variables', 'declarations'],
    'order/properties-order': [
      ['width', 'height'],
      { unspecified: 'bottomAlphabetical' },
    ],
    'selector-class-pattern':
      '^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$', // https://regexr.com/3apms
  },
};
