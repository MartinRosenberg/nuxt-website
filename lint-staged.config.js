module.exports = {
	'*.{css,sass,scss,vue}': 'stylelint --cache --fix',
	'*.{js,ts,vue}': 'eslint --cache --fix',
	'package.json': 'sort-package-json',
}
