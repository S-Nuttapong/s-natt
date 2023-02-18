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
				'mac': '1200px'
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
	plugins: [],
}
