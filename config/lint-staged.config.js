module.exports = {
	'*.{css,vue}': 'stylelint --config config/stylelint.config.js',
	'*.{js,ts,vue}': 'eslint --cache --fix --ignore-path config/.eslintignore',
	// '*.{js,ts,vue}': 'eslint --cache --fix --ignore-path config/.eslintignore -c .eslintrc.js',
}
