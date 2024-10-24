import type { Config } from "tailwindcss";
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		letterSpacing: {
			wide: '0.25em',
			wider: '0.5em',
			widest: '0.75em'
		},
		extend: {
			colors: {
				orange: {
					DEFAULT: '#D87D4A',
					light: '#FBAF85'
				},
				white: {
					DEFAULT: '#FFFFFF',
					light: 'FAFAFA',
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
 