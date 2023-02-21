/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				xxl: '1700px',
			},
			height: {
				'100': '26rem',
				'110': '28rem',
				'mac': '1200px',
				'120': '30rem',
				'130': '32rem',
			},
			minHeight: {
				'100': '100px'
			},
			gridTemplateColumns: {
				'auto-fit': 'repeat( auto-fit, minmax(250px, 1fr) );'
			},
			fontSize: {
				'inherit': 'inherit'
			},
			lineHeight: {
				'inherit': 'inherit'
			}
		},
	},
	plugins: [
		require('tailwindcss-fluid-type')({
			// your fluid type settings
			// works only with unitless numbers
			// This numbers are the defaults settings
			settings: {
				fontSizeMin: 0.875, // 1.125rem === 18px
				fontSizeMax: 1.25, // 1.25rem === 20px
				ratioMin: 1.125, // Multiplicator Min
				ratioMax: 1.25, // Multiplicator Max
				screenMin: 25, // 20rem === 320px
				screenMax: 150, // 96rem === 1536px
				unit: 'rem', // default is rem but it's also possible to use 'px'
				prefix: '', // set a prefix to use it alongside the default font sizes
				extendValues: true, // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
			},
			// Creates the text-xx classes
			// This are the default settings and analog to the tailwindcss defaults
			// Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
			values: {
				'xs': [-2, 1.6],
				'sm': [-1, 1.6],
				'base': [0, 1.6],
				'lg': [1, 1.6],
				'xl': [2, 1.2],
				'2xl': [3, 1.2],
				'3xl': [4, 1.2],
				'4xl': [5, 1.1],
				'5xl': [6, 1.1],
				'6xl': [7, 1.1],
				'7xl': [8, 1],
				'8xl': [9, 1],
				'9xl': [10, 1],
			},
		}),
	],
	variants: {
		fluidType: ['responsive']
	}
}
