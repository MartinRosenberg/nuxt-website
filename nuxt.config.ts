import { Configuration as WebpackConfiguration } from 'webpack'

export default {
	// Build configuration
	build: {
		// You can extend webpack config here
		// Actual type of ctx is: `NuxtWebpackEnv & { loaders: NuxtConfigurationLoaders }`
		// (See node_modules/@nuxt/types/config/build.d.ts)
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		extend (config: WebpackConfiguration, ctx: any): void {},
	},

	// Nuxt.js dev-modules
	buildModules: [
		[
			'@nuxt/typescript-build',
			{
				typeCheck: true,
				ignoreNotFoundWarnings: true,
			},
		],
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
		// Doc: https://github.com/nuxt-community/stylelint-module
		'@nuxtjs/stylelint-module',
	],

	// Global CSS
	css: [
		'@/assets/primitive/main.scss',
	],

	// Headers of the page
	head: {
		title: process.env.npm_package_name ?? '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description ?? '' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		],
	},

	// Customize the progress-bar color
	loading: { color: '#fff' },

	mode: 'universal',

	// Nuxt.js modules
	modules: [
		// Doc: https://bootstrap-vue.js.org
		'bootstrap-vue/nuxt',
		'@nuxtjs/pwa',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv',
	],

	// Plugins to load before mounting the App
	plugins: [],

	srcDir: 'src/',
}
