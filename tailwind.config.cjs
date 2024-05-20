const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['lofi', 'dark']
	},
	plugins: [require('daisyui')]
};

module.exports = config;
