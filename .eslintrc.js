const WARN = 1
const OFF = 0

module.exports = {
	env: {
		browser: true,
		es2020: true,
		jest: true,
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'@nuxtjs',
		'plugin:nuxt/recommended',
		'standard-with-typescript',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaFeatures: {
			impliedStrict: true,
		},
		ecmaVersion: 2020,
		extraFileExtensions: ['.vue'],
		parser: '@typescript-eslint/parser',
		project: 'tsconfig.json',
		sourceType: 'module',
	},
	plugins: [
		'vue',
		'@typescript-eslint',
	],
	root: true,
	rules: {
		'arrow-parens': [WARN, 'always'],
		'comma-dangle': [WARN, 'always-multiline'],
		'quote-props': [WARN, 'consistent-as-needed'],

		// indentation
		'no-tabs': OFF,
		'indent': OFF,
		'@typescript-eslint/indent': OFF,
		'vue/html-indent': [WARN, 'tab'],
		'vue/script-indent': [WARN, 'tab', { baseIndent: 1, switchCase: 1 }],
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				indent: [WARN, 'tab'],
			},
		},
		{
			files: ['*.ts'],
			rules: {
				'@typescript-eslint/indent': [WARN, 'tab'],
			},
		},
	],
}
