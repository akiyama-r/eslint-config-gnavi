module.exports = {
  'ecmaFeatures': {
  },

  'env': {
    'browser': true,
    'node': true,
    'jquery': true,
    'mocha': true
  },

  'globals': {
    '_': true,
    'jQuery': true,
    '$': true
  },

  'rules': {

    // Possible Errors
    'comma-dangle': [2, 'never'],
    'no-cond-assign': [2, 'always'],
    'no-console': [1],
    'no-constant-condition': [2],
    'no-control-regex': [2],
    'no-debugger': [2],
    'no-dupe-args': [2],
    'no-dupe-keys': [2],
    'no-duplicate-case': [2],
    'no-empty': [2],
    'no-ex-assign': [2],
    'no-extra-boolean-cast': [2],
    'no-extra-parens': [1, 'all'],
    'no-extra-semi': [2],
    'no-func-assign': [2],
    'no-inner-declarations': [2],
    'no-invalid-regexp': [2],
    'no-irregular-whitespace': [2],
    'no-negated-in-lhs': [2],
    'no-obj-calls': [2],
    'no-regex-spaces': [2],
    'no-reserved-keys': [2],
    'no-sparse-arrays': [2],
    'no-unreachable': [2],
    'use-isnan': [2],
    'valid-jsdoc': [1],
    'valid-typeof': [2],

    // Best Practices
    'block-scoped-var': [2],
    'complexity': [1, 3],
    'curly': [2],
    'default-case': [2],
    'dot-notation': [1],
    'eqeqeq': [2],
    'guard-for-in': [1],
    'no-alert': [1],
    'no-caller': [2],
    'no-div-regex': [2],
    'no-else-return': [2],
    'no-empty-label': [2],
    'no-eq-null': [2],
    'no-eval': [2],
    'no-extend-native': [2],
    'no-extra-bind': [2],
    'no-fallthrough': [2],
    'no-floating-decimal': [2],
    'no-implied-eval': [2],
    'no-iterator': [2],
    'no-labels': [2],
    'no-lone-blocks': [2],
    'no-loop-func': [2],
    'no-multi-spaces': [2],
    'no-multi-str': [2],
    'no-native-reassign': [2],
    'no-new-func': [2],
    'no-new-wrappers': [2],
    'no-new': [2],
    'no-octal-escape': [2],
    'no-octal': [2],
    'no-param-reassign': [2],
    'no-process-env': [2],
    'no-proto': [2],
    'no-redeclare': [2],
    'no-return-assign': [2],
    'no-script-url': [2],
    'no-self-compare': [2],
    'no-sequences': [2],
    'no-throw-literal': [2],
    'no-unused-expressions': [2],
    'no-warning-comments': [2],
    'no-with': [2],
    'radix': [2],
    'yoda': [2],

    // Strict Mode
    'strict': [0],

    // Variables
    'no-catch-shadow': [2],
    'no-delete-var': [2],
    'no-label-var': [2],
    'no-shadow-restricted-names': [2],
    'no-shadow': [2],
    'no-undef-init': [2],
    'no-undef': [2],
    'no-unused-vars': [2],
    'no-use-before-define': [2],

    // Node.js
    'handle-callback-err': [1],
    'no-mixed-requires': [1],
    'no-new-require': [1],
    'no-path-concat': [1],
    'no-process-exit': [1],

    // Stylistic Issues
    'brace-style': [2, '1tbs'],
    'camelcase': [2],
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'comma-style': [1, 'last'],
    'indent': [1, 2],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'max-nested-callbacks': [2, 3],
    'new-cap': [2],
    'new-parens': [2],
    'newline-after-var': [1, 'always'],
    'no-array-constructor': [2],
    'no-inline-comments': [2],
    'no-lonely-if': [1],
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
    'no-multiple-empty-lines': [2, {'max': 2}],
    'no-nested-ternary': [1],
    'no-new-object': [2],
    'no-spaced-func': [2],
    'no-trailing-spaces': [2],
    'no-underscore-dangle': [1],
    'quotes': [2, 'single', 'avoid-escape'],
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    'semi': [2],
    'space-after-keywords': [2],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': [2],
    'space-return-throw-case': [2]
  }
};
