const tasks = (arr) => arr.join(' && ')

module.exports = {
	hooks: {
		'pre-commit': tasks([
			'lint-staged -c config/lint-staged.config.js',
			// 'test',
		]),
	},
}
