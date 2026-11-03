import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

const defaultIgnores = [
  // Ignore compiled files
  'dist/**',
];

const defaultFiles = [
  '**/*.ts',
];

const maxLenOptions = {
  code: 140,
  tabWidth: 2,
  comments: 140,
  ignorePattern: '^(?:(?:export\\s+)?type\\s+[A-Za-z_$][A-Za-z0-9_$]*\\s*(?:<[^>]+>)?\\s*=\\s*|import\\s+)', // Ignoring types definitions and imports
  ignoreComments: true,
  ignoreTrailingComments: false,
  ignoreUrls: true,
  ignoreStrings: false,
  ignoreTemplateLiterals: false,
  ignoreRegExpLiterals: false,
};

export default [
  { ignores: defaultIgnores },
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  stylistic.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: false },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    files: defaultFiles,
    rules: {
      /***********************
      *     Basic rules      *
      ***********************/
      'block-scoped-var': 'error',
      'consistent-this': 'error',
      // 'curly': ['error', 'all'],
      'default-case-last': 'error',
      'default-param-last': 'warn',
      'dot-notation': 'warn',
      'eqeqeq': ['error', 'smart'],
      'no-case-declarations': 'error',
      // 'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-duplicate-imports': 'warn',
      'no-empty-function': 'warn',
      'no-lonely-if': 'error',
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'warn',
      'no-unassigned-vars': 'warn',
      'no-unmodified-loop-condition': 'error',
      'no-use-before-define': 'error',
      'no-useless-assignment': 'warn',
      'prefer-template': 'error',

      /***********************
      *   Stylistic rules    *
      ***********************/
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/array-element-newline': ['error', 'consistent'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/function-paren-newline': ['error', 'multiline'],
      '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
      '@stylistic/indent': ['error', 2, { VariableDeclarator: 'first', SwitchCase: 1 }],
      '@stylistic/indent-binary-ops': 'off',
      '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
      '@stylistic/max-len': ['warn', { ...maxLenOptions }],
      '@stylistic/member-delimiter-style': ['error', {
        multiline: { delimiter: 'semi', requireLast: true },
        singleline: { delimiter: 'semi', requireLast: true },
        multilineDetection: 'brackets',
      }],
      '@stylistic/multiline-ternary': 'off',
      '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
      '@stylistic/no-confusing-arrow': 'warn',
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/no-mixed-operators': 'error',
      '@stylistic/no-multi-spaces': ['error', {
        ignoreEOLComments: true,
        exceptions: { BinaryExpression: false, ImportDeclaration: true, Property: true, VariableDeclarator: true },
      }],
      '@stylistic/no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 1 }],
      '@stylistic/no-trailing-spaces': 'warn',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/object-curly-newline': ['error', { multiline: true }],
      '@stylistic/operator-linebreak': ['error', 'after', {
        overrides: {
          '=': 'ignore',
          '+=': 'ignore',
          '-=': 'ignore',
          '*=': 'ignore',
          '/=': 'ignore',
          '>=': 'ignore',
          '<=': 'ignore',
        },
      }],
      '@stylistic/padded-blocks': 'off',
      '@stylistic/quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: 'always' }],
      '@stylistic/semi': ['error', 'always', { omitLastInOneLineBlock: false }],
      '@stylistic/semi-style': ['error', 'last'],
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always', catch: 'always' }],
      '@stylistic/spaced-comment': ['error', 'always', { exceptions: ['*', '/'] }],
      '@stylistic/switch-colon-spacing': 'warn',
      '@stylistic/template-curly-spacing': ['error', 'always'],
      '@stylistic/wrap-regex': 'error',
      '@stylistic/yield-star-spacing': ['error', 'after'],

      /***********************
      *   TypeScript rules   *
      ***********************/
      'no-undef': 'off', // Turning off some ESLint rules that messes up with TS rules
      'no-redeclare': 'off', // Turned off because this has false positives on TS function overloading.
      'no-dupe-class-members': 'off', // Turn off default ESLint rule that disallows TS class method overloading:

      '@typescript-eslint/no-dupe-class-members': 'error',
      // Replaced by @typescript-eslint/no-unused-vars
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', {
        vars: 'all',
        args: 'after-used',
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/ban-ts-comment': ['error', {
        'ts-ignore': 'allow-with-description',
        'ts-expect-error': 'allow-with-description',
      }],
    },
  },
  {
    files: ['src/utils/sets/*.ts'],
    rules: { '@stylistic/array-element-newline': 'off' },
  },
];
