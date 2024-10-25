import type { Config } from 'tailwindcss';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		letterSpacing: {
			wide: '0.5em',
			wider: '0.75em',
			widest: '1em'
		},
		extend: {
			colors: {
				orange: {
					DEFAULT: '#D87D4A',
					bright: '#FBAF85'
				},
				white: {
					DEFAULT: '#FFFFFF',
					bright: 'FAFAFA',
					grey: '#F1F1F1'
				},
				black: '#000000',
				charcoal: '#101010'
			},
			fontFamily: {
				sans: ['Manrope Variable', 'sans-serif']
			}
		}
	},
	plugins: []
} as Config;
